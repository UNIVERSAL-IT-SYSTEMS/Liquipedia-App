/* 
 * Copyright 2015 Liquipedia
 * All rights reserved
 */

function prepare_app() {
	/* settings */
	settings_create_menu();
	jQuery('#settings_load').click(function() {
		settings_load();
	});
	jQuery('#settings_save').click(function() {
		settings_save();
	});
	/* misc */
	get_content_from_web('counterstrike', 'test');
	jQuery('#button').click(function() {
		get_content_from_web('counterstrike', 'test');
	});
}

function get_content_from_web(wiki, type) {
	var baseurl = 'http://wiki.teamliquid.net';
	var currenttimestamp = Math.floor(Date.now() / 1000);
	var currenttimestamp_rounded = currenttimestamp - (currenttimestamp % 300) - 14400;
	var outhtml = '';
	
	jQuery.getJSON(baseurl + '/' + wiki + '/api.php?action=askargs&conditions=Has_team_left::%2B|Has_team_right::%2B|Has_map_date::%3E' + currenttimestamp_rounded + '|Is_finished::f&printouts=Has_team_left|Has_team_right|Has_team_left_template_name|Has_team_right_template_name|Has_team_left_score|Has_team_right_score|Has_match_stream|Has_tournament|Has_tournament_name|Is_finished&parameters=offset%3D0|limit%3D20|sort%3DHas_map_date|order%3Dasc&format=json&callback=?', function(data) {
		data = data.query.results;
		outhtml = '<table>';
		jQuery.each(data, function() {
			outhtml += '<tr>';
			outhtml += '<td>';
			outhtml += this.printouts.Has_team_left[0].fulltext;
			outhtml += '</td>';
			outhtml += '<td>';
			outhtml += 'vs.';
			outhtml += '</td>';
			outhtml += '<td>';
			outhtml += this.printouts.Has_team_right[0].fulltext;
			outhtml += '</td>';
			outhtml += '</tr>';
		});
		outhtml += '</table>';
	})
	.done(function(data) {
		jQuery('#content').html(outhtml);
	})
	.fail(function() {
		jQuery('#content').html('An error has occured!');
	});
}