$(document).ready(function () {
    "use strict";

    var chrome = window.chrome;
    var opera = window.opr;
    var safari = window.safari;
    var edge = chrome && (navigator.userAgent.indexOf("Edge") > -1);
    var firefox = navigator.userAgent.indexOf("Firefox") > -1;

    var firefoxURL = "//addons.mozilla.org/firefox/addon/adblock-with-catblock/";

    var $DLbutton = $("#downloadbtn");

    // Project CATS is available for Chrome, Firefox and Opera only
    if (opera) {
        $DLbutton.text("Download for Opera");
        $DLbutton.click(function() {
            localStorage.setItem("project-cats", true);
            opr.addons.installExtension("pejeadkbfbppoaoinpmkeonebmngpnkk");
        });
    } else if (chrome && !edge) {
        $DLbutton.text("Download for Chrome");
        $DLbutton.click(function() {
            localStorage.setItem("project-cats", true);
            chrome.webstore.install();
        });
    } else if (firefox) {
        $DLbutton.text("Download for Firefox");
        $DLbutton.attr("href", "#");
        $DLbutton.click(function() {
            localStorage.setItem("project-cats", true);
            window.location.href = firefoxURL;
        });
    } else {
        $DLbutton.text("Unfortunately, CatBlock is available only for Chrome, Opera and Firefox");
        $DLbutton.attr("href", "#");
    }
});