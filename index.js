window.HRworksReceipt = window.HRworksReceipt || {};

$(function () {
	HRworksReceipt.initData();
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
	HRworksReceipt.currenciesSource = new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreCurrencies
		});
	HRworksReceipt.receiptKindsSource = new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreReceiptKinds
		});
		HRworksReceipt.kindsOfPaymentSource = new DevExpress.data.DataSource({
			store : HRworksReceipt.localStoreKindsOfPayment
		});
	HRworksReceipt.app = new DevExpress.framework.html.HtmlApplication({
			namespace : HRworksReceipt,
			layoutSet: DevExpress.framework.html.layoutSets["simple"],
			commandMapping: {
                "ios-header-toolbar": {
                    commands: [
                        {
                            id: "synchronise",
                            location: "before"
                        }
                    ]
                },
                "android-simple-toolbar": {
                    commands: [
                        {
                            id: "synchronise",
                            location: "before"
                        },
						{
                            id: "settings",
                            location: "menu"
                        },
						{
                            id: "info",
                            location: "menu"
                        },
						{
                            id: "feedback",
                            location: "menu"
                        }
                    ]
                },
                "win8-phone-appbar": {
                    defaults: {
                        "showText": false,
                        "showIcon": true
                    },
                    commands: [
                        {
                            id: "add",
                            icon: "plus"
                        }
                    ]
                },
                "tizen-simple-toolbar": {
                    commands: [
                        {
                            id: "add",
                            location: "left"
                        }
                    ]
                },
                "generic-header-toolbar": {
                    commands: [
                        {
                            id: "synchronise",
                            location: "left"
                        }
                    ]
                },
            }
		});

	HRworksReceipt.app.router.register(":view/:id", { view: "home", id: undefined });
	HRworksReceipt.app.navigate();
	

});
	   function onViewShown(args) {
        var viewInfo = args.viewInfo;
        if (viewInfo.model.hideNavigationButton)
            viewInfo.renderResult.$markup.find(".nav-button-item").remove();

        currentBackAction = viewInfo.model.backButtonDown;
    }

Globalize.culture(navigator.language || navigator.browserLanguage);
document.title = Globalize.localize("Key_AppTitle");