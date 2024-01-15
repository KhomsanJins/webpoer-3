

jQuery(document).ready(function ($) {

    // new WOW().init();

    // toggle menu
    $('#open-menu').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').addClass('open');
    });
    $('#close-icon').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').removeClass('open');
    });

    // Search
    $('.nav-bar').on('click', '.search-toggle', function (e) {
        var selector = $(this).data('selector');

        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');

        e.preventDefault();
    });

    // toggle language
    $('.language-box').click(function () {
        $('.change-lang').toggleClass('active');
    })

    // Main Slide
    $('#mainslide').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        pauseOnHover: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // Main Slide
    $('#mainslide-m').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        pauseOnHover: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // Client Slide
    $('#clientslide').lightSlider({
        item: 6,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        pauseOnHover: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1,
                    loop: true,
                }
            }
        ]
    });


    // init Masonry
    var $grid = $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        percentPosition: true
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    // 


    // Show Product
    $('.imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 3,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });

    // Show Product
    $('.imageGallery-m').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 3,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });


    // Filter
    // Get the modal
    var modal = document.getElementById('ModalFilter');

    // Get the button that opens the modal
    var btn = document.getElementById("BtnFilter");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});


// Reload VDO
$(function(){
    $('.vdo-link').click(function(){      
        // $('iframe').attr('src', $('iframe').attr('src'));
        $("iframe").each(function() { 
            var src= $(this).attr('src');
            $(this).attr('src',src);  
    });
    });
});





// Product Menu
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
})

// Menu
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownproduct = this.el.find('.dropdownproduct');
        dropdownproduct.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.subItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.main-menu-m'), false);
})

// Sub Menu
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownsublink');
        dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.sublistmenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
})
