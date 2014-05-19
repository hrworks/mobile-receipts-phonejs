"use strict";

HRworksReceipt.createReceiptViewModel = function() {
    var date = ko.observable(),
		text = ko.observable(),
		amount = ko.observable(),
		guid = ko.observable(), 
		currency = ko.observable(),
		kindOfPayment = ko.observable(),
		receiptKind = ko.observable(),
		timeStamp = ko.observable();

    function clear() {
        fromJS({
            date: null,
			text: null,
			amount: null,
			guid: null, 
			currency: null,
			kindOfPayment: null,
			receiptKind: null,
			timeStamp: null
        });
    }
	function randomData() {
        fromJS({
			date: new Date,
			text: 'Hans',
			amount: 111,
			guid: 'srgthdhtrgdagr', 
			currency: 'EUR',
			kindOfPayment: '1',
			receiptKind: '1',
			timeStamp: new Date
        });
    }
    function fromJS(receipt) {
		date(receipt.date);
		text(receipt.text);
		amount(receipt.amount);
		guid(receipt.guid);
		currency(receipt.currency);
		kindOfPayment(receipt.kindOfPayment);
		receiptKind(receipt.receiptKind);
		timeStamp(receipt.timeStamp);
    }
    function toJS() {
        return {	
			date: date(),
			text: text(),
			amount: amount(),
			guid: guid(),
			currency:currency(),
			kindOfPayment: kindOfPayment(),
			receiptKind: receiptKind(),
			timeStamp: timeStamp()
        }
    }
    function handleDone(e) {
        save();
        HRworksReceipt.removeCurrentWorkout();
        HRworksReceipt.app.navigate("home", { root: true });
    }
    function save() {
        var data = toJS();

        if (typeof (data.date) == "object") {
            data.date = data.date.toJSON();
        }
        
        if(!data.guid) {
            data.guid = HRworksReceipt.currentId;
            id(HRworksReceipt.currentId);
            HRworksReceipt.insertWorkout(data);
        } else {
            HRworksReceipt.updateWorkout(data.id, data);
        }
        
    }
    return {
		date: date,
		text: text,
		amount: amount,
		guid: guid, 
		currency: currency,
		kindOfPayment: kindOfPayment,
		receiptKind: receiptKind,
		timeStamp: timeStamp,
		
		randomData : randomData,	
        toJS: toJS,
        fromJS: fromJS,
        clear: clear
    };
};