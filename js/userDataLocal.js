"use strict";

!function($, DX, wo, undefined) {

    var DATA_VERSION_KEY = "hrworksreceipts-version",
        DATA_VERSION = "1",
        KINDSOFPAYMENT_KEY = "hrworksreceipts-kindsOfPayment",
        RECEIPTKINDS_KEY = "hrworksreceipts-receiptKinds",
		CURRENCIES_KEY = "hrworksreceipts-currencies",
		PERSON_KEY = "hrworksreceipts-person",
		RECEIPTS_KEY = "hrworksreceipts-receipts",
		receiptsArray;

    function insertReceipt(receipt) {
		receiptsArray = getReceipts();
		console.log(receiptsArray);
		receiptsArray.push(receipt);
        saveReceipts();
    }

	function updateReceipt(guid, receipt) {
		var localReceiptArray = getReceipts();
		for (var index = 0; index < localReceiptArray.length; index++) {
            if (localReceiptArray[index].guid == guid)
                break;
        }
        localReceiptArray.splice(index, 1, receipt[0]);
        saveReceipts(localReceiptArray);
    } 

    function deleteReceipt(id) {
        receiptsArray.remove(function(item) {
            return item.id === id;
        });
        saveReceipts();
    } 

    function saveReceipts() {
        localStorage.setItem(RECEIPTS_KEY, JSON.stringify(receiptsArray));
    }

	function getReceipts() {
		return JSON.parse(localStorage.getItem(RECEIPTS_KEY));
	}

    function getReceiptById(id) {
        var receipts = JSON.parse(localStorage.getItem(RECEIPTS_KEY));
		for(var i = 0; i < receipts.length; i++) {
			if(receipts[i].guid == id) {
				var receipt = receipts[i];
				return receipt;
			}
		}
    }
	function getCurrencies() {
		return JSON.parse(localStorage.getItem(CURRENCIES_KEY));
	}
	function getReceiptKinds() {
		return JSON.parse(localStorage.getItem(RECEIPTKINDS_KEY));
	}
	function getKindsOfPayment() {
		return JSON.parse(localStorage.getItem(KINDSOFPAYMENT_KEY));
	}
    function initData() {
        if(localStorage.getItem(DATA_VERSION_KEY) !== DATA_VERSION) {
            clearData();
            localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
			localStorage.setItem(KINDSOFPAYMENT_KEY, JSON.stringify(HRworksReceipt.db.kindsOfPayment));
			localStorage.setItem(RECEIPTKINDS_KEY, JSON.stringify(HRworksReceipt.db.receiptKinds));
			localStorage.setItem(CURRENCIES_KEY, JSON.stringify(HRworksReceipt.db.currencies));
			receiptsArray = HRworksReceipt.db.receipts;
			localStorage.setItem(RECEIPTS_KEY, JSON.stringify(receiptsArray));
		}
    }
    function clearData() {
        var localStorageKeys = [
            DATA_VERSION,
			KINDSOFPAYMENT_KEY,
			RECEIPTKINDS_KEY,
			DATA_VERSION = "1",
			CURRENCIES_KEY,
			PERSON_KEY,
			RECEIPTS_KEY
        ];

        $.each(localStorageKeys, function () {
            localStorage.removeItem(this);
        });
    }
	
    $.extend(HRworksReceipt, {
        insertReceipt: insertReceipt,
        updateReceipt: updateReceipt,
        deleteReceipt: deleteReceipt,
		getReceipts: getReceipts,
		getReceiptById: getReceiptById,
		getCurrencies: getCurrencies,
		getReceiptKinds: getReceiptKinds,
		getKindsOfPayment: getKindsOfPayment,

        initData: initData,
        clearData: clearData
        
    });  
}(jQuery, DevExpress, HRworksReceipt);