$(document).ready(function () {
	"use strict";
	
	// Let's detect the browser, and show a Safari downloads link if it's unsupported
	
	var UA = navigator.userAgent;
	var $DLbutton = $("#downloadbtn");

	if (UA.indexOf("OPR") > -1) {
		$DLbutton.text("Download for Opera");
		$DLbutton.attr("href", "/opera");
	}
	else if (UA.indexOf("Chrome") > -1) {
		$DLbutton.text("Download for Chrome");
		$DLbutton.attr("href", "/chrome");
	}
	else {
		$DLbutton.text("Download for Safari");
		$DLbutton.attr("href", "/safari");
	}
});