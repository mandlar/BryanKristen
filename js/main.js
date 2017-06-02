$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
        
    
    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("July 1, 2017").getTime();
    
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    var days = Math.ceil(seconds_left / 86400);

    if(days == 1) // edge cases: singularize "days" and post-marriage
    {
        $('#daysLeftDescription').text("day until we get married!");
    }
    else if(days == -1)
    {
        $('#daysLeftDescription').text("day married!")
    }
    else if (days < -1)
    {
        $('#daysLeftDescription').text("days married!")
    }

    if(days < 0) // make negative days into positive days (post-marriage)
        days = days * -1;

    $('#daysLeft').text(days);

    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 35.348179,
        lng: -75.504101,
        scrollwheel: false,
        zoom: 17,
    });

    map.addMarker({
        lat: 35.348179,
        lng: -75.504101,
        verticalAlign: 'top',
        title: 'The Villas at Koru Village',  
        infoWindow: {
            content: '<div class="note">Welcome Party</div><h4 class="map-title script">The Villas at Koru Village</h4><div class="address"><span>40920 NC-12</span><br><span class="postal-code">Avon, NC 27915</span></div>'
        }
    });

    map.addMarker({
        lat: 35.346827,
        lng: -75.502078,
        title: 'Reception Location',      
        infoWindow: {
            content: '<div class="note">Ceremony / Reception</div><h4 class="map-title script">Koru Village Beach Klub</h4><div class="address"><span>40920 NC-12</span><br><span class="postal-code">Avon, NC 27915</span></div>'
        } 
    });
    
    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');

    
    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    }); 
});