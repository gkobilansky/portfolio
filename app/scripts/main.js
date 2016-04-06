$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#a2faa3', '#92c9b1', '#4f759b', '#5d5179', '#571f4e'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        navigation: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        responsiveWidth: 900,
        
        afterLoad: function(anchorLink, index) {
            if(anchorLink === 'secondPage') {
                $('#work .intro').delay(2000).fadeOut();
                $('#work .stats').delay(2500).fadeIn();
            }
        }
    });
    
    
    
    $('#date').text(new Date().getFullYear());
       
});