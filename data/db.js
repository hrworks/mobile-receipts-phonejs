/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.0.0.js"; />

(function() {
    var kindsOfPayment = [
		{ "description": "Amex Privat", "id": "1" },
		{ "description": "Privat", "id": "2" },
		{ "description": "Kreditkarte Privat", "id": "3" }
	];
	var receiptKinds = [
		{"description":"Benzin / Öl", "id":"1","isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bewirtung 100%", "id":"2", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bewirtung 70/30%", "id":"3", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bewirtung Training", "id":"4", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bürobedarf", "id":"5", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bürobedarf Aktivieren", "id":"6", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bus/Bahn ermäßigte Vorsteuer", "id":"7", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bus/Bahn ohne Vorsteuer", "id":"8", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Bus/Bahn volle Vorsteuer", "id":"9", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Business Paket inkl. Frühstück", "id":"10", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Flug", "id":"11", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Geschenke über 35€", "id":"12", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Geschenke unter 35€", "id":"13", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Hardware Aktivieren", "id":"14", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Hotel", "id":"15", "isHotel":true, "isBusinessEntertainment":false},
		{"description":"Hotelfrühstück", "id":"16", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Internet", "id":"17", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"KFZ Reparaturen", "id":"18", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Laufende Kfz-Betriebskosten", "id":"19", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Literatur", "id":"20", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Mietleasing", "id":"21", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Mietwagen", "id":"22", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Parken", "id":"23", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Parkgroschen", "id":"24", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Porto", "id":"25", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Reparatur techn. Anlagen", "id":"26", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Software Update", "id":"27", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Sonstige Belegarten", "id":"28", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Storno", "id":"29", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Taxi (Ausland)", "id":"30", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Taxi bis 50 KM", "id":"31", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Taxi über 50 KM", "id":"32", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Telefon", "id":"33", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Trinkgeld", "id":"34", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Übernachtungspauschale", "id":"35", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Vorsteuer 19%", "id":"36", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Werbung", "id":"37", "isHotel":false, "isBusinessEntertainment":false},
		{"description":"Werkzeuge und Kleingeräte", "id":"38", "isHotel":false, "isBusinessEntertainment":false}
	];
	var currencies = [
		{"symbol":"EUR", "description":"Euro", "isPreferred":true},
		{"symbol":"GBP", "description":"Britische Pfund Sterling", "isPreferred":true},
		{"symbol":"DKK", "description":"Dänische Krone", "isPreferred":true},
		{"symbol":"ILS", "description":"Israelischer Neuer Schekel", "isPreferred":true},
		{"symbol":"JPY", "description":"Japanische Yen", "isPreferred":true},
		{"symbol":"CAD", "description":"Kanadische Dollar", "isPreferred":true},
		{"symbol":"NOK", "description":"Norwegische Krone", "isPreferred":true},
		{"symbol":"SEK", "description":"Schwedische Krone", "isPreferred":true},
		{"symbol":"CHE", "description":"Schweizer Franken", "isPreferred":true},
		{"symbol":"USD", "description":"Us Dollar", "isPreferred":true}

	];
	HRworksReceipt.db = {
		kindsOfPayment: kindsOfPayment,
		receiptKinds: receiptKinds,
		currencies: currencies
	};
})();