(function() {
    "use strict";

    var HRworksReceipt = window.HRworksReceipt = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        HRworksReceipt.app = new DevExpress.framework.html.HtmlApplication({
            namespace: HRworksReceipt,
            
            navigationType: "navbar",
            navigation: [
              {
                title: "Belege",
                action: "#home",
                icon: "home"
              },
              {
                title: "Infos",
                action: "#about",
                icon: "info"
              }
            ]
        });
        HRworksReceipt.initUserData();
        HRworksReceipt.app.router.register(":view/:id", { view: "home", id: undefined });
        HRworksReceipt.app.navigate();
    });
})();