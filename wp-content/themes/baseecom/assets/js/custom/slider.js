jQuery(document).ready(function () {
	var slideRight = document.getElementById("slider-right");
	var slideLeft = document.getElementById("slider-left");
	var theSlider = document.getElementById("slider");
	var slides = document.getElementsByClassName("slide");
	var count = slides.length;
	var position = 2;
	var newChild = slides[slides.length - 1];
	var lastClicked = "";
	if ((newChild, slides.length > 0)) {
		theSlider.innerHTML =
			newChild.outerHTML + theSlider.innerHTML + slides[0].outerHTML;

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

			theSlider.style.transform = `translateX(-${10 * position}0vw)`;
			position++;
		} else if (position > count) {
			console.log("right, position >count");

			theSlider.style.transform = `translateX(-${10 * position}0vw)`;
			setTimeout(function () {
				theSlider.classList.remove("transition");
				theSlider.classList.add("notransition");
				// slideRight.onclick = null;
				// slideLeft.onclick = null;
				theSlider.style.transform = "translateX(-100vw)";
			}, 300);

			setTimeout(function () {
				theSlider.classList.add("transition");
				theSlider.classList.remove("notransition");
				// slideRight.onclick = "right()";
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
				theSlider.style.transform = `translateX(0vw)`;
				position = slides.length - 2;
				setTimeout(function () {
					theSlider.classList.remove("transition");
					theSlider.classList.add("notransition");
					theSlider.style.transform = `translateX(-${10 * position}0vw)`;
					// slideRight.onclick = null;
					// slideLeft.onclick = null;
				}, 300);

				setTimeout(function () {
					theSlider.classList.add("transition");
					theSlider.classList.remove("notransition");
					// slideRight.onclick = "right()";
					// slideLeft.onclick = "left()";
				}, 600);
			} else {
				theSlider.style.transform = `translateX(-${10 * position}0vw)`;
			}
		} else if (position < 2) {
			console.log("left, position <=2");
			position = slides.length - 2;
			theSlider.style.transform = `translateX(0vw)`;
			setTimeout(function () {
				theSlider.classList.remove("transition");
				theSlider.classList.add("notransition");
				// slideRight.onclick = null;
				// slideLeft.onclick = null;
				console.log(position);
				theSlider.style.transform = `translateX(-${10 * position}0vw)`;
			}, 300);

			setTimeout(function () {
				theSlider.classList.add("transition");
				theSlider.classList.remove("notransition");
				// slideRight.onclick = "right()";
				// slideLeft.onclick = "left()";
			}, 600);
		} else if (position == 2) {
			position--;
			theSlider.style.transform = `translateX(-${10 * position}0vw)`;
		}
		console.log("position: " + position + " count: " + count);
		lastClicked = left;
		return position, lastClicked;
	}
});
