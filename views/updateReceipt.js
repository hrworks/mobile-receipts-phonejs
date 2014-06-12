HRworksReceipt.updateReceipt = function (params) {

	function removeReceipt() {
		HRworksReceipt.localStoreReceipts.remove(params.id);
		HRworksReceipt.app.navigate('home', {
			direction : 'backward',
			root : true
		});
	}

	function YYYYMMDDToDate(YYYYMMDD) {
		return new Date(YYYYMMDD.slice(0, 4), YYYYMMDD.slice(4, 6) - 1, YYYYMMDD.slice(6, 8));
	}
	function dateToYYYYMMDD(date) {
		function pad(num) {
			num = num + '';
			return num.length < 2 ? '0' + num : num;
		}
		return date.getFullYear() + '' + pad(date.getMonth() + 1) + '' + pad(date.getDate());
	}

	function getReceiptById(id) {
		var receipts = JSON.parse(localStorage.getItem("dx-data-localStore-receipts"));
		for (var i = 0; i < receipts.length; i++) {
			if (receipts[i].guid == id) {
				var receipt = receipts[i];
				return receipt;
			}
		}
	}
	currencyCheckbox = ko.observable(false);
	var viewModel = {
		actionSheetVisible : ko.observable(false),
		actionSheetData : [{
				text : Globalize.localize("delete"),
				clickAction : removeReceipt,
				type : "danger"
			}
		],

		// create DataSource
		getCurrenciesSource : function() {
			if (currencyCheckbox() == true) {
				currenciesAll = new DevExpress.data.DataSource({
					store : HRworksReceipt.localStoreCurrencies
				});
				console.log("1");
				console.log(currenciesAll.items());
				return currenciesAll;
			} else {
				return new DevExpress.data.DataSource({
					store : HRworksReceipt.localStoreCurrencies,
					filter : [[ "isPreferred" , "=", true ], "or", [ "symbol" , "=", viewModel.currency()]]
				})
			}
		},
		receiptKindsSource : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreReceiptKinds
		}),
		kindsOfPaymentSource : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreKindsOfPayment
		}),

		
		// create value variables
		inputText : ko.observable(getReceiptById(params.id).text),
		inputAmount : ko.observable(getReceiptById(params.id).amount),
		currency : ko.observable(getReceiptById(params.id).currency),
		inputDate : ko.observable(YYYYMMDDToDate(getReceiptById(params.id).date)),
		receiptKind : ko.observable(getReceiptById(params.id).receiptKind),
		kindOfPayment : ko.observable(getReceiptById(params.id).kindOfPayment),

		updateReceipt : function () {
			var error = 0;
			var errorMessage = "";
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
			if (error == 1) {
				window.setTimeout(function() {
					DevExpress.ui.dialog.alert(errorMessage, Globalize.localize("validationErrorMessage"))}
				, 300);
			}
			if (error == 0) {
				HRworksReceipt.localStoreReceipts.update(params.id, {
					text : viewModel.inputText(),
					amount : Number(viewModel.inputAmount()),
					date : dateToYYYYMMDD(viewModel.inputDate()),
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
		clickRemoveReceipt : function () {
			viewModel.actionSheetVisible(true);
		},
		clickDoubleReceipt : function () {
			var result = DevExpress.ui.dialog.confirm(Globalize.localize("copyReceiptConfirmText"), Globalize.localize("copyReceiptConfirmQuestion"));
			result.done(function (dialogResult) {
				var error = 0;
				var errorMessage = "";
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
				if (error == 1) {
					errorMessage = errorMessage + Globalize.localize("copyReceiptErrorMessage");
					DevExpress.ui.dialog.alert(errorMessage, Globalize.localize("validationErrorMessage"));
				}
				if (error == 0) {
					if (dialogResult) {
						HRworksReceipt.localStoreReceipts.update(params.id, {
							text : viewModel.inputText(),
							amount : Number(viewModel.inputAmount()),
							date : dateToYYYYMMDD(viewModel.inputDate()),
							receiptKind : viewModel.receiptKind(),
							kindOfPayment : viewModel.kindOfPayment(),
							currency : viewModel.currency(),
							timestamp : Date()
						}).done(function () {
							HRworksReceipt.localStoreReceipts.insert({
								text : viewModel.inputText(),
								amount : Number(viewModel.inputAmount()),
								date : dateToYYYYMMDD(viewModel.inputDate()),
								receiptKind : viewModel.receiptKind(),
								kindOfPayment : viewModel.kindOfPayment(),
								currency : viewModel.currency(),
								timestamp : Date()
							})
						}).fail(function () {
							DevExpress.ui.dialog.alert("Error!");
						});
					}
				}
			});
		},
	};
	return viewModel;

};
