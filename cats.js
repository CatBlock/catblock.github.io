// TODO: Make Project CATS working on Safari
//       Include click handlers for Firefox and Safari
//       Include correct links for Safari and Firefox builds

$(document).ready(function () {
    "use strict";

    var chrome = window.chrome;
    var opera = window.opr;
    var safari = window.safari;
    var edge = chrome && (navigator.userAgent.indexOf("Edge") > -1);
    var firefox = navigator.userAgent.indexOf("Firefox") > -1;

    var firefoxURL = "https://addons.mozilla.org/firefox/addon/adblock-with-catblock/";
    var safariURL = "https://github.com/CatBlock/catblock/releases/download/v1.4.9/catblock-safari.safariextz";

    var $DLbutton = $("#downloadbtn");

    // Project CATS is available for Chrome and Opera only
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
    } else if (safari) {
        $DLbutton.text("Download for Safari");
        $DLbutton.attr("href", "#");
    } else if (firefox) {
        $DLbutton.text("Download for Firefox");
        $DLbutton.attr("href", "#");
    } else {
        $DLbutton.text("Unfortunately, CatBlock is available only for Chrome and Opera");
        $DLbutton.attr("href", "#");
    }
});