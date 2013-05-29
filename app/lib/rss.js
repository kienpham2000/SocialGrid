var RSS_URL = 'https://graph.facebook.com/307023978966?fields=albums.fields(name)';

var MONTH_MAP = { JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12 };

var parseDate = function(dateString) {
	var dateParts = dateString.split(' ');
	var timeParts = dateParts[4].split(':');
	return MONTH_MAP[dateParts[2].toUpperCase()] + '/' + dateParts[1] + ' ' + timeParts[0] + ':' + timeParts[1];
}

exports.loadRssFeed = function(o, tries) {
	var url = "https://graph.facebook.com/307023978966?fields=albums.fields(photos.source,name,cover_photo,link)";
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
			var json = JSON.parse(this.responseText);
			var data = [];

			for (i = 0; i < json.albums.data.length; i++)
			{
				data.push({
					title: json.albums.data[i].name,
					image: json.albums.data[i].photos.data[0].source,
					date: json.albums.data[i].photos.data[0].created_time,
					link: json.albums.data[i].link
				});
			}
			o.success(data)      
	    },
	    onerror: function(e) {
	        Ti.API.debug(e.error);
	        alert('Cannot load albums, please try again later.');
	    },
	    timeout:5000
	});
 
	xhr.open("GET", url);
	xhr.send();
};