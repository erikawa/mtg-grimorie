var https = require('https');

module.exports = {

	searchName: function(cardName, callback) {
		https.get('https://api.magicthegathering.io/v1/cards?name='+cardName, function(res) {
			res.on("data", function(data) {
				callback(data.toString());
			});
		});
	}
};