// hoverPic(i){
// 	var imgId = 'img' + i;
// 	var divId = 'div' + i;
// 	document.getElementById(i).style.visibility = 'visible';
// 	document.getElementById(i).style.visibility = 'visible';
// }

// notHoverPic(i){
// 	var imgId = 'img' + i;
// 	var divId = 'div' + i;
// 	document.getElementById(i).style.visibility = 'hidden';
// 	document.getElementById(i).style.visibility = 'hidden';
// }

// external js: isotope.pkgd.js, packery-mode.pkgd.js
$(document).ready(function() {


$('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item',
});

});

