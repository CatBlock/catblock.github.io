var safariURL = "https://github.com/CatBlock/catblock/releases/download/v1.4.9/catblock-safari.safariextz";
var firefoxURL = "https://addons.mozilla.org/firefox/addon/adblock-with-catblock/";

$(document).ready(function() {
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
    var edge = chrome && (navigator.userAgent.indexOf("Edge") > -1);
    var firefox = navigator.userAgent.indexOf("Firefox") > -1;

    var $DLbutton = $("#downloadbtn");

    if (opera) {
        $DLbutton.text("Install CatBlock now!");
        $DLbutton.click(function() {
            opr.addons.installExtension("pejeadkbfbppoaoinpmkeonebmngpnkk");
        });
    } else if (chrome && !edge) {
        $DLbutton.text("Install CatBlock now!");
        $DLbutton.click(function() {
            chrome.webstore.install();
        });
    } else if (safari) {
        $DLbutton.text("Install CatBlock now!");
        $DLbutton.attr("href", safariURL);
    } else if (firefox) {
        $DLbutton.text("Install CatBlock now!");
        $DLbutton.attr("href", firefoxURL);
    } else {
        $DLbutton.removeClass("btn-success").addClass("btn-failure");
        $DLbutton.text("CatBlock is not available for your browser.");
        $DLbutton.attr("href", "#");
    }
});
