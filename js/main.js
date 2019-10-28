$(document).ready(function() {
    $('.content_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
    $('.gutter .gutter_left').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
    // $('.logo .logo_item').slick({
    //     draggable: true,
    //     autoplay: true,
    //     autoplaySpeed: 300,
    //     arrows: false,
    //     slidesToShow: 4,
    //     // dots: true,
    //     // fade: true,
    //     speed: 500,
    //     infinite: true,
        // cssEase: 'ease-in-out',
        // touchThreshold: 100,
        // responsive: [{
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    // });
});