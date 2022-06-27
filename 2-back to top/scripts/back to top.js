/*global console */
var up = document.getElementById("up"),
    anchor = document.querySelector("a");

window.onscroll = function () {
    if (window.pageYOffset<100) {
    anchor.style.transition = "all .3s ease-in-out";
    anchor.style.opacity = "1";
    }else{
        anchor.onblur = function() {
            anchor.style.opacity = "0";
        }
    }
}
anchor.onclick = ()=> {
    anchor.scrollBehavior= "smooth";
    console.log("up");
}