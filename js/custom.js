/* =======================
            SERVICES
==========================*/
$(function() {
  //animation on scroll
  new WOW().init();
});
/* =======================
            work
==========================*/
$(function() {
  $("#work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
});
/* =======================
            team
==========================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});
/* =======================
            testomonial
==========================*/
$(function() {
  $("#coustomers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
/* =======================
            nevigation
==========================*/
//showw /hide navigation
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      //hide
      $("nav").removeClass("mu-top-nav");
    } else {
      $("nav").addClass("mu-top-nav");
    }
  });
});

/* =======================
            smooth scrolling
==========================*/
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    //get id
    var section = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(section).offset().top - 65
      },
      1000,
      "easeInOutExpo"
    );
  });
});

/* =======================
            close menu on click
==========================*/
$(function() {
  $(".navbar-collapse ul li a").on("click touch", function() {
    $(".navbar-toggle").click();
  });
});
