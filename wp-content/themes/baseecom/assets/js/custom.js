"use strict";

// add mobile nav chevrons for lis with children
jQuery(document).ready(function () {
  jQuery(".menu-item-has-children > a").each(function () {
    jQuery(this).after('<i class="fas fa-chevron-down" onclick="dropDown(this, this.parentNode, event)" style="float:right;"></i>');
  });
}); // control margin height in relation to navbar height

jQuery(document).ready(function () {
  var marginTop = -(jQuery("#site-navigation").height() + 75);
  jQuery("#site-navigation").css("margin-top", marginTop);
}); // handle mobile nav dropdown

function dropDown(chevron, parent, e) {
  e.stopPropagation();
  console.group(parent);
  var elem = parent.id;
  console.log(elem);
  jQuery("#" + elem + " > ul").toggleClass("visible");
  console.log(chevron);

  if (chevron.classList.contains("fa-chevron-down")) {
    chevron.classList.remove("fa-chevron-down");
    chevron.classList.add("fa-chevron-up");
  } else if (chevron.classList.contains("fa-chevron-up")) {
    chevron.classList.remove("fa-chevron-up");
    chevron.classList.add("fa-chevron-down");
  }
} // handle mobile nav icon animation


var mobileToggle = false;

function mobileNavToggle() {
  var bar1 = document.getElementById("bar1");
  var bar2 = document.getElementById("bar2");
  var bar3 = document.getElementById("bar3");
  var mobilenav = document.getElementById("site-navigation");

  if (!mobileToggle) {
    bar1.style.transform = "rotate(50deg) translate(8px, 15px)";
    bar2.style.transform = "rotate(50deg) translate(-2px,6px)";
    bar2.style.opacity = "0";
    bar3.style.transform = "rotate(-50deg) translate(5px, -15px)";
    mobilenav.style.marginTop = "0px";
    mobileToggle = true;
  } else {
    bar1.style.transform = "rotate(0) translate(0)";
    bar2.style.transform = "rotate(0) translate(0)";
    bar2.style.opacity = "1";
    var marginTop = -(jQuery("#site-navigation").height() + 75);
    console.log(marginTop);
    mobilenav.style.marginTop = "".concat(marginTop, "px");
    bar3.style.transform = "rotate(0) translate(0)";
    mobileToggle = false;
  }
}
"use strict";

jQuery(document).ready(function () {
  var slideRight = document.getElementById("slider-right");
  var slideLeft = document.getElementById("slider-left");
  var theSlider = document.getElementById("slider");
  var slides = document.getElementsByClassName("slide");
  var count = slides.length;
  var position = 2;
  var newChild = slides[slides.length - 1];
  var lastClicked = "";

  if (newChild, slides.length > 0) {
    theSlider.innerHTML = newChild.outerHTML + theSlider.innerHTML + slides[0].outerHTML;
    setInterval(function () {
      right();
    }, 4000);
    slideRight.addEventListener("click", right, false);
    slideLeft.addEventListener("click", left, false);
  }

  console.log("position: " + position + " count: " + count);

  function right() {
    console.log("position: " + position + " count: " + count);

    if (lastClicked == "left") {
      position++;
    }

    if (position <= count) {
      console.log("right, position<=count");
      theSlider.style.transform = "translateX(-".concat(10 * position, "0vw)");
      position++;
    } else if (position > count) {
      console.log("right, position >count");
      theSlider.style.transform = "translateX(-".concat(10 * position, "0vw)");
      setTimeout(function () {
        theSlider.classList.remove("transition");
        theSlider.classList.add("notransition"); // slideRight.onclick = null;
        // slideLeft.onclick = null;

        theSlider.style.transform = "translateX(-100vw)";
      }, 300);
      setTimeout(function () {
        theSlider.classList.add("transition");
        theSlider.classList.remove("notransition"); // slideRight.onclick = "right()";
        // slideLeft.onclick = "left()";
      }, 600);
      position = 2;
    }

    console.log("position: " + position + " count: " + count);
    lastClicked = "right";
    return position, lastClicked;
  }

  function left() {
    if (lastClicked == "right") {
      position--;
    }

    if (position > 2) {
      console.log("left, position >=2");
      position--;

      if (position == 1) {
        theSlider.style.transform = "translateX(0vw)";
        position = slides.length - 2;
        setTimeout(function () {
          theSlider.classList.remove("transition");
          theSlider.classList.add("notransition");
          theSlider.style.transform = "translateX(-".concat(10 * position, "0vw)"); // slideRight.onclick = null;
          // slideLeft.onclick = null;
        }, 300);
        setTimeout(function () {
          theSlider.classList.add("transition");
          theSlider.classList.remove("notransition"); // slideRight.onclick = "right()";
          // slideLeft.onclick = "left()";
        }, 600);
      } else {
        theSlider.style.transform = "translateX(-".concat(10 * position, "0vw)");
      }
    } else if (position < 2) {
      console.log("left, position <=2");
      position = slides.length - 2;
      theSlider.style.transform = "translateX(0vw)";
      setTimeout(function () {
        theSlider.classList.remove("transition");
        theSlider.classList.add("notransition"); // slideRight.onclick = null;
        // slideLeft.onclick = null;

        console.log(position);
        theSlider.style.transform = "translateX(-".concat(10 * position, "0vw)");
      }, 300);
      setTimeout(function () {
        theSlider.classList.add("transition");
        theSlider.classList.remove("notransition"); // slideRight.onclick = "right()";
        // slideLeft.onclick = "left()";
      }, 600);
    } else if (position == 2) {
      position--;
      theSlider.style.transform = "translateX(-".concat(10 * position, "0vw)");
    }

    console.log("position: " + position + " count: " + count);
    lastClicked = left;
    return position, lastClicked;
  }
});