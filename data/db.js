/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.0.0.js"; />

(function() {
    var kindsOfPayment = [
		{ "description": "Cash private", "id": "1" },
		{ "description": "Bank", "id": "2" }
	];
	var receiptKinds = [
		{"description":"Gasoline", "id":"1","isHotel":false, "isBusinessEntertainment":false},
		{"description":"Business entertainment", "id":"2", "isHotel":false, "isBusinessEntertainment":true}
	];
	var currencies = [
		{"symbol":"AFN", "description":"Afghanistan Afghani", "isPreferred":true},
		{"symbol":"EUR", "description":"Euro", "isPreferred":true},
		{"symbol":"ALL", "description":"Albanian Lek", "isPreferred":false}
	];
	HRworksReceipt.db = {
		kindsOfPayment: kindsOfPayment,
		receiptKinds: receiptKinds,
		currencies: currencies
	};
})();