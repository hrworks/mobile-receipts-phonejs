HRworksReceipt.receipt = function (params) {
	var dateBoxValue = ko.observable(new Date());
	if (typeof params.id == 'undefined') {
		console.log("1");
		var viewModel = {
			dataSource: '',
			currenciesSource: HRworksReceipt.getCurrencies(),
			receiptKindsSource: HRworksReceipt.getReceiptKinds(),
			kindsOfPaymentSource: HRworksReceipt.getKindsOfPayment(),
			text: '',
			date: '',
			today: new Date().toJSON().slice(0,10),
			amount: '',
			currency: '',
			receiptKind: '',
			kindOfPayment: ''
<<<<<<< HEAD
			
		}	
=======
		} 
>>>>>>> 46531833483a578ec91e6b2da6b8b2688161c624
	} else {
		console.log("2");
		viewModel = {
			dataSource: HRworksReceipt.getReceiptById(params.id),
			currenciesSource: HRworksReceipt.getCurrencies(),
			receiptKindsSource: HRworksReceipt.getReceiptKinds(),
			kindsOfPaymentSource: HRworksReceipt.getKindsOfPayment(),
			text: HRworksReceipt.getReceiptById(params.id).text,
			date: yyyymmdd_to_date(HRworksReceipt.getReceiptById(params.id).date),
			today: new Date().toJSON().slice(0,10),
			amount: HRworksReceipt.getReceiptById(params.id).amount,
			currency: HRworksReceipt.getReceiptById(params.id).currency,
			receiptKind: HRworksReceipt.getReceiptById(params.id).receiptKind,
			kindOfPayment: HRworksReceipt.getReceiptById(params.id).kindOfPayment

		}
	}
	function S4() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	function guid() {
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
	return viewModel;
};