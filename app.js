// image scroll on home slide

let imagesScroll = document.getElementsByClassName("image-scroll");
let imageScrollIndex = 0;

setInterval(function() {
	imageScrollIndex += 1;
	if (imageScrollIndex >= imagesScroll.length) {
		imageScrollIndex = 0;
	}
		for (let j = 0; j < imagesScroll.length; j++){
			imagesScroll[j].style.visibility = "hidden";
		}
	imagesScroll[imageScrollIndex].style.visibility = "visible";
}, 4000)

// menu slide animation

// let menuItemsDisplay = document.getElementsByClassName("menu-item");
// let menuItemDisplayIndex = 2;
// setInterval(function() {
	// if (menuItemDisplayIndex  == 0){
		// for (let m = 0; m < menuItemsDisplay.length; m++){
			// menuItemsDisplay[m].style.order = "1";
		// }
		// console.log("reset");
	// } else{
		// menuItemsDisplay[menuItemDisplayIndex].style.order = "0";
		// console.log("0");}
		// menuItemDisplayIndex = (menuItemDisplayIndex + 2) % 3;
// }, 5000) 