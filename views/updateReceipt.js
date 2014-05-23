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
			{text:"Delete", clickAction: removeReceipt, type: "danger"}
		],
		// create DataSources
		ds: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreReceipts }),
		currenciesSource: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreCurrencies }),
		receiptKindsSource: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreReceiptKinds }),
		kindsOfPaymentSource: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreKindsOfPayment }),
		
		// create value variables
		inputText: ko.observable(getReceiptById(params.id).text),
		inputAmount: ko.observable(getReceiptById(params.id).amount),
		currency: ko.observable(getReceiptById(params.id).currency),
		inputDate: ko.observable(getReceiptById(params.id).date.slice(0,10)),
		date_placeholder: ko.observable(new Date().toJSON().slice(0,10)),
		receiptKind: ko.observable(getReceiptById(params.id).receiptKind),
		kindOfPayment: ko.observable(getReceiptById(params.id).kindOfPayment),
		
		updateReceipt: function () {
			var error = 0;
			if (!viewModel.inputText()) {
				DevExpress.ui.notify("Text is empty", 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputAmount()) {
				DevExpress.ui.notify("Amount is empty ", 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputDate()) {
				DevExpress.ui.notify("Date is empty ", 'error', 3000);
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