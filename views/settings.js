HRworksReceipt.settings = function (params) {
	var viewModel = {
		exampleReceipts: function() {
			for(var i= 0; i < 100; i++) {
				HRworksReceipt.localStoreReceipts.insert({
					text : 'Receipt' + i,
					amount : '111',
					date : '20120304',
					receiptKind : '1',
					kindOfPayment : '1',
					currency : 'EUR',
					timestamp : Date()
				});
			}
		},
		serverSource : [{
				name : "Produktiver Server"
			}, {
				name : "Testserver Demo"
			}, {
				name : "Testserver Area51"
			}
		]
	};
	return viewModel;
};
