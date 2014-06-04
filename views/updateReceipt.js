HRworksReceipt.updateReceipt = function (params) {

	function removeReceipt() {
		HRworksReceipt.localStoreReceipts.remove(params.id);
		HRworksReceipt.app.navigate('home', { direction: 'backward', root: true });
	}
	
	function getReceiptById(id) {
        var receipts = JSON.parse(localStorage.getItem("dx-data-localStore-receipts"));
		for(var i = 0; i < receipts.length; i++) {
			if(receipts[i].guid == id) {
				var receipt = receipts[i];
				return receipt;
			}
		}
    }
	var viewModel = {
		actionSheetVisible: ko.observable(false),
		actionSheetData: [
			{text: Globalize.localize("delete"), clickAction: removeReceipt, type: "danger"}
		],
		
		// create DataSource
		currenciesSource : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreCurrencies
		}),
		receiptKindsSource : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreReceiptKinds
		}),
		kindsOfPaymentSource : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreKindsOfPayment
		}),

		// create value variables
		inputText: ko.observable(getReceiptById(params.id).text),
		inputAmount: ko.observable(getReceiptById(params.id).amount),
		currency: ko.observable(getReceiptById(params.id).currency),
		inputDate: ko.observable(Globalize.format(new Date(getReceiptById(params.id).date), 'yyyy-MM-dd')),
		date_placeholder: ko.observable(Globalize.format(new Date(), 'yyyy-MM-dd' )),
		receiptKind: ko.observable(getReceiptById(params.id).receiptKind),
		kindOfPayment: ko.observable(getReceiptById(params.id).kindOfPayment),
		
		updateReceipt: function () {
			var error = 0;
			var errorMessage ="";
			if (!viewModel.inputText()) {
				errorMessage = errorMessage + "" + Globalize.localize("name") + "<br>";
				error = 1;
			}
			if (!viewModel.inputAmount()) {
				errorMessage = errorMessage + "" + Globalize.localize("amount") + "<br>";
				error = 1;
			}
			if (!viewModel.inputDate()) {
				errorMessage = errorMessage + "" + Globalize.localize("date") + "<br>";
				error = 1;
			}
			if (viewModel.currency() == "") {
				errorMessage = errorMessage + "" + Globalize.localize("currency") + "<br>";
				error = 1;
			}
			if (viewModel.receiptKind() == "") {
				errorMessage = errorMessage + "" + Globalize.localize("receiptKind") + "<br>";
				error = 1;
			}
			if (viewModel.kindOfPayment() == "") {
				errorMessage = errorMessage + "" + Globalize.localize("kindOfPayment") + "<br>";
				error = 1;
			}
			if(error == 1) {
			DevExpress.ui.dialog.alert(errorMessage, Globalize.localize("errorMessage"));
			}
			if (error == 0) {
				HRworksReceipt.localStoreReceipts.update( params.id, {
				text: viewModel.inputText(),
				amount: viewModel.inputAmount(),
				date: viewModel.inputDate(),
				receiptKind: viewModel.receiptKind(),
				kindOfPayment:viewModel.kindOfPayment(),
				currency :viewModel.currency(),
				timestamp: Date()
				}).done(function () {					
					HRworksReceipt.app.navigate('home', { direction: 'backward', root: true });
				}).fail(function () {
					console.log("fail");
				});
            }
		},
		clickRemoveReceipt: function () {
			viewModel.actionSheetVisible(true);
		},
	};
	return viewModel;
	
};