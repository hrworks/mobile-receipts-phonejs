﻿HRworksReceipt.addReceipt = function (params) {

	var viewModel = {

		// create DataSource
		genderSource : new DevExpress.data.DataSource({
				store : HRworksReceipt.localStoreCurrencies
			}),

		// create value variables
		inputText : ko.observable(),
		inputNumber : ko.observable(),
		gender : ko.observable(""),
		birthday : ko.observable(),
		date_placeholder : ko.observable(Globalize.format(new Date(), 'yyyy-MM-dd')),

		addReceipt : function () {
			var error = 0;
			if (!viewModel.inputText()) {
				DevExpress.ui.notify(Globalize.localize("nameIsRequired"), 'error', 3000);
				error = 1;
			}
			if (!viewModel.inputNumber()) {
				DevExpress.ui.notify(Globalize.localize("numberIsRequired"), 'error', 3000);
				error = 1;
			}
			if (!viewModel.Birthdate()) {
				DevExpress.ui.notify(Globalize.localize("birthdateIsRequired"), 'error', 3000);
				error = 1;
			}
			if (viewModel.gender() == "") {
				DevExpress.ui.notify(Globalize.localize("genderIsRequired"), 'error', 3000);
				error = 1;
			}
			if (error == 0) {
				HRworksReceipt.localStoreReceipts.insert({
					text : viewModel.inputText(),
					amount : viewModel.inputAmount(),
					date : viewModel.inputDate(),
					receiptKind : viewModel.receiptKind(),
					kindOfPayment : viewModel.kindOfPayment(),
					currency : viewModel.currency(),
					timestamp : Date()
				}).done(function () {
					HRworksReceipt.app.navigate('index', {
						direction : 'backward',
						root : true
					});
				}).fail(function () {
					console.log("fail");
				});
			}
		},
		viewShown : function (e) {
			if (e.direction == "forward") {
				//dump the values of the form items if the view is loaded from the cache
				viewModel.inputText("");
				viewModel.inputAmount("");
				viewModel.currency("EUR");
				viewModel.inputDate("");
				viewModel.receiptKind("");
				viewModel.kindOfPayment("");
			}
		}
	};
	return viewModel;
};
