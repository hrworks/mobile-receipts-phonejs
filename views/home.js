HRworksReceipt.home = function (params) {

	var viewModel = {
		ds : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreReceipts,
			sort : {
				getter : "date",
				desc : true
			}
		}),
		searchQuery : ko.observable().extend({
			throttle : 500
		}),
		map : function (item) {
			return new localStore;
		},
		viewShowing : function (e) {
			if (e.direction == 'backward') {
				viewModel.ds.load();
			}
		},
	};
	viewModel.searchQuery.subscribe(function (value) {
		viewModel.ds.filter("text", "contains", value);
		viewModel.ds.load();
	});
	getReceiptKind = function (receiptKindId) {
		for (var i = 0; i < HRworksReceipt.db.receiptKinds.length; i++) {
			if (HRworksReceipt.db.receiptKinds[i].id == receiptKindId) {
				return HRworksReceipt.db.receiptKinds[i];
			}
		}
		return false;
	}
	getReceiptKindDescription = function (receiptKindId) {
		var receiptKind = getReceiptKind(receiptKindId);
		return receiptKind.description;
	}
	YYYYMMDDToDDMMYYYY = function (YYYYMMDD) {
		return YYYYMMDD.slice(6, 8) + '.' + YYYYMMDD.slice(4, 6) + '.' + YYYYMMDD.slice(0, 4);
	}
	return viewModel;
};
