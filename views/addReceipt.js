HRworksReceipt.addReceipt = function (params) {

	var viewModel = {
		// create value variables
		inputText: ko.observable(),
		inputAmount: ko.observable(),
		currency: ko.observable(""),
		inputDate: ko.observable(),
		date_placeholder: ko.observable(new Date().toJSON().slice(0,10)),
		receiptKind: ko.observable(""),
		kindOfPayment: ko.observable(""),

		// create DataSources
		ds: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreReceipts }),
		currenciesSource: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreCurrencies }),
		receiptKindsSource: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreReceiptKinds }),
		kindsOfPaymentSource: new DevExpress.data.DataSource({ store: HRworksReceipt.localStoreKindsOfPayment }),

		
		addReceipt: function () {
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
				HRworksReceipt.localStoreReceipts.insert({
				text: viewModel.inputText(),
				amount: viewModel.inputAmount(),
				date: viewModel.inputDate(),
				receiptKind: viewModel.receiptKind(),
				kindOfPayment: viewModel.kindOfPayment(),
				currency: viewModel.currency(),
				timestamp: Date()
				}).done(function () {					
					HRworksReceipt.app.navigate('index', { direction: 'backward', root: true });
				}).fail(function () {
					console.log("fail");
				});
            }
		},
		viewShown: function (e) {
			if(e.direction == "forward") {
				//dump the values of the form items if the view is loaded from the cache
				inputText = viewModel.inputText("");
				inputAmount = viewModel.inputAmount("");
				currency = viewModel.currency("");
				inputDate = viewModel.inputDate("");
				receiptKind = viewModel.receiptKind("");
				kindOfPayment = viewModel.kindOfPayment("");
			}
		}
	};
	return viewModel;
};