HRworksReceipt.home = function (params) {

	var receiptsArray,
		RECEIPTS_KEY = "hrworksreceipts-receipts",
		pullRefresh = ko.observable(true);

	function yyyymmdd_to_date(s) {
		return new String(s.substr(6,2)+"."+s.substr(4,2)+"."+s.substr(0,4));
	}
	
	function save_Receipts() {
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
		pullRefresh: pullRefresh,
		receiptsArray: receiptsArray,
		yyyymmdd_to_date: yyyymmdd_to_date
	};
	
};