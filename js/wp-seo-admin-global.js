function wpseo_setIgnore( option, hide ) {
	jQuery.post(ajaxurl, { 
			action: 'wpseo_set_ignore', 
			option: option,
		}, function(response) { 
			if (response)
				jQuery('#'+hide).hide();
		}
	);
}