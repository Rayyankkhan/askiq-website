(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

	// Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('#header-container').removeClass('position');
            } else {
                $('#header-container').addClass('position');
            }
        } 
    });
	
	$(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.container-fluid .position .sticky-top').removeClass('position');
            } else {
                $('.container-fluid .sticky-top').addClass('position');
            }
        } 
    });

    // Sticky Navbar
    $(window).scroll(function () {
    if ($(window).width() > 992) {
        if ($(this).scrollTop() > 45) {
            // Add shadow and remove the position class
            $('.sticky-top .container-fluid').addClass('shadow-sm fulwidth');
            $('.sticky-top').removeClass('position');
            $('nav.navbar').removeClass('bdr'); // Remove .bdr class
            console.log('Scroll position is greater than 45px: .bdr removed');
        } else {
            // Remove shadow and add the position class
            $('.sticky-top .container-fluid').removeClass('shadow-sm fulwidth');
            $('.sticky-top').addClass('position');
            $('nav.navbar').addClass('bdr'); // Add .bdr class
            console.log('Scroll position is less than or equal to 45px: .bdr added');
        }
    } else {
        // For screen width less than or equal to 992
        $('.sticky-top .container-fluid').addClass('shadow-sm fulwidth');
        $('.sticky-top').removeClass('position');
        $('nav.navbar').removeClass('bdr'); // Optional: can keep it or adjust as needed
    }
});

	

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });



    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

