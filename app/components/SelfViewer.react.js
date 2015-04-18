var React = require('react');

module.exports = SelfViewer = React.createClass({
	componentDidMount: function() {
		navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
		navigator.getUserMedia({ audio: true, video: true }, gotStream, streamError);

		function gotStream(stream) {
			document.querySelector('video').src = URL.createObjectURL(stream);
		}

		function streamError(error) {
			console.log(error);
		}
	},
	render: function() {
		return (<video autoplay></video>);
	}
})