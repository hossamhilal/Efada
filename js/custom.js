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

    // Navbar Fixed 
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) $('header').addClass('fixedTop');
        else $('header').removeClass('fixedTop');
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


    // Faq 
    $('.questionHead').on('click' , function() {
        let question =  $(this).parent('.question');
        if(question.hasClass('opened')){
            $('.question').removeClass('opened');
            $('.answer').slideUp();
        } else {
            $('.question').removeClass('opened');
            $('.answer').slideUp();
            $(question).addClass('opened');
            $(question).find('.answer').slideDown();
        }
    });

    // Wizzard 
    var step = $('.step'),
        stepContent = $('.stepContent'),
        nextBtn = $('.nextStep'),
        prevBtn = $('.prevStep');

    // change Wizard Active Tab
    step.click(function (e) {
        e.preventDefault();
        var targetContent = $($(this).attr('href')),
            stepTab = $(this);

        if (!stepTab.hasClass('disabled')) {
            step.removeClass('active').addClass('disabled');
            stepTab.addClass('active').removeClass('disabled');
            stepContent.removeClass('show');
            targetContent.addClass('show');
        }
    });

    // Move To Wizard Next Step 
    nextBtn.click(function(){
        var currentStep = $(this).closest('.stepContent'),
            currentStepBtn = currentStep.attr('id'),
            nextStepWizard = $('.step[href="#' + currentStepBtn + '"]').next();

        nextStepWizard.removeClass('disabled').addClass('active').trigger('click');
    });

    // Move To Wizard Prev Step 
    prevBtn.click(function(){
        var currentStep = $(this).closest('.stepContent'),
            currentStepBtn = currentStep.attr('id'),
            prevStepWizard = $('.step[href="#' + currentStepBtn + '"]').prev();

        prevStepWizard.removeClass('disabled').addClass('active').trigger('click');
    });

    // Choose Package
    $('.choosePackage').change(function(){ 
        if ( this.checked )  {
            $('.stepPackage').removeClass('choosed');
            $(this).parents('.stepPackage').addClass('choosed');
        }
        else $(this).parents('.stepPackage').removeClass('choosed');
    });
 
    $('.stepPackage').on('click' , function() {
        $('.stepPackage').removeClass('choosed');
        let radio = $(this).find('.choosePackage');
        if (!$(radio).prop('checked')){
            $(radio).prop('checked','checked');
            $(this).addClass('choosed');
        }
    });

    // Choose Worker from Company
    $('.company').change(function(){ 
        if ( this.checked ) $(this).parent('.radioBox').next('.companyBranch').addClass('show');
        else  $(this).parent('.radioBox').next('.companyBranch').removeClass('show'); 
    });

    // Hide Deliver Way If Choose From Company
    $('.chooseWayBox .company').change(function(){ 
        if ( this.checked ) $('.onlineWrapper').hide();
        else  $('.onlineWrapper').show();
    });

    // Choose Worker Online
    $('.chooseOnline').change(function(){ 
        if ( this.checked ) $('.onlineWrapper').show();
        else $('.onlineWrapper').hide();
    });

    // Hide Branch If Choose Online 
    $('.chooseOnline').change(function(){ 
        if ( this.checked ) $(this).parents('.deliverWrapper').find('.companyBranch').removeClass('show');
        else $(this).parents('.deliverWrapper').find('.companyBranch').addClass('show');
    });

    // Upload File 
    function uploadFile(input , place , btns) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let name = input.files[0].name ,
                    newSrc = e.target.result ,
                    fileName = place , 
                    buttons = btns ;
                $(fileName).text('');
                $(fileName).text(name);
                $(buttons).addClass('show');
                $(buttons).find('.view').attr('src', newSrc);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(document).on('click', '.uploadInput' ,function() {
        $(this).on('change', function(){
            uploadFile(this , $(this).parent().prev('.fileName') , $(this).parent().next('.uploadButtons'));
        })
    });

    // View Uploaded File
    $('.view').on('click', function() {
        if($(this).attr('src')) {
            $('#view').modal('show');
            let src = $(this).attr('src');
            $('#previewImage').attr('src', src);
        }
    });

    // Delete Uploaded File
    $('.delete').on('click', function() {
        let parent = $(this).parents('.uploadFile');
        $('#previewImage').attr('src', '');
        $(parent).find('.uploadInput').val('');
        $(parent).find('.fileName').text('');
        $(parent).find('.uploadButtons').removeClass('show');
    });

    // Change Profile Avatar 
    function uploadAvatar(input , place) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let newSrc = e.target.result ,
                    avatar = place,
                    img = $(avatar).find('img');
                    $(img).attr('src', newSrc );
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(document).on('click', '.uploadAvatar input' ,function() {
        $(this).on('change', function(){
            uploadAvatar(this , $(this).parents().prev('.avatar'));
        })
    });

    // Tabs 
    $('.tabsList a').on('click' , function(e){
        e.preventDefault();
        $('.tabsList a').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Start Animation 
    AOS.init();

})(jQuery);

