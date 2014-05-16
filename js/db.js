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
	var persons = [
		{
		"personId":"joe", 
		"signature":"2b+SmNlY6VvKgm0w8W0XQMvQfxY=",
		"dateAndTime":"2012-05-11T12:02:24.463+02:00",
		"companyId":"acme",
		"version":"1",
		"languageKey":"en",
		"mobileApplicationAuthorization":"HRworksMobileApp",
		"importReceipts": [
			{
			"date":"20120321",
			"text":"single Import Receipt",
			"amount":120,
			"guid":"e622612f-324e-4a41-a4d4-a44ee9ac5930",
			"currency":"EUR",
			"kindOfPayment":"1",
			"receiptKind":"1",
			"timeStamp":"2012-05-11T14:01:35.433+02:00"
			}
		]
		}
	];
	var person = persons[0];
	HRworksReceipt.db = {
	person: person,
	receipts: person.importReceipts,
	kindsOfPayment: kindsOfPayment,
	receiptKinds: receiptKinds,
	currencies: currencies
	};
})();