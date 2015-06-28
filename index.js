$(document).ready(function () {
	"use strict";
	
	// Let's detect the browser, and show a Safari downloads link if it's unsupported
	var chrome = window.chrome;
    var opera = window.opr;
    var safari = window.safari;
	var $DLbutton = $("#downloadbtn");

	if (opera) {
		$DLbutton.text("Download for Opera");
		$DLbutton.attr("href", "/opera");
	} else if (chrome) {
		$DLbutton.text("Download for Chrome");
		$DLbutton.attr("href", "/chrome");
	} else if (safari) {
		$DLbutton.text("Download for Safari");
		$DLbutton.attr("href", "/safari");
	} else {
        $DLbutton.text("Unfortunately, CatBlock is not available for your browser.");
        $DLbutton.attr("href", "#");
    }
});