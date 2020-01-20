var slideCount = $('.glide__slide').length;

var glide = new Glide('.glide', {
    gap: 0
});

var slideIndex = glide.index + 1;

$('#slide-state').html(slideIndex + " / " + slideCount);

glide.mount();

glide.on(['mount.before', 'run'], function() {
    slideIndex = glide.index + 1;
    $('#slide-state').html(slideIndex + " / " + slideCount);
})