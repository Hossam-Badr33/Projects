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
      $(".fa-close").css({ backgroundColor: "var(--bg-grade-III)" });
      $("body").css({
        backgroundColor: "var(--bg-grade-III)",
      });
    } else {
      $(".moon-color, body").css({
        color: "var(--words-no-6)",
      });
      $("body, .aside, .fa-close").css({
        backgroundColor: "#000",
      });
    }
  });
  //.aside scroll and colors
  let navItem = $(".aside-nav a");
  navItem.each(function (i, e) {
    if (i > 0) {
      let element = $("." + $(e).data("scroll"));
      $(e).removeClass("color-scheme");
      element.css({
        left: $(".main-page").innerWidth(),
      });
    } else {
      $(e).css({
        color: "var(--main-color)",
      });
    }
  });
  $(window).scrollTop(0);
  navItem.on("click", function (e) {
    e.preventDefault();
    $("." + $(this).data("scroll"))
      .removeAttr("id")
      .siblings()
      .attr("id", "display");
    $(this)
      .addClass("color-scheme")
      .parent("li")
      .siblings()
      .find("a")
      .removeClass("color-scheme");
    if (
      $(this).hasClass("color-scheme") &&
      (light.hasClass("fa-sun") || light.hasClass("fa-moon"))
    ) {
      $(this)
        .css("color", "var(--main-color)")
        .parent("li")
        .siblings()
        .find("a")
        .css("color", "");
    }
    if ($(this).hasClass("color-scheme")) {
      $("." + $(this).data("scroll"))
        .siblings()
        .animate(
          {
            left: $(".main-page").innerWidth(),
          },
          200
        );
      $("." + $(this).data("scroll")).animate(
        {
          left: 0,
        },
        1000
      );
    }
  });
  //.hide
  let hide = $(".main-page .hide");
  let aside = $(".aside");
  let faClosing = $(".fa-closing");
  hide.css({ top: hide.offset({ top: 15.2 }) });
  hide.on("click", function () {
    aside.toggleClass("active-aside");
    if (aside.hasClass("active-aside")) {
      aside.animate({ left: 0 }, { duration: 300, queue: false });
      faClosing.fadeIn();
    } else {
      aside.animate({ left: "-300px" }, { duration: 300, queue: false });
      faClosing.fadeOut();
    }
  });
  console.log(hide.offset().top);
});
