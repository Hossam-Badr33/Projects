$(document).ready(function () {
  //change color themes
  let choice = $(".control-color-item");
  let link = $("link.link-colors");
  choice.click(function () {
    link.attr("href", $(this).data("link"));
  });
  //.control-color-light maximize and minimize
  let divControl = $(".control-color-light");
  let control = $(".fa-control i");
  divControl.animate({
    right: -$(".control-color-container").innerWidth(),
  });
  control.on("click", function () {
    divControl.toggleClass("reduce-width");
    if (divControl.hasClass("reduce-width")) {
      $(divControl).animate({
        right: -$(".control-color-container").innerWidth(),
      });
    } else {
      $(divControl).animate({
        right: 0,
      });
    }
  });
  //change moon and sun for page
  let light = $(".fa-light i");
  light.click(function () {
    $(this).toggleClass("fa-sun fa-moon");
    if (light.hasClass("fa-sun")) {
      $("body").css({
        backgroundColor: "var(--bg-grade-III)",
      });
      $(".moon-color").css({
        color: "",
      });
      $("body").css({
        color: "#000",
      });
      $(".aside").css({
        backgroundColor: "var(--bg-grade-I)",
      });
      $("body").css({
        backgroundColor: "var(--bg-grade-III)",
      });
    } else {
      $(".moon-color, body").css({
        color: "var(--words-no-6)",
      });
      $("body, .aside").css({
        backgroundColor: "#000",
      });
    }
  });
  //.aside scroll and colors
  let navItem = $(".aside-nav a");
  navItem.each(function (i, e) {
    if (i > 0) {
      $(e).removeClass("color-scheme");
      $("." + $(e).data("scroll")).css({
        width: 0,
        height: 0,
      });
      // console.log($("."+e.data("scroll")));
      // $(e).css("width", 0);
    }
  });
  $(window).scrollTop(0);
  // $(window).resize(function () {
  // });
  let homeWidth = $(".home").width();
  let aboutWidth = $(".about").width();
  let servicesWidth = $(".services").width();
  let portfolioWidth = $(".portfolio").width();
  let contactWidth = $(".contact").width();
  let homeHeight = $(".home").height();
  let aboutHeight = $(".about").height();
  let servicesHeight = $(".services").height();
  let portfolioHeight = $(".portfolio").height();
  let contactHeight = $(".contact").height();
  console.log(homeWidth);
  console.log(homeHeight);

  navItem.on("click", function (e) {
    e.preventDefault();
    $(this)
      .addClass("color-scheme")
      .parent("li")
      .siblings()
      .find("a")
      .removeClass("color-scheme");
    if ($(this).hasClass("color-scheme")) {
      $("." + $(this).data("scroll"))
        .siblings()
        .animate(
          {
            width: 0,
            height: 0,
          },
          300
        );
      $("." + $(this).data("scroll")).delay(200).animate({
        width: `${homeWidth}px`,
        height: `${homeHeight}px`,
      }, 500);
    } else {
    }
    // if ($(this).data("scroll") === "home") {
    //   $(window).scrollTop(0);
    // } else {
    //   $(window).scrollTop($("." + $(this).data("scroll")).offset().top) - 5;
    // }
  });
});
