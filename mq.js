var mq_stylesheet = document.getElementById('mq_styles');
if( mq_stylesheet == null ) {
	var sheetList = document.styleSheets,
		ruleList,
		i,
		j,
		mq_styles,
		query,
		color,
		background_color,
		border_color,
		new_query,
		border_style,
		rint;
	for ( i=sheetList.length-1; i >= 0; i-- ) {
		ruleList = sheetList[i].cssRules;
		if (ruleList) {
			var mq_styles = document.createElement('style');
			mq_styles.type = "text/css";
			mq_styles.id = 'mq_styles';
			for (j=0; j<ruleList.length; j++) {
				if (ruleList[j].type == CSSRule.MEDIA_RULE) {
					query = ruleList[j].cssText.match(/@media(.*) {/);	
					if (query && query[1]) {
						//HEX// color = '#'+Math.floor(Math.random()*16777215).toString(16);
						rint = Math.round(0xffffff * Math.random());
						color = 'rgba(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255);
						background_color = color + ', 0.9)';
						border_color = color + ', 1)';				
						new_query = query[0]+ ' body:after { content: "'+query[1]+'"; background: '+background_color+'; border-top: 1px solid '+border_color+'; border-bottom: 1px solid '+border_color+'; } }';
						style_text = document.createTextNode(new_query);
						mq_styles.appendChild(style_text);
					}
				}
			}
		}	
	}
	border_style = document.createTextNode('body:after{-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.2);}');
	mq_styles.appendChild(border_style);
	document.getElementsByTagName('head')[0].appendChild(mq_styles);
	/*
	window.onresize = function(event) {
		console.log('Inner Width: '+window.innerWidth);
	};
	*/
}else{
	document.getElementsByTagName('head')[0].removeChild(mq_stylesheet);
}