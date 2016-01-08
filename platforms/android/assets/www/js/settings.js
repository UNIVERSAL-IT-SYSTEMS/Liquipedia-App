/* 
 * Copyright 2015 Liquipedia
 * All rights reserved
 */

function setting_save(key, value) {
	window.localStorage.setItem(key, value);
}
function setting_load(key) {
	$('#content').append(window.localStorage.getItem(key));
	return window.localStorage.getItem(key);
}
function settings_load() {
	for(var i = 0; i < window.wikis.length;i++) {
		if(setting_load('wiki_' + window.wikis[i][0]) === 'false') {
			document.getElementById('wiki_' + window.wikis[i][0]).checked = false;
		} else {
			document.getElementById('wiki_' + window.wikis[i][0]).checked = true;
		}
	}
}
function settings_save() {
	for(var i = 0; i < window.wikis.length;i++) {
		setting_save('wiki_' + window.wikis[i][0], jQuery('#wiki_' + window.wikis[i][0]).prop('checked'));
	}
}
function settings_create_menu() {
	for(var i = 0; i < window.wikis.length;i++) {
		jQuery('#settings > ul').append('<li><input type="checkbox" id="wiki_' + window.wikis[i][0] + '" name="wiki_' + window.wikis[i][0] + '"> ' + window.wikis[i][1] + '</li>');
	}
}