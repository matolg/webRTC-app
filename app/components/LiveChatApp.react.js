var React = require('react');

module.exports = LiveChatApp = React.createClass({
	render: function() {
		return (
			<div class='app'>
				<SelfViewer />
			</div>
		);
	}
});