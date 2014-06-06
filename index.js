window.HRworksReceipt = window.HRworksReceipt || {};

$(function () {
	HRworksReceipt.initData();
	// Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
	// DevExpress.devices.current({ platform: "generic" });

	HRworksReceipt.goToReceipts = function() {
		HRworksReceipt.app.navigate('home', { root: true });
	};
	HRworksReceipt.goToSettings = function() {
		HRworksReceipt.app.navigate('settings', { root: true });
	};
	HRworksReceipt.goToInfos = function() {
		HRworksReceipt.app.navigate('infos', { root: true });
	};
	HRworksReceipt.goToFeedback = function() {
		HRworksReceipt.app.navigate('feedback', { root: true });
	};
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
                        },
						{
                            id: "receipts",
                            location: "before",
							title: Globalize.localize("receipts")
                        },
						{
                            id: "save",
                            location: "after",
							title: Globalize.localize("saveButton")
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
                        },
						{
                            id: "receipts",
                            location: "before",
							title: Globalize.localize("receipts")
                        },
						{
                            id: "save",
                            location: "after",
							title: Globalize.localize("saveButton")
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
                        },
						{
                            id: "receipts",
                            location: "before"
                        },
						{
                            id: "save",
                            location: "after",
							icon: 'save'
                        }
                    ]
                },
                "tizen-simple-toolbar": {
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
                        },
						{
                            id: "receipts",
                            location: "before"
                        }
                    ]
                },
                "generic-header-toolbar": {
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
                        },
						{
                            id: "receipts",
                            location: "before",
							icon:'home'
                        },
						{
                            id: "save",
                            location: "after",
							icon: 'save'
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