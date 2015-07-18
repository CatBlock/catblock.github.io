$(document).ready(function () {
	"use strict";

    var leftdiv = document.getElementById("leftrow");
    var rightdiv = document.getElementById("rightrow");

    function resize(width) {
        if (width < 985) {
            $(rightdiv).css("display", "none").removeClass("col-xs-4");
            $(leftdiv).removeClass("col-xs-8");
        } else {
            $(rightdiv).css("display", "block").addClass("col-xs-4");
            $(leftdiv).addClass("col-xs-8");
        }
    }

    // Resize divs properly
    resize($(window).width());

    $(window).resize(function() {
        var width = $(window).width();
        resize(width);
    });
	
	// Let's detect the browser, and show a Safari downloads link if it's unsupported
	var chrome = window.chrome;
    var opera = window.opr;
    var safari = window.safari;
	var $DLbutton = $("#downloadbtn");

	if (opera) {
		$DLbutton.text("Download for Opera");
        $DLbutton.click(function() {
            opr.addons.installExtension("pejeadkbfbppoaoinpmkeonebmngpnkk");
        });
	} else if (chrome) {
		$DLbutton.text("Download for Chrome");
        $DLbutton.click(function() {
            chrome.webstore.install();
        });
	} else if (safari) {
		$DLbutton.text("Download for Safari");
		$DLbutton.attr("href", "/safari");
	} else {
        $DLbutton.text("Unfortunately, CatBlock is not available for your browser.");
        $DLbutton.attr("href", "#");
    }
});