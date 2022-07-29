/* animation classes add on click */

$(".buttons li").click(function () {
  var activeClass = $(".buttons .active").data("class");

  $(".buttons li").removeClass("active");
  $(this).addClass("active");

  $("p").removeClass(activeClass);
  $("p").addClass($(this).data("class"));
});

/* Active class add on click */

var selector = ".fromcenter ";
$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
});
