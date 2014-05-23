window.HRworksReceipt = $.extend(true, window.HRworksReceipt, {
    "config": {
        "navigationType": "navbar",
        "navigation": [
            {
                title: Globalize.localize("receipts"),
                action: "#index",
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