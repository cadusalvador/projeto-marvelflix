window.addEventListener('load', function() {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 30,
        slidesToScroll: 1.5,
        draggable: true,
        dots: '.dots',
    });
});