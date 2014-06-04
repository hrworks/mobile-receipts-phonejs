HRworksReceipt.addReceipt = function (params) {

	function dateToYYYYMMDD(date) {
		function pad(num) {
			num = num + '';
			return num.length < 2 ? '0' + num : num;
		}
		return date.getFullYear() + '' + pad(date.getMonth() + 1) + '' + pad(date.getDate());
	}

	var viewModel = {

		// create DataSource
		currenciesDataSource : HRworksReceipt.currenciesSource,
		receiptKindsDataSource : HRworksReceipt.receiptKindsSource,
		kindsOfPaymentsDataSource : HRworksReceipt.kindsOfPaymentSource,
		// create value variables
		inputText : ko.observable(),
		inputAmount : ko.observable(),
		currency : ko.observable("EUR"),
		inputDate : ko.observable(),
		receiptKind : ko.observable(""),
		kindOfPayment : ko.observable(""),

		addReceipt : function () {
			var formatedDate = dateToYYYYMMDD(viewModel.inputDate());
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
				HRworksReceipt.localStoreReceipts.insert({
					text : viewModel.inputText(),
					amount : viewModel.inputAmount(),
					date : formatedDate,
					receiptKind : viewModel.receiptKind(),
					kindOfPayment : viewModel.kindOfPayment(),
					currency : viewModel.currency(),
					timestamp : Date()
				}).done(function () {
					HRworksReceipt.app.navigate('home', {
						direction : 'backward',
						root : true
					});
				}).fail(function () {
					console.log("fail");
				});
			}
		},
		viewShowing : function (e) {
			if (e.direction == "forward") {
				//dump the values of the form items if the view is loaded from the cache
				viewModel.inputText("");
				viewModel.inputAmount("");
				viewModel.currency("");
				viewModel.inputDate("");
				viewModel.receiptKind("");
				viewModel.kindOfPayment("");
			}
		}
	};
	return viewModel;
};
