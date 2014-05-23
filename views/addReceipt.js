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

		addReceipt: function () {
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