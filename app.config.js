window.HRworksReceipt = $.extend(true, window.HRworksReceipt, {
    "config": {
        "layoutSet": "navbar",
        "navigation": [
            {
                title: Globalize.localize("receipts"),
                action: "#home",
                icon: "home"
            },
            {
                title: Globalize.localize("about"),
                action: "#about",
                icon: "info"
            }
        ]
    }
});