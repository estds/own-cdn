/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'yicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'yicon-account-details-outline': '&#xe951;',
		'yicon-format-list-text': '&#xe952;',
		'yicon-calendar-multiselect': '&#xe953;',
		'yicon-file-account-outline': '&#xe954;',
		'yicon-file-document-outline': '&#xe955;',
		'yicon-calendar-clock': '&#xe956;',
		'yicon-information-outline': '&#xe94e;',
		'yicon-youtube': '&#xe94f;',
		'yicon-close-circle-outline': '&#xe950;',
		'yicon-vector-circle-variant': '&#xe919;',
		'yicon-email-outline': '&#xe91a;',
		'yicon-form-textbox-password': '&#xe91b;',
		'yicon-account-lock': '&#xe91c;',
		'yicon-headphones': '&#xe91d;',
		'yicon-video': '&#xe91e;',
		'yicon-alert-outline': '&#xe91f;',
		'yicon-paperclip': '&#xe920;',
		'yicon-email': '&#xe921;',
		'yicon-sina-weibo': '&#xe922;',
		'yicon-facebook': '&#xe923;',
		'yicon-twitter': '&#xe924;',
		'yicon-rss': '&#xe925;',
		'yicon-linkedin-cube': '&#xe926;',
		'yicon-wechat': '&#xe927;',
		'yicon-qrcode': '&#xe928;',
		'yicon-share-variant': '&#xe929;',
		'yicon-home-outline': '&#xe92a;',
		'yicon-calendar-plus': '&#xe92b;',
		'yicon-dots-horizontal': '&#xe92c;',
		'yicon-dots-vertical': '&#xe92d;',
		'yicon-arrow-top-left-thin-circle-outline': '&#xe92e;',
		'yicon-arrow-top-right-thin-circle-outline': '&#xe92f;',
		'yicon-arrow-down-thin-circle-outline': '&#xe930;',
		'yicon-arrow-bottom-right-thin-circle-outline': '&#xe931;',
		'yicon-arrow-bottom-left-thin-circle-outline': '&#xe932;',
		'yicon-arrow-up-thin-circle-outline': '&#xe933;',
		'yicon-chevron-down': '&#xe934;',
		'yicon-chevron-left': '&#xe935;',
		'yicon-chevron-right': '&#xe936;',
		'yicon-chevron-up': '&#xe937;',
		'yicon-history': '&#xe938;',
		'yicon-tag-multiple-outline': '&#xe939;',
		'yicon-heart': '&#xe93a;',
		'yicon-view-dashboard-variant-outline': '&#xe93b;',
		'yicon-card-account-details-outline': '&#xe93c;',
		'yicon-pencil-outline': '&#xe93d;',
		'yicon-file-plus-outline': '&#xe93e;',
		'yicon-calendar': '&#xe93f;',
		'yicon-account-outline': '&#xe940;',
		'yicon-account-circle-outline': '&#xe941;',
		'yicon-bullhorn-outline': '&#xe942;',
		'yicon-newspaper-variant-multiple': '&#xe943;',
		'yicon-arrow-right-thin-circle-outline': '&#xe944;',
		'yicon-arrow-left-thin-circle-outline': '&#xe945;',
		'yicon-folder-outline': '&#xe946;',
		'yicon-map-marker-outline': '&#xe947;',
		'yicon-open-in-new': '&#xe948;',
		'yicon-translate': '&#xe949;',
		'yicon-logout': '&#xe94a;',
		'yicon-login': '&#xe94b;',
		'yicon-magnify': '&#xe94c;',
		'yicon-bilibili': '&#xe94d;',
		'yicon-owl': '&#xe918;',
		'yicon-orcid': '&#xe917;',
		'yicon-telephone': '&#xe916;',
		'yicon-email1': '&#xe915;',
		'yicon-linkedin': '&#xe914;',
		'yicon-google-scholar': '&#xe912;',
		'yicon-researchgate': '&#xe913;',
		'yicon-wssf': '&#xe911;',
		'yicon-google-maps': '&#xe90f;',
		'yicon-ali-maps': '&#xe910;',
		'yicon-youku': '&#xe90e;',
		'yicon-creative-commons-by': '&#xe900;',
		'yicon-creative-commons-nc-eu': '&#xe901;',
		'yicon-creative-commons-nc-jp': '&#xe902;',
		'yicon-creative-commons-nc': '&#xe903;',
		'yicon-creative-commons-nd': '&#xe904;',
		'yicon-creative-commons-pd-alt': '&#xe905;',
		'yicon-creative-commons-pd': '&#xe906;',
		'yicon-creative-commons-remix': '&#xe907;',
		'yicon-creative-commons-sa': '&#xe908;',
		'yicon-creative-commons-sampling-plus': '&#xe909;',
		'yicon-creative-commons-sampling': '&#xe90a;',
		'yicon-creative-commons-share': '&#xe90b;',
		'yicon-creative-commons-zero': '&#xe90c;',
		'yicon-creative-commons': '&#xe90d;',
		'yicon-A': '&#x41;',
		'yicon-C': '&#x43;',
		'yicon-E': '&#x45;',
		'yicon-G': '&#x47;',
		'yicon-L': '&#x4c;',
		'yicon-N': '&#x4e;',
		'yicon-R': '&#x52;',
		'yicon-S': '&#x53;',
		'yicon-T': '&#x54;',
		'yicon-U': '&#x55;',
		'yicon-Y': '&#x59;',
		'yicon-Z': '&#x5a;',
		'yicon-a': '&#x61;',
		'yicon-c': '&#x63;',
		'yicon-e': '&#x65;',
		'yicon-g': '&#x67;',
		'yicon-l': '&#x6c;',
		'yicon-n': '&#x6e;',
		'yicon-r': '&#x72;',
		'yicon-s': '&#x73;',
		'yicon-t': '&#x74;',
		'yicon-u': '&#x75;',
		'yicon-y': '&#x79;',
		'yicon-z': '&#x7a;',
		'yicon-uni5802': '&#x5802;',
		'yicon-uni5927': '&#x5927;',
		'yicon-uni6C5F': '&#x6c5f;',
		'yicon-uni8BB2': '&#x8bb2;',
		'yicon-uni957F': '&#x957f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/yicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
