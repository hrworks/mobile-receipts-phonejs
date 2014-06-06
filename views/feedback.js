HRworksReceipt.feedback = function (params) {
	var viewModel = {
		goToInfos : function() {
			HRworksReceipt.app.navigate('home', { root: true });
			HRworksReceipt.app.navigate('infos');
		},
		subjectSource : [{
				name : "Fehler"
			}, {
				name : "Verbesserung"
			}, {
				name : "neue Funktionalität"
			}
		]
	};
	return viewModel;
};
