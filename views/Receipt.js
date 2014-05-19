HRworksReceipt.receipt = function (params) {
	var dateBoxValue = ko.observable(new Date());
	if (typeof params.id == 'undefined') {
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
			kindOfPayment: '',
			saveForm: function() {
				var receipt = [
						{
						"date": $("#dateInputDate").dxDateBox('option','value').toString(),
						"text": $("#txtInputText").dxTextBox('option','value'),
						"amount": $("#numbInputAmount").dxTextBox('option','value'),
						"guid": createGuid(),
						"currency": $("#selectCurrency").dxSelectBox('option', 'value'),
						"receiptKind": $("#selectReceiptKind").dxSelectBox('option','value'),
						"kindOfPayment": $("#selectKindOfPayment").dxSelectBox('option','value'),
						"timeStamp": Date()
						}
					];
					console.log(receipt);
					HRworksReceipt.insertReceipt(receipt);
					HRworksReceipt.app.navigate('' /*{ root: true }*/);

					
			}		
		} 
	} else {
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
			kindOfPayment: HRworksReceipt.getReceiptById(params.id).kindOfPayment,
			saveForm: function() {
			var receipt = [
						{
						"date": $("#dateInputDate").dxDateBox('option','value').toString(),
						"text": $("#txtInputText").dxTextBox('option','value'),
						"amount": $("#numbInputAmount").dxTextBox('option','value'),
						"currency": $("#selectCurrency").dxSelectBox('option', 'value'),
						"receiptKind": $("#selectReceiptKind").dxSelectBox('option','value'),
						"kindOfPayment": $("#selectKindOfPayment").dxSelectBox('option','value'),
						"timeStamp": Date(),
						"guid": params.id
						}
					];
					HRworksReceipt.updateReceipt(params.id,receipt);
					HRworksReceipt.app.navigate('', { direction: 'backward', root: true });
				}
		}
	}
	function S4() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	function createGuid() {
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
	return viewModel;
};