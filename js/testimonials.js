
var maxHeight = 0;
$(".testimony").each(function() {
    var temp = $(this).height();
    if (maxHeight < temp) {
        maxHeight = temp;
    }
});
if ($(window).width() > 750) {
    $('.testimony').css('height', maxHeight);
    $('.bottom').css('position', 'absolute');
}