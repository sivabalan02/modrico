$(document).ready(function() {
  //mobile slider script
  $('.carousel-sync').carousel('cycle');
    $('.carousel-sync').on('click', '.carousel-control[data-slide]', function (ev) {
      ev.preventDefault();
      $('.carousel-sync').carousel($(this).data('slide'));
    });
  $('.carousel-sync').on('mouseover', function(ev) {
      ev.preventDefault();
      $('.carousel-sync').carousel('pause');
    });
  $('.carousel-sync').on('mouseleave', function(ev) {
    ev.preventDefault();
    $('.carousel-sync').carousel('cycle');
  });
  
  //fixed header script
  $(window).scroll(function() {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 80) {
          $('header').addClass('fixed');
      } else {
          $('header').removeClass('fixed');
      }
  }).scroll();
  
  //play button script
  $('#play-btn').click(function(){
    $('#vimeo-video')[0].src += '&autoplay=1';
    $(this).unbind('click');//or some other way to make sure that this only happens once
    $('.apldr-video').addClass('active');
  });
   
  //back top script
  jQuery('.apldr-back-top');
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 250) {
        jQuery('.apldr-back-top').addClass('active');
      } else {
        jQuery('.apldr-back-top').removeClass('active');
      }
    });
    jQuery('.apldr-back-top a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
  });
   
  //hover script
  $('.member-list').hover(
     function(){$(this).addClass('ishover');
      },
     function(){$(this).removeClass('ishover');
     }
   );
  });
  
  //add remove script
  $('.subscribe-link a').on('click', function() {
     $(".apldr-banner").addClass('active');
  });
  $('.close-btn a').on('click', function() {
     $('.apldr-banner').removeClass('active');
  });

  //parallax scroll nav script
  $('.sidebar-nav ul li a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
    scrollPoint = $('.data-scroll[data-anchor="' + scrollAnchor + '"]').offset().top -1;
    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);
    return false;
  });
  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 620) {
      $('.data-scroll').each(function(i) {
        if ($(this).position().top <= windscroll -1) {
          $('.sidebar-nav ul li a.active').removeClass('active');
          $('.sidebar-nav ul li a').eq(i).addClass('active');
        }
      });
    }
    else {
      $('.sidebar-nav ul li .active').removeClass('active');
      $('.sidebar-nav ul li a:first').addClass('active');
    }
  }).scroll();
  
  //social media tooltip script
  $('[data-toggle="tooltip"]').tooltip();
  
  //popup image script
  $('.blog-picture').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });
  
  //popup video script (plugins.js)
  $('.popup-video').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        dailymotion: {
          index: 'dailymotion.com',
          id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                    return m[4];
                }
                return m[2];
            }
            return null;
          },
          src: 'http://www.dailymotion.com/embed/video/%id%'
        }
      }
    }  
  });
  
  //apldr video height script
  $(function(){
    var $elems = $('.animateblock');
    var winheight = $(window).height();
    var fullheight = $(document).height();
    $(window).scroll(function(){
      animate_elems();
    });
    function animate_elems() {
      wintop = $(window).scrollTop(); // calculate distance from top of window
      // loop through each item to check when it animates
      $elems.each(function(){
        $elm = $(this);
        if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
        topcoords = $elm.offset().top; // element's distance from top of page in pixels
        if(wintop > (topcoords - (winheight*.75))) {
          // animate when top of the window is 3/4 above the element
          $elm.addClass('animated');
        }
      });
    } // end animate_elems()
  });
  
  //default sliders script
  $(window).load(function() {
  $('.apldr-default-slider').each( function() {
    var $carousel = $(this);
    var $items = ($carousel.data("items") !== undefined) ? $carousel.data("items") : 1;
    var $items_tablet = ($carousel.data("items-tablet") !== undefined) ? $carousel.data("items-tablet") : 1;
    var $items_mobile_landscape = ($carousel.data("items-mobile-landscape") !== undefined) ? $carousel.data("items-mobile-landscape") : 1;
    var $items_mobile_portrait = ($carousel.data("items-mobile-portrait") !== undefined) ? $carousel.data("items-mobile-portrait") : 1;
        $carousel.owlCarousel({
        loop : ($carousel.data("loop") !== undefined) ? $carousel.data("loop") : true,
        items : $carousel.data("items"),
        margin : ($carousel.data("margin") !== undefined) ? $carousel.data("margin") : 0,
        dots : ($carousel.data("dots") !== undefined) ? $carousel.data("dots") : true,
        nav : ($carousel.data("nav") !== undefined) ? $carousel.data("nav") : false,
        navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
        autoplay : ($carousel.data("autoplay") !== undefined) ? $carousel.data("autoplay") : false,
        autoplayTimeout : ($carousel.data("autoplay-timeout") !== undefined) ? $carousel.data("autoplay-timeout") : 5000,
        animateOut : ($carousel.data("animateout") !== undefined) ? $carousel.data("animateout") : false,
        mouseDrag : ($carousel.data("mouse-drag") !== undefined) ? $carousel.data("mouse-drag") : true,
        autoWidth : ($carousel.data("auto-width") !== undefined) ? $carousel.data("auto-width") : false,
        autoHeight : ($carousel.data("auto-height") !== undefined) ? $carousel.data("auto-height") : false,
        responsiveClass: true,
        responsive : {
          0 : {
            items : $items_mobile_portrait,
          },
          480 : {
            items : $items_mobile_landscape,
          },
          768 : {
            items : $items_tablet,
          },
          960 : {
            items : $items,
          }
        }
      });
     //adding slide nav and slide numbers script
    var totLength = $(".owl-dot", $carousel).length;
      $(".total-no", $carousel).html(totLength);
      $(".current-no", $carousel).html(totLength);
      $carousel.owlCarousel();
      $(".current-no", $carousel).html(1);
     //owl event nav slide current and total numbers script
    $carousel.on('changed.owl.carousel', function(event) {
      var total_items = event.page.count;
      var currentNum = event.page.index + 1;
        $(".total-no", $carousel ).html(total_items);
        $(".current-no", $carousel).html(currentNum);
      });
    });
  });
  
  //div outside click remove script
  $(document).on('click', function(e) {
    if ($(e.target).is('.apldr-header-right, .apldr-header-right *') === false) {
      $('.apldr-header-right').removeClass('in');
  }
  
  //parallax script
  if ( $('.apldr-parallax-bg').length > 0 ) {
    $.parallax( {
      scrollProperty: 'scroll',
      verticalOffset: 0,
      horizontalOffset: 0,
      horizontalScrolling: false,
      responsive: true
   });
  }

  //bootstrap tabs script
  $('.nav-tabs').tab();

  //parallax video script
  $('.parallax-video').backgroundVideo({
     pauseVideoOnViewLoss: false,
     parallaxOptions: {
     effect: 0
      }
  });

  //custom map script
  $('#apldr-contact-map').mapit();
  $('#apldr-contact-map').trigger('show', '2');
});