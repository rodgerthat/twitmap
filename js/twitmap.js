/* twitmap.js */

    jQuery(document).ready(function() {
        
            initialize_map();
    });

	function initialize_map() {

        var twitMapCenterLat = 40.7091576586;
        var twitMapCenterLon = -74.011040926;

        var twitMapCenter = new google.maps.LatLng(twitMapCenterLat, twitMapCenterLon);

        var twitMapOptions = {
            zoom: 14,
            center: twitMapCenter,
            // scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }

        var map = new google.maps.Map(document.getElementById("map-canvas"),twitMapOptions);
    } // end initialize_map
