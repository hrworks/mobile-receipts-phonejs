window.HRworksReceipt = window.HRworksReceipt || {};

$(function () {
	// Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
	// DevExpress.devices.current({ platform: "generic" });

	HRworksReceipt.localStoreReceipts = new DevExpress.data.LocalStore({
			name : "receipts",
			key : "guid",
			immediate : true
		});
	HRworksReceipt.localStoreCurrencies = new DevExpress.data.LocalStore({
			name : "currencies",
			key : "symbol",
			immediate : true
		});
	HRworksReceipt.localStoreReceiptKinds = new DevExpress.data.LocalStore({
			name : "receiptKinds",
			key : "id",
			immediate : true
		});
	HRworksReceipt.localStoreKindsOfPayment = new DevExpress.data.LocalStore({
			name : "kindsOfPayment",
			key : "id",
			immediate : true
		});
	HRworksReceipt.app = new DevExpress.framework.html.HtmlApplication({
			namespace : HRworksReceipt,
			navigationType : HRworksReceipt.config.navigationType,
			navigation : HRworksReceipt.config.navigation
		});

	HRworksReceipt.app.router.register(":view/:id", {
		view : "index",
		id : undefined
	});
	HRworksReceipt.initData();
	HRworksReceipt.app.navigate();
	
});
Globalize.culture(navigator.language || navigator.browserLanguage);
document.title = Globalize.localize("Key_AppTitle");