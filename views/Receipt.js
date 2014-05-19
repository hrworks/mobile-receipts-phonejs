HRworksReceipt.receipt = function (params) {
	var dateBoxValue = ko.observable(new Date());
	if (typeof params.id == 'undefined') {
		var viewModel = {
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
						"date": dateToString($("#dateInputDate").dxDateBox('option','value')),
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
					HRworksReceipt.app.navigate('home', { root: true });
			}		
		} 
	} else {
		viewModel = {
			dataSource: HRworksReceipt.getReceiptById(params.id),
			currenciesSource: HRworksReceipt.getCurrencies(),
			receiptKindsSource: HRworksReceipt.getReceiptKinds(),
			kindsOfPaymentSource: HRworksReceipt.getKindsOfPayment(),
			text: HRworksReceipt.getReceiptById(params.id).text,
			date: dateStringToDate(HRworksReceipt.getReceiptById(params.id).date),
			today: new Date().toJSON().slice(0,10),
			amount: HRworksReceipt.getReceiptById(params.id).amount,
			currency: HRworksReceipt.getReceiptById(params.id).currency,
			receiptKind: HRworksReceipt.getReceiptById(params.id).receiptKind,
			kindOfPayment: HRworksReceipt.getReceiptById(params.id).kindOfPayment,
			saveForm: function() {
			var receipt = [
						{
						"date": dateToString($("#dateInputDate").dxDateBox('option','value')),
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
	function dateToString(d) {
		var year, month, day;
		year = String(d.getFullYear());
		month = String(d.getMonth() + 1);
		if (month.length == 1) {
			month = "0" + month;
		}
		day = String(d.getDate());
		if (day.length == 1) {
			day = "0" + day;
		}
		return year + "" + month + "" + day;
	}
	function dateStringToDate(s) {
		var newDate = new Date(s.substr(0,4),(s.substr(4,2)-1),s.substr(6,2));
		return newDate;
	}
	return viewModel;
};