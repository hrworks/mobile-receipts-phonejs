HRworksReceipt.updateReceipt = function (params) {

	function removeReceipt() {
		HRworksReceipt.localStoreReceipts.remove(params.id);
		HRworksReceipt.app.navigate('index', { direction: 'backward', root: true });
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
			if (!viewModel.inputText()) {
				DevExpress.ui.notify(Globalize.localize("nameIsRequired"), 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputAmount()) {
				DevExpress.ui.notify(Globalize.localize("amountIsRequired"), 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputDate()) {
				DevExpress.ui.notify(Globalize.localize("dateIsRequired"), 'error', 3000);
				error = 1;
			}
			if (viewModel.currency() == "") {
				DevExpress.ui.notify(Globalize.localize("currencyIsRequired"), 'error', 3000);
				error = 1;
			}
			if (viewModel.receiptKind() == "") {
				DevExpress.ui.notify(Globalize.localize("receiptKindIsRequired"), 'error', 3000);
				error = 1;
			}
			if (viewModel.kindOfPayment() == "") {
				DevExpress.ui.notify(Globalize.localize("kindOfPaymentIsRequired"), 'error', 3000);
				error = 1;
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
					HRworksReceipt.app.navigate('index', { direction: 'backward', root: true });
				}).fail(function () {
					console.log("fail");
				});
            }
		},
		clickRemoveReceipt: function () {
			viewModel.actionSheetVisible(true);
		},
		//Reload the dataSource
		viewShown: function (e) {
			//Reset the value of the input filds
		},
	};
	return viewModel;
	
};