/// <reference path="../js/jquery-1.10.2.min.js"; />
/// <reference path="../js/knockout-3.0.0.js"; />

(function () {
	var kindsOfPayment = [{
			"description" : "Amex Privat",
			"id" : "1"
		}, {
			"description" : "Privat",
			"id" : "2"
		}, {
			"description" : "Kreditkarte Privat",
			"id" : "3"
		}
	];
	var receiptKinds = [{
			"description" : "Benzin / Öl",
			"id" : "1",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bewirtung 100%",
			"id" : "2",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bewirtung 70/30%",
			"id" : "3",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bewirtung Training",
			"id" : "4",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bürobedarf",
			"id" : "5",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bürobedarf Aktivieren",
			"id" : "6",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bus/Bahn ermäßigte Vorsteuer",
			"id" : "7",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bus/Bahn ohne Vorsteuer",
			"id" : "8",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Bus/Bahn volle Vorsteuer",
			"id" : "9",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Business Paket inkl. Frühstück",
			"id" : "10",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Flug",
			"id" : "11",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Geschenke über 35€",
			"id" : "12",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Geschenke unter 35€",
			"id" : "13",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Hardware Aktivieren",
			"id" : "14",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Hotel",
			"id" : "15",
			"isHotel" : true,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Hotelfrühstück",
			"id" : "16",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Internet",
			"id" : "17",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "KFZ Reparaturen",
			"id" : "18",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Laufende Kfz-Betriebskosten",
			"id" : "19",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Literatur",
			"id" : "20",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Mietleasing",
			"id" : "21",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Mietwagen",
			"id" : "22",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Parken",
			"id" : "23",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Parkgroschen",
			"id" : "24",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Porto",
			"id" : "25",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Reparatur techn. Anlagen",
			"id" : "26",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Software Update",
			"id" : "27",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Sonstige Belegarten",
			"id" : "28",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Storno",
			"id" : "29",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Taxi (Ausland)",
			"id" : "30",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Taxi bis 50 KM",
			"id" : "31",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Taxi über 50 KM",
			"id" : "32",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Telefon",
			"id" : "33",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Trinkgeld",
			"id" : "34",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Übernachtungspauschale",
			"id" : "35",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Vorsteuer 19%",
			"id" : "36",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Werbung",
			"id" : "37",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}, {
			"description" : "Werkzeuge und Kleingeräte",
			"id" : "38",
			"isHotel" : false,
			"isBusinessEntertainment" : false
		}
	];
	var currencies = [{
			"symbol" : "EGP",
			"description" : "Ägyptischer Pfund",
			"isPreferred" : false
		}, {
			"symbol" : "ETB",
			"description" : "Äthiopischer Birr",
			"isPreferred" : false
		}, {
			"symbol" : "AFN",
			"description" : "Afghanischer Afghani",
			"isPreferred" : false
		}, {
			"symbol" : "ALL",
			"description" : "Albanischer Lek",
			"isPreferred" : false
		}, {
			"symbol" : "DZD",
			"description" : "Algerischer Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "AOA",
			"description" : "Angolanischer Kwanza",
			"isPreferred" : false
		}, {
			"symbol" : "ARS",
			"description" : "Argentinischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "AMD",
			"description" : "Armenische Dram",
			"isPreferred" : false
		}, {
			"symbol" : "AZN",
			"description" : "Aserbaidschan neuer Manat",
			"isPreferred" : false
		}, {
			"symbol" : "AUD",
			"description" : "Australischer Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "BSD",
			"description" : "Bahama Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "BHD",
			"description" : "Bahrain Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "BDT",
			"description" : "Bangladeschischer Taka",
			"isPreferred" : false
		}, {
			"symbol" : "BBD",
			"description" : "Barbados Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "BOB",
			"description" : "Bolivianischer Boliviano",
			"isPreferred" : false
		}, {
			"symbol" : "BWP",
			"description" : "Bostuanischer Pula",
			"isPreferred" : false
		}, {
			"symbol" : "BRL",
			"description" : "Brasilianischer Real",
			"isPreferred" : false
		}, {
			"symbol" : "GBP",
			"description" : "Britische Pfund Sterling",
			"isPreferred" : true
		}, {
			"symbol" : "BND",
			"description" : "Brunei Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "BGN",
			"description" : "Bulgarischer Lew",
			"isPreferred" : false
		}, {
			"symbol" : "BIF",
			"description" : "Burundi Franc",
			"isPreferred" : false
		}, {
			"symbol" : "XOF",
			"description" : "CFA Franc BCEAO",
			"isPreferred" : false
		}, {
			"symbol" : "XAF",
			"description" : "CFA Franc BEAC",
			"isPreferred" : false
		}, {
			"symbol" : "XPF",
			"description" : "CFP-Franc",
			"isPreferred" : false
		}, {
			"symbol" : "CLP",
			"description" : "Chilenischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "CNY",
			"description" : "Chinesischer Renminbi Yuan",
			"isPreferred" : false
		}, {
			"symbol" : "CRC",
			"description" : "Costa Rica Colón",
			"isPreferred" : false
		}, {
			"symbol" : "DKK",
			"description" : "Dänische Krone",
			"isPreferred" : true
		}, {
			"symbol" : "DOP",
			"description" : "Dominikanischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "DJF",
			"description" : "Dschibuti Franc",
			"isPreferred" : false
		}, {
			"symbol" : "ECS",
			"description" : "Ecuadorianischer Sucre",
			"isPreferred" : false
		}, {
			"symbol" : "SVC",
			"description" : "El Salvador Colón",
			"isPreferred" : false
		}, {
			"symbol" : "EEK",
			"description" : "Estnische Krone",
			"isPreferred" : false
		}, {
			"symbol" : "EUR",
			"description" : "Euro",
			"isPreferred" : true
		}, {
			"symbol" : "FJD",
			"description" : "Fidschi Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "GMD",
			"description" : "Gambischer Dalasi",
			"isPreferred" : false
		}, {
			"symbol" : "GEL",
			"description" : "Georgischer Lari",
			"isPreferred" : false
		}, {
			"symbol" : "GHS",
			"description" : "Ghanaischer neuer Cedi",
			"isPreferred" : false
		}, {
			"symbol" : "GTQ",
			"description" : "Guatemaltekischer Quetzal",
			"isPreferred" : false
		}, {
			"symbol" : "GNF",
			"description" : "Guinea Franc",
			"isPreferred" : false
		}, {
			"symbol" : "GYD",
			"description" : "Guyana Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "HTG",
			"description" : "Haitianische Gourde",
			"isPreferred" : false
		}, {
			"symbol" : "HNL",
			"description" : "Honduranische Lempira",
			"isPreferred" : false
		}, {
			"symbol" : "HKD",
			"description" : "Hongkong Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "INR",
			"description" : "Indische Rupie",
			"isPreferred" : false
		}, {
			"symbol" : "IDR",
			"description" : "Indonesischer Rupiah",
			"isPreferred" : false
		}, {
			"symbol" : "IQD",
			"description" : "Irakischer Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "IRR",
			"description" : "Iranischer Rial",
			"isPreferred" : false
		}, {
			"symbol" : "ISK",
			"description" : "Isländische Krone",
			"isPreferred" : false
		}, {
			"symbol" : "ILS",
			"description" : "Israelischer Neuer Schekel",
			"isPreferred" : true
		}, {
			"symbol" : "JMD",
			"description" : "Jamaikanischer Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "JPY",
			"description" : "Japanische Yen",
			"isPreferred" : true
		}, {
			"symbol" : "YER",
			"description" : "Jemen-Rial",
			"isPreferred" : false
		}, {
			"symbol" : "JOD",
			"description" : "Jordanischer Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "KHR",
			"description" : "Kambodschanische Riel",
			"isPreferred" : false
		}, {
			"symbol" : "CAD",
			"description" : "Kanadische Dollar",
			"isPreferred" : true
		}, {
			"symbol" : "CVE",
			"description" : "Kap-Verde-Escudo",
			"isPreferred" : false
		}, {
			"symbol" : "KZT",
			"description" : "Kasachischer Tenge",
			"isPreferred" : false
		}, {
			"symbol" : "QAR",
			"description" : "Katar-Riyal",
			"isPreferred" : false
		}, {
			"symbol" : "KES",
			"description" : "Kenia-Schilling",
			"isPreferred" : false
		}, {
			"symbol" : "KGS",
			"description" : "Kirgisistan-Som",
			"isPreferred" : false
		}, {
			"symbol" : "COP",
			"description" : "Kolumbianischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "KMF",
			"description" : "Komoren-Franc",
			"isPreferred" : false
		}, {
			"symbol" : "CDF",
			"description" : "Kongo-Franc",
			"isPreferred" : false
		}, {
			"symbol" : "BAM",
			"description" : "Konvertible Mark",
			"isPreferred" : false
		}, {
			"symbol" : "HRK",
			"description" : "Kroatische Kuna",
			"isPreferred" : false
		}, {
			"symbol" : "CUP",
			"description" : "Kubanischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "CUC",
			"description" : "Kubanischer Peso Convertible",
			"isPreferred" : false
		}, {
			"symbol" : "KWD",
			"description" : "Kuwait-Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "LAK",
			"description" : "Laotischer Kip",
			"isPreferred" : false
		}, {
			"symbol" : "LSL",
			"description" : "Lesothischer Loti",
			"isPreferred" : false
		}, {
			"symbol" : "LVL",
			"description" : "Lettische Lats",
			"isPreferred" : false
		}, {
			"symbol" : "LBP",
			"description" : "Libanesisches Pfund",
			"isPreferred" : false
		}, {
			"symbol" : "LRD",
			"description" : "Liberianischer Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "LYD",
			"description" : "Libyscher Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "LTL",
			"description" : "Litauische Litas",
			"isPreferred" : false
		}, {
			"symbol" : "MOP",
			"description" : "Macao Pataca",
			"isPreferred" : false
		}, {
			"symbol" : "MGA",
			"description" : "Madagaskar Ariary",
			"isPreferred" : false
		}, {
			"symbol" : "MWK",
			"description" : "Malawi-Kwacha",
			"isPreferred" : false
		}, {
			"symbol" : "MYR",
			"description" : "Malaysischer Ringgit",
			"isPreferred" : false
		}, {
			"symbol" : "MVR",
			"description" : "Maldevischer Rufiyaa",
			"isPreferred" : false
		}, {
			"symbol" : "MAD",
			"description" : "Marokkanischer Dirham",
			"isPreferred" : false
		}, {
			"symbol" : "MRO",
			"description" : "Mauretanische Ouguiya",
			"isPreferred" : false
		}, {
			"symbol" : "MUR",
			"description" : "Mauritius-Rupie",
			"isPreferred" : false
		}, {
			"symbol" : "MKD",
			"description" : "Mazedonisch Denar",
			"isPreferred" : false
		}, {
			"symbol" : "MXN",
			"description" : "Mexikanischer Neuer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "MDL",
			"description" : "Moldau-Leu",
			"isPreferred" : false
		}, {
			"symbol" : "MNT",
			"description" : "Mongolischer Tugrik",
			"isPreferred" : false
		}, {
			"symbol" : "MZM",
			"description" : "Mosambikanischer Metical",
			"isPreferred" : false
		}, {
			"symbol" : "MZN",
			"description" : "Mosambikanischer Neuer Metical",
			"isPreferred" : false
		}, {
			"symbol" : "MMK",
			"description" : "Myanmarischer Kyat",
			"isPreferred" : false
		}, {
			"symbol" : "NAD",
			"description" : "Namibischer Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "NPR",
			"description" : "Nepalesische Rupie",
			"isPreferred" : false
		}, {
			"symbol" : "NZD",
			"description" : "Neuseeland-Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "NIO",
			"description" : "Nicaraguanischer Córdoba",
			"isPreferred" : false
		}, {
			"symbol" : "NGN",
			"description" : "Nigerianische Naira",
			"isPreferred" : false
		}, {
			"symbol" : "KPW",
			"description" : "Nordkoreanischer Won",
			"isPreferred" : false
		}, {
			"symbol" : "NOK",
			"description" : "Norwegische Krone",
			"isPreferred" : true
		}, {
			"symbol" : "OMR",
			"description" : "Omani Rial",
			"isPreferred" : false
		}, {
			"symbol" : "XCD",
			"description" : "Ostkaribischer Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "PKR",
			"description" : "Pakistanische Rupie",
			"isPreferred" : false
		}, {
			"symbol" : "PAB",
			"description" : "Panamaischer Balboa",
			"isPreferred" : false
		}, {
			"symbol" : "PGK",
			"description" : "Papua-Neuguinea-Kina",
			"isPreferred" : false
		}, {
			"symbol" : "PYG",
			"description" : "Paraguayischer Guarani",
			"isPreferred" : false
		}, {
			"symbol" : "PEN",
			"description" : "Peruanischer Sol",
			"isPreferred" : false
		}, {
			"symbol" : "PHP",
			"description" : "Philippinischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "PLN",
			"description" : "Polnischer Zloty",
			"isPreferred" : false
		}, {
			"symbol" : "RWF",
			"description" : "Ruanda-Franc",
			"isPreferred" : false
		}, {
			"symbol" : "RON",
			"description" : "Rumänischer neuer Leu",
			"isPreferred" : false
		}, {
			"symbol" : "RUB",
			"description" : "Russischer Rubel",
			"isPreferred" : false
		}, {
			"symbol" : "STD",
			"description" : "São-Tomé\/Príncipe-Dobra",
			"isPreferred" : false
		}, {
			"symbol" : "ZMK",
			"description" : "Sambischer Kwacha (ZMK)",
			"isPreferred" : false
		}, {
			"symbol" : "ZMW",
			"description" : "Sambischer Kwacha (ZMW)",
			"isPreferred" : false
		}, {
			"symbol" : "WST",
			"description" : "Samoanischer Tala",
			"isPreferred" : false
		}, {
			"symbol" : "SAR",
			"description" : "Saudi-Riyal",
			"isPreferred" : false
		}, {
			"symbol" : "SEK",
			"description" : "Schwedische Krone",
			"isPreferred" : true
		}, {
			"symbol" : "CHF",
			"description" : "Schweizer Franken",
			"isPreferred" : true
		}, {
			"symbol" : "RSD",
			"description" : "Serbischer Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "SLL",
			"description" : "Sierraleonische Leone",
			"isPreferred" : false
		}, {
			"symbol" : "ZWD",
			"description" : "Simbabwe-Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "SGD",
			"description" : "Singapur-Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "SOS",
			"description" : "Somalischer Schilling",
			"isPreferred" : false
		}, {
			"symbol" : "LKR",
			"description" : "Sri Lanka Rupie",
			"isPreferred" : false
		}, {
			"symbol" : "SDG",
			"description" : "Sudanesisches neues Pfund",
			"isPreferred" : false
		}, {
			"symbol" : "SDD",
			"description" : "Sudanesisches Pfund",
			"isPreferred" : false
		}, {
			"symbol" : "ZAR",
			"description" : "Südafrikanischer Rand",
			"isPreferred" : false
		}, {
			"symbol" : "KRW",
			"description" : "Südkoreanischer Won",
			"isPreferred" : false
		}, {
			"symbol" : "SSP",
			"description" : "Südsudanesische Pfund",
			"isPreferred" : false
		}, {
			"symbol" : "SRD",
			"description" : "Suriname Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "SZL",
			"description" : "Swasiländischer Lilangeni",
			"isPreferred" : false
		}, {
			"symbol" : "SYP",
			"description" : "Syrisches Pfund",
			"isPreferred" : false
		}, {
			"symbol" : "TJS",
			"description" : "Tadschikistan Somoni",
			"isPreferred" : false
		}, {
			"symbol" : "TWD",
			"description" : "Taiwanesischer Dollar ",
			"isPreferred" : false
		}, {
			"symbol" : "TZS",
			"description" : "Tansania-Schilling",
			"isPreferred" : false
		}, {
			"symbol" : "THB",
			"description" : "Thailändischer Baht ",
			"isPreferred" : false
		}, {
			"symbol" : "TOP",
			"description" : "Tongaische Paanga",
			"isPreferred" : false
		}, {
			"symbol" : "TTD",
			"description" : "Trinidad-Tobago-Dollar",
			"isPreferred" : false
		}, {
			"symbol" : "CZK",
			"description" : "Tschechische Krone",
			"isPreferred" : false
		}, {
			"symbol" : "TRY",
			"description" : "Türkische Lira",
			"isPreferred" : false
		}, {
			"symbol" : "TND",
			"description" : "Tunesischer Dinar",
			"isPreferred" : false
		}, {
			"symbol" : "TMM",
			"description" : "Turkmenistan-Manat",
			"isPreferred" : false
		}, {
			"symbol" : "UGX",
			"description" : "Uganda-Schilling",
			"isPreferred" : false
		}, {
			"symbol" : "UAH",
			"description" : "Ukrainische Griwna",
			"isPreferred" : false
		}, {
			"symbol" : "HUF",
			"description" : "Ungarischer Forint",
			"isPreferred" : false
		}, {
			"symbol" : "UYU",
			"description" : "Uruguayischer Peso",
			"isPreferred" : false
		}, {
			"symbol" : "USD",
			"description" : "US Dollar",
			"isPreferred" : true
		}, {
			"symbol" : "UZS",
			"description" : "Usbekistan-Sum",
			"isPreferred" : false
		}, {
			"symbol" : "VEF",
			"description" : "Venezuelanischer Bolivar fuerte",
			"isPreferred" : false
		}, {
			"symbol" : "AED",
			"description" : "Ver. Arab. Emir.-Dirham ",
			"isPreferred" : false
		}, {
			"symbol" : "VND",
			"description" : "Vietnamesischer Dong ",
			"isPreferred" : false
		}, {
			"symbol" : "BYR",
			"description" : "Weißrussischer Rubel",
			"isPreferred" : false
		}

	];
	HRworksReceipt.db = {
		kindsOfPayment : kindsOfPayment,
		receiptKinds : receiptKinds,
		currencies : currencies,
	};
})();
