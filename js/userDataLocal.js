"use strict";


!function($, DX, wo, undefined) {
	var DATA_VERSION_KEY = "dx-data-localStore-version",
		DATA_VERSION = "1",
		KINDSOFPAYMENT_KEY = "dx-data-localStore-kindsOfPayment",
		RECEIPTKINDS_KEY = "dx-data-localStore-receiptKinds",
		CURRENCIES_KEY = "dx-data-localStore-currencies";

	function initData() {
		if(localStorage.getItem(DATA_VERSION_KEY) !== DATA_VERSION) {
			clearData();
			localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
			localStorage.setItem(KINDSOFPAYMENT_KEY, JSON.stringify(HRworksReceipt.db.kindsOfPayment));
			localStorage.setItem(RECEIPTKINDS_KEY, JSON.stringify(HRworksReceipt.db.receiptKinds));
			localStorage.setItem(CURRENCIES_KEY, JSON.stringify(HRworksReceipt.db.currencies));
		}
	}

	function clearData() {
        var localStorageKeys = [
			DATA_VERSION,
			KINDSOFPAYMENT_KEY,
			RECEIPTKINDS_KEY,
			DATA_VERSION = "1",
			CURRENCIES_KEY,
        ];
        $.each(localStorageKeys, function () {
            localStorage.removeItem(this);
        });
    }
	$.extend(HRworksReceipt, {
		initData: initData,
		clearData: clearData
	});  
}(jQuery, DevExpress, HRworksReceipt);