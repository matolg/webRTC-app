var React = require('react');
var LiveChatApp = require('components/LiveChatApp.react');

module.exports = {
	index: function(req, res) {
		var markup = React.renderComponentToString(LiveChatApp());
		
		res.render('home.hbs', {
			markup: markup,
			state: null
		});
	}
}