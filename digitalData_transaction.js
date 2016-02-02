//W3C Data layer for measuring transactions
digitalData = {
	"transaction":{
		"transactionid": "T1234",				// Pakollinen kenttä (string)
		"total": {
			"currency": "EUR",				    // Valinnainen kenttä (string)
			"taxRate": 0.24,					    // Valinnainen kenttä (number)
			"shipping": 10,					      // Valinnainen kenttä (number)
			"transactionTotal": 75.00		  // Pakollinen kenttä (number). Hinta sisältäen verot ja kuljetuksen.
		},
		"attributes": {
			"affiliation": "Talentum Shop",	    // Valinnainen kenttä (string)
			"coupon": ""						            // Valinnainen kenttä (string)
		},
		"item": [								// Lista tuotteista
			{
			"productInfo": {
				"id": "1234",						        // Pakollinen kenttä (string)
				"name": "Tagging"               // Pakollinen kenttä (string)
			},
			"category": "services",				   // Valinnainen kenttä (string)
			"quantity": 1,					         // Pakollinen kenttä (number)
			"price": {
				"priceWithTax": 75.00			      // Pakollinen kenttä (number)
			},
			"attributes": {
				"brand": "Quru",				      // Valinnainen kenttä (string)
				"variant": ""						      // Valinnainen kenttä (string)
			}
			}
		]
	}
}
