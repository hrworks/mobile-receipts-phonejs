HRworksReceipt.home = function (params) {
    var viewModel = {
		pullRefresh: ko.observable(true),
        dataSource: HRworksReceipt.getReceipts()
    };
<<<<<<< HEAD
=======
	console.log(HRworksReceipt.getReceipts());
>>>>>>> 46531833483a578ec91e6b2da6b8b2688161c624
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
    return viewModel;
};
function yyyymmdd_to_date(d) {
		return new String(d.substr(6,2)+"."+d.substr(4,2)+"."+d.substr(0,4));
}