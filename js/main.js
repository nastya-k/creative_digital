$(document).ready(function() {
	
//slider	
	
$('.recent_works__slides').slick({
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
		arrows: false
      }
    }
  ]	
});

$('.our-team__slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true
});
	
// back to top

$("#back-to-top").click(function () {
        $('html, body').animate({
            scrollTop: $(".intro-navigation").offset().top
        }, 1400);
    });
	
	
// smooth scroll
	
	$("#home").click(function () {
        $('html, body').animate({
            scrollTop: $(".intro__title").offset().top
        }, 1000);
    });
    
    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $(".about-us__description").offset().top
        }, 1000);
    });
    
    $("#services").click(function () {
        $('html, body').animate({
            scrollTop: $(".services").offset().top
        }, 1200);
    });

    $("#works").click(function () {
        $('html, body').animate({
            scrollTop: $(".recent_works--image").offset().top
        }, 1400);
    });
	
	$("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $(".form-icon").offset().top
        }, 1400);
    });
	

// info blocks
	
$('.form-address').hover(
   function() {
    $('.form-address__content').addClass( "content--hover" )&$('.form-address__data').addClass("data--hover");
  }, function() {
    $('.form-address__content').removeClass( "content--hover" )&$('.form-address__data').removeClass("data--hover");
  }
);
	
$('.form-tel').hover(
   function() {
    $('.form-tel__content').addClass( "content--hover" )&$('.form-tel__data').addClass("data--hover");
  }, function() {
    $('.form-tel__content').removeClass( "content--hover" )&$('.form-tel__data').removeClass("data--hover");
  }
);		
});


// Google maps bugfix    
    
 $('#map').addClass('scrolloff'); 
$('.map-wrapper').on('click', function () {
$('#map').removeClass('scrolloff'); 
});
$(".map-wrapper").mouseleave(function () {
 $('#map').addClass('scrolloff'); 
}); 

    
  // Google maps 

function initMap() {  
var position = [-7.930507, 112.637714];
var latLng = new google.maps.LatLng(position[0], position[1]);
var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -7.932029, lng: 112.635643},
          zoom: 17,
          mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });    
marker = new google.maps.Marker({
        position: latLng
        , map: map
        , draggable: true
        , animation: google.maps.Animation.DROP 
        
    });

marker.setMap(map);
}; 	