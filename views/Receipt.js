HRworksReceipt.receipt = function (params) {
	var dateBoxValue = ko.observable(new Date()),
		currenciesSource = ko.observableArray(HRworksReceipt.getCurrencies()),
		receiptKindsSource = ko.observableArray(HRworksReceipt.getReceiptKinds()),
		kindsOfPaymentSource = ko.observableArray(HRworksReceipt.getKindsOfPayment()),
		RECEIPTS_KEY = "hrworksreceipts-receipts",
		receiptsArray,
		today = new Date().toJSON().slice(0,10);
		
	var receiptItem = HRworksReceipt.createReceiptViewModel();
	receiptItem.initialize();
	var receipt = receiptItem.toJS();
	function ViewModel() {
		this.text = ko.observable(receipt.text);
		this.amount = ko.observable(receipt.amount);
		this.date = ko.observable(receipt.date);
		this.currency = ko.observable(receipt.currency);
		this.receiptKind = ko.observable(receipt.receiptKind);
		this.kindOfPayment = ko.observable(receipt.kindOfPayment);
		this.currenciesSource = currenciesSource;
		this.receiptKindsSource = receiptKindsSource;
		this.kindsOfPaymentSource = kindsOfPaymentSource;
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
	function add_receipt() {
		var newReceiptItem = HRworksReceipt.createReceiptViewModel();
		var newReceipt = [ {
			"date": dateToString($("#dateInputDate").dxDateBox('option','value')),
			"text": $("#txtInputText").dxTextBox('option','value'),
			"amount": $("#numbInputAmount").dxTextBox('option','value'),
			"currency": $("#selectCurrency").dxSelectBox('option', 'value'),
			"receiptKind": $("#selectReceiptKind").dxSelectBox('option','value'),
			"kindOfPayment": $("#selectKindOfPayment").dxSelectBox('option','value'),
			"timeStamp": Date(),
			"guid": createGuid()
		} ];
		newReceiptItem.fromJS(newReceipt[0]);
		console.log(newReceiptItem.toJS());
		HRworksReceipt.insertReceipt(newReceiptItem.toJS());
		HRworksReceipt.app.navigate('home', { direction: 'backward', root: true });
	}
	receiptsArray = ko.observableArray(HRworksReceipt.getReceipts());
	var vm = new ViewModel();
	return {
		vm: vm,
		add_receipt: add_receipt,
		dataStringToDate: dateStringToDate,
		dateToString: dateToString,
		createGuid: createGuid,
		S4: S4,
	}
};