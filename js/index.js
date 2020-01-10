$(document).ready(function() {
    var myWidth = $(window).width();
    var myHeight = $(window).height();
    var headerHeight = $('#home-header').height();
    if ((myWidth <= 500 || headerHeight > myHeight) || (myWidth >= 500) && myHeight < 600) {
        $('#home-header').css('height', myHeight);
        $('.home-header-content').css('height', myHeight);
    }
});