/* global $, Vivus, Modernizr */

$(document).ready(function () {
    'use strict';
    $('#fullpage').fullpage({
        sectionsColor: ['#a2faa3', '#92c9b1', '#4f759b', '#5d5179', '#571f4e'],
       // anchors: ['header', 'work', 'process', 'about', 'contact', 'footer'],
        menu: '#menu',
        fixedelements: '.logo',
        navigation: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        responsiveWidth: 900,

        onSlideLeave: function() {
          //  $('.stats').fadeOut();
        },
        afterSlideLoad: function() {
          //  $('.stats').fadeIn('slow');

          // if(index === 3) {
          //
        // }
        },

        afterLoad: function(anchorLink, index) {
            if(index === 2) {

            var duration = 2000,
                order = [0, 1, 3, 2];
                for(var i = 0; i < 4; i++) {
                    $('#process img').eq(order[i]).delay( (i) * (duration / 2) ).fadeTo(duration, 1);
               }
            }
            if(index === 3) {
                $('.profile ul, .profile p, .profile img, .icon').delay(200).fadeTo(1500, 1, function(){
                    $('.services img, .services h4').fadeTo(500, 1);
                        }
                    );
            }
            if(index === 5) {
                 var vivus = new Vivus('goodbye', {
                    duration: 200,
                    start: 'autostart'
                 });

                 vivus.play();
            }
        }
    });
    $('#work .intro').mouseenter(function(){
        $('.btn span').fadeTo('slow', 1);
        });
    $('#work .intro').mouseleave(function(){
        $('.btn span').fadeTo('slow', 0);
        });


    $('.scroll').on('click', function(){
        $.fn.fullpage.moveSectionDown();
        });

    $('.moveright').on('click', function(){
        $.fn.fullpage.moveSlideRight();
        });
    $('#date').text(new Date().getFullYear());
// Modernizr checks

    if (!Modernizr.svg) {
  $('.logo img').attr('src', 'images/logo.png');
}


// Typing
    $('.typed')
        .typed({
            strings: ['DEV', ' STRATEGY', ' MARKETING', ' ANYTHING'],
            contentType: 'html', // or 'text'
            startDelay: 10,
            // backspacing speed
            typeSpeed: 100,
            backSpeed: 50,
            // time before backspacing
            backDelay: 200,
            // loop
            loop: false,
            callback: function() {
                $('.typed-cursor').css('display', 'none');
            }
        });
});
