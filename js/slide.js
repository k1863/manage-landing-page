$(document).ready(function () {
  $(".stories-slider").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    adaptiveHeight: false,
    autoplay: true,
    infinite: true,
    slide: "div.stories-section-card",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });
});
