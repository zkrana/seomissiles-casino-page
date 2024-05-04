$(".portfolio-slick").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(document).ready(function () {
  // Function to initialize Slick Slider
  function initializeSlick() {
    $(".pricing-plan-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      // centerMode: true,
      // centerPadding: "30px",
    });
  }

  // Function to destroy Slick Slider
  function destroySlick() {
    $(".pricing-plan-wrapper").slick("unslick");
  }

  // Check window width on page load
  if ($(window).width() < 767) {
    initializeSlick(); // Initialize Slick Slider
  }

  // Reinitialize Slick Slider on window resize
  $(window).on("resize", function () {
    if ($(window).width() < 767) {
      if (!$(".pricing-plan-wrapper").hasClass("slick-initialized")) {
        initializeSlick(); // Initialize Slick Slider
      }
    } else {
      if ($(".pricing-plan-wrapper").hasClass("slick-initialized")) {
        destroySlick(); // Destroy Slick Slider
      }
    }
  });
});
