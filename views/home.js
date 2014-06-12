HRworksReceipt.home = function (params) {

	var viewModel = {
		ds : new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreReceipts,
			sort : {
				getter : "timestamp",
				desc : true
			}
		}),
		map : function (item) {
			return new localStore;
		},
		viewShowing : function (e) {
			viewModel.ds.pageIndex(0);
			viewModel.ds.load();
		},
		loadPanel: {
            visible: ko.observable(false),
            startLoading: function() {
                viewModel.loadPanel.visible(true);
                setTimeout(viewModel.loadPanel.finishLoading, 3000);
            },
            finishLoading: function() {
                viewModel.loadPanel.visible(false);
            }
        }
	};
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
