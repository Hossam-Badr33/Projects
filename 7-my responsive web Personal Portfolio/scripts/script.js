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
  let scrollEvent = false;
  divControl.animate({
    right: -$(".control-color-container").innerWidth(),
  });
  control.on("click", function () {
    divControl.toggleClass("reduce-width");
    checkReduceClass();
  });
  /*
  window.addEventListener("scroll", function () {
    document.getElementByTagName('body')[0].stopScroll();
    scrollEvent = true;
    if (scrollEvent) {
      divControl.hasClass("reduce-width")
        ? console.log("yes")
        : divControl.addClass("reduce-width");
      checkReduceClass();
    }
  });
  */
  /*
  $(window).on("scrollstop",function () {
    console.log("stopped")
  })
  */
  /*
  console.log($("body")[0]);
  $(window).on("scroll", function () {
    scrollEvent = true;
    if (scrollEvent) {
      divControl.hasClass("reduce-width")
        ? console.log("yes")
        : divControl.addClass("reduce-width");
      checkReduceClass();
    }
  });
  */
  function checkReduceClass() {
    if (divControl.hasClass("reduce-width")) {
      divControl.animate({
        right: -$(".control-color-container").innerWidth(),
      });
    } else {
      divControl.animate({
        right: 0,
      });
    }
    scrollEvent = false;
  }
  // $(window).scrollTop(0);

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
    if (
      $(this).hasClass("color-scheme") &&
      hide.css("display") === "none"
      // &&
      // $(".fake-class").css("display") === "none"
    ) {
      navitemLeft.call(this);
    }
    // if (
    //   $(this).hasClass("color-scheme") &&
    //   hide.css("display") !== "none" &&
    //   $(".fake-class").css("display") === "block"
    // )
    else {
      $(".aside").css("left", 0);
      navitemLeft.call(this);
      toggleAside();
    }
  });
  //.aside .hide
  let hide = $(".aside .hide");
  let aside = $(".aside");
  let faClosing = $(".fa-closing");
  hide.on("click", toggleAside);

  function navitemLeft() {
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
  function toggleAside() {
    aside.toggleClass("active-aside");
    if (
      aside.hasClass("active-aside") &&
      $(".fake-class").css("display") === "block"
    ) {
      aside.animate({ left: 0 }, { duration: 600, queue: false });
      faClosing.fadeIn();
    } else if (
      aside.hasClass("active-aside") === false &&
      $(".fake-class").css("display") === "block"
    ) {
      aside.animate({ left: "-300px" }, { duration: 600, queue: false });
      faClosing.fadeOut();
    } else if (
      (aside.hasClass("active-aside") === false ||
        aside.hasClass("active-aside") === true) &&
      $(".fake-class").css("display") === "none"
    ) {
      console.log("case 3");
    }
  }
  $(window).resize(function () {
    if (
      (aside.hasClass("active-aside") === false ||
        aside.hasClass("active-aside") === true) &&
      $(".fake-class").css("display") === "none"
    ) {
      $(".aside").css("left", 0);
    } else {
      $(".aside").css("left", "");
    }
  });
});
