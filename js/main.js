/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Velocity - Personal Portfolio Template
 Version         : 2.0 
 Author          : bootWeb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb
===========================================================================
*/

/*================================================
            Table of contents  
==================================================
 
1. Preloader
2. Background-image flickering solution for mobile
3. Parallax
4. Type js
5. Wow js
6. Active Scroll
7. Smooth scroll
8. Progress Bar
9. Magnific Popup
10. Mixitup
11. Hoverdir
12. Counter
13. Testimonial
14. Clients
15. Contact form
16. Google Map
17. Scroll to top
18. Scroll Navbar

====================================================
            End table content 
===================================================*/

$(function () {
  "use strict";

  var $window = $(window),
  $body = $('body');

  jQuery(document).ready(function($){

      //Preloader
      $('.spinner').fadeOut(); 
      $('.preloader').delay(350).fadeOut(500);
      $body.delay(350).css({'overflow':'visible'}); 

//Background-image flickering solution for mobile
var bg = jQuery("#home");
function resizeBackground() {
  bg.height(jQuery(window).height() + 60);
}
resizeBackground();

//Parallax
$(function(){
  $('body').stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
  });
});

//Type js
var element = $(".element");
$(function() {
  element.typed({
    strings: ["September 4th, 2021"],
    typeSpeed: 100,
    loop: true,
  });
});

//Wow js
new WOW().init(); 

//Active Scroll
$(document).on("scroll", onScroll);
function onScroll(event){
  var scrollPos = $(document).scrollTop() + 80;
  $('.nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
} 

//Smooth Scroll
$(".nav a,#home a,#quote a,[href='#body']").on('click', function(event) {
  if (this.hash !== ""){
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  }
});

//Progress Bar
var startSkills = $('.single-skill');
startSkills.waypoint(function () {
  $(this).each(function () {
    var data = $(this).data('percent');
    $(this).find('.skill-bar-overlay').animate({
      width: data + "%"
    }, 1500);

    $(this).find('span').addClass('show').animate({
      width: data + (-20) + "%"
    }, 1500);
  });
}, {
  triggerOnce: true,
  offset: 'bottom-in-view'
});

//Magnific Popup
$('.image-popup-vertical-fit').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  mainClass: 'mfp-img-mobile',
  image: {
    verticalFit: true
  }
  
});

$('.image-popup-fit-width').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  image: {
    verticalFit: false
  }
});

$('.image-popup-no-margins').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});

//Mixitup
$('#parent').mixItUp();

//Hoverdir
if ( jQuery().hoverdir ) {
  jQuery( '.da-thumbs li' ).each( function() {
    jQuery( this ).hoverdir();
  });
}

//Counter
$('.counter').counterUp({
  delay: 1,
  time: 400
});

//Testimonial
$('#customers-testimonials').owlCarousel( {
  loop: true,
  center: true,
  items: 13,
  margin: 30,
  autoplay: true,
  dots:true,
  dotsEach: true,
  nav:false,
  autoplayTimeout: 3000,
  smartSpeed: 450,
  lazyLoadEager: 3,
  navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1170: {
      items: 3
    }
  }
});


//Scroll-to-up
$('#scroll-up').hide();
$window.on("scroll", function () {
  if ($window.scrollTop() > 300) {
    $('#scroll-up').fadeIn();
  } else {
    $('#scroll-up').fadeOut();
  }
  //Scroll NavBar
  if ($window.scrollTop() > 160) {
    $('nav').addClass("scroll");
  } else {
            //remove the background property
            $('nav').removeClass("scroll");
          }
        });
$('#scroll-up').on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

}(jQuery));
});
