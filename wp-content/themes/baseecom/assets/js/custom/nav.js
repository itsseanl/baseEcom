// add mobile nav chevrons for lis with children
jQuery(document).ready(function () {
	jQuery(".menu-item-has-children > a").each(function () {
		jQuery(this).after(
			'<i class="fas fa-chevron-down" onclick="dropDown(this, this.parentNode, event)" style="float:right;"></i>'
		);
	});
});

// control margin height in relation to navbar height
jQuery(document).ready(function () {
	var marginTop = -(jQuery("#site-navigation").height() + 75);

	jQuery("#site-navigation").css("margin-top", marginTop);
});

// handle mobile nav dropdown
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
}

// handle mobile nav icon animation
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
		mobilenav.style.marginTop = `${marginTop}px`;

		bar3.style.transform = "rotate(0) translate(0)";
		mobileToggle = false;
	}
}
