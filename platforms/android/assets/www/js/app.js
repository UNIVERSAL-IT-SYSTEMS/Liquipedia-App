/* 
 * Copyright 2015 Liquipedia
 * All rights reserved
 */

var lp_app = {
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		lp_app.receivedEvent('deviceready');
	},
	receivedEvent: function() {
		prepare_app();
	}
};

lp_app.initialize();