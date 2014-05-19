HRworksReceipt.home = function (params) {

	var receiptsArray;
	var RECEIPTS_KEY = "hrworksreceipts-receipts";
	var pullRefresh = ko.observable(true);

	function add_receipt() {
		console.log('add_receipt');
		var receiptItem = HRworksReceipt.createReceiptViewModel();
		receiptItem.randomData();
		console.log(receiptItem.toJS());
		receiptsArray.push(receiptItem.toJS());
		save_Receipts();
	}
	function yyyymmdd_to_date(s) {
		return new String(s.substr(6,2)+"."+s.substr(4,2)+"."+s.substr(0,4));
	}
	function save_Receipts() {
		console.log(' saving ... : ' + JSON.stringify(receiptsArray()));
        localStorage.setItem(RECEIPTS_KEY, JSON.stringify(receiptsArray()));
    }
	getReceiptKind = function(receiptKindId) {
		for(var i=0; i < HRworksReceipt.db.receiptKinds.length; i++){
			if(HRworksReceipt.db.receiptKinds[i].id == receiptKindId) {
				return HRworksReceipt.db.receiptKinds[i];
			}
		}
		return false;
	}
	getReceiptKindDescription = function(receiptKindId) {
		var receiptKind = getReceiptKind(receiptKindId);
		return receiptKind.description;
	}
	receiptsArray = ko.observableArray(HRworksReceipt.getReceipts());
    return {
		getReceiptKind: getReceiptKind,
		getReceiptKindDescription: getReceiptKindDescription,
		add_receipt: add_receipt,
		pullRefresh: pullRefresh,
		receiptsArray: receiptsArray,
		yyyymmdd_to_date: yyyymmdd_to_date
	};
};
