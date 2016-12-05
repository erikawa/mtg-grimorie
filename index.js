var https = require('https');

module.exports = {

	searchName: function(cardName, callback) {
		https.get('https://api.magicthegathering.io/v1/cards?name='+cardName, function(res) {
			var body = '';
			res.setEncoding('utf8');
			res.on('data', function(data) {
				body += data;
			});

			res.on('end', function() {
				callback(body);
			});
		});
	}
};