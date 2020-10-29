twitch-videoad.js application/javascript
(function() {
	if ( /(^|\.)twitch\.tv$/.test(document.location.hostname) === false ) { return; }
	var realFetch = window.fetch;
	window.fetch = function(input, init) {
    console.log('fetch', input, init, Array.prototype.slice.call(arguments));
		if ( arguments.length >= 2 && typeof input === 'string' && input.includes('/access_token') ) {
			var url = new URL(arguments[0]);
			url.searchParams.set("player_type", "embed");
			arguments[0] = url.href;
		}
		return realFetch.apply(this, arguments);
	};
})();
