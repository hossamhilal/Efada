/*global $ */
(function($) {
    "use strict"; 

    // Marque 
    // $(window).on('load', function(){
    //     $('body').hasClass('en') ? $('marquee').attr('direction','left') : $('marquee').attr('direction','right');
    // });

    // Open navbarSide Menu 
    $('.navBtn').on('click', function () {
        $('.navMenu').addClass('show');
        $('.menuOverlay').addClass('show');
        $('body').addClass('no-scroll');
    });

    // Close navbarSide Menu
    $('.dropDown').on('click', function () {
        $(this).find('.dropList').toggle();
    });

    // Toggle Dropdown
    $('.menuOverlay').on('click', function () {
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');
        $('body').removeClass('no-scroll');
    });


    // Check if Rtl 
    var rtlVal = true ;   
    $('body').hasClass('en') ? rtlVal = false : rtlVal = true;

    // Header OWL 
    var owlHeader = $('.owlHeader');
    owlHeader.owlCarousel({
        rtl: rtlVal ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        center: true,
        autoplaySpeed : 3000,
        autoplayTimeout : 5000,
        smartSpeed: 3000 ,
        animateOut: 'fadeOut',
        animateIn: 'fadeInUp',
        navText: [$('.prevBtn'),$('.nextBtn')],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Preview Active Image As Bacground
    let ActiveSrc = $('.owlHeader .owl-item.active.center .item').attr('data-img');
    $('.headerSlider').css('background' , 'url('+ ActiveSrc +')');
    $('.headerSlider').css('background-size' , 'cover');

    owlHeader.on('changed.owl.carousel',function(elem){
        let current = elem.item.index;
        let ActiveSrc = $(elem.target).find('.owl-item').eq(current).find('.item').attr('data-img');
        $('.headerSlider').css('background' , 'url('+ ActiveSrc +')');
        $('.headerSlider').css('background-size' , 'cover');
    });
    
    $(document).on('click','.owlHeader .owl-prev , .owlHeader .owl-next', function(){
        let ActiveSrc = $('.owlHeader .owl-item.active.center .item').attr('data-img');
        $('.headerSlider').css('background' , 'url('+ ActiveSrc +')');
        $('.headerSlider').css('background-size' , 'cover');
    });

    // owlHeader.on('translate.owl.carousel', function(elem) {
    //     let current = elem.item.index;
    //     let currentItem = $(elem.target).find('.owl-item').eq(current).find('.item');
    //     // $(currentItem).find('h2').attr('data-aos', 'fade-down');
    //     // $(currentItem).find('h3').attr('data-aos', 'fade-up');
    // });

    
    // Offers Owl
     $('.owlOffers').owlCarousel({
        rtl: rtlVal ,
        items:30,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        center : false ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Sponsors Owl
    $('.owlSponsors').owlCarousel({
        rtl: rtlVal ,
        items:30,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots:false,
        center : false ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    // Scroll Top
    let wheight = $(document).height() / 2 - 500;
    $(window).scroll(function(){
        if ($(window).scrollTop() > wheight) $('.scrollTop').addClass('show');
        else $('.scrollTop').removeClass('show');
    });

    $('.scrollTop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 4000);
        return false;
    });


    // INPUT FOCUS ANIMATION 
    $('.inputField .input').focus(function(){
        $(this).parent('.inputField').addClass('focused');
    });

    $('.inputField .input').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.inputField').addClass('focused');   
        }
    });

    $('.inputField .input').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.inputField').removeClass('focused');
    });
  

    // Start Animation 
    AOS.init();

    
    
    
   
})(jQuery);

