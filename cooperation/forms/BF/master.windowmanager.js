function OpenFullScreen(url) {
    var params = [
				'height=' + screen.height,
				'width=' + screen.width,
				'fullscreen=yes' // only works in IE, but here for completeness
				].join(',');

    // and any other options from
    // https://developer.mozilla.org/en/DOM/window.open

    var popup = window.open(url, 'live_dealer_help', params);
    popup.moveTo(0, 0);
}