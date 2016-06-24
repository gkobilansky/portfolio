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
            $('.stats').fadeOut();
        },
        afterSlideLoad: function() {
            $('.stats').fadeIn('slow');

        },

        afterLoad: function(anchorLink, index) {
            if(index == 2) {
            var duration = 2000;

                $('#process .col-xs-3').each(function(i) {
                    console.log(this); 
                   $(this).delay( (i)*(duration/2) ).fadeTo(duration, 1);
                });
            }
        }
    });
   new Vivus('svg-1', {duration: 500});
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

   // $('.fp-slidesNav a.active').parent().next().css('animation', 'sdb 3s infinite');


// Typing
$('.typed').typed({
    strings: ['DEV', ' DESIGN', ' MARKETING', ' ANYTHING'],
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
