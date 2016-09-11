$(document).ready(function () {
    "use strict";

    var chrome = window.chrome;
    var opera = window.opr;
    var safari = window.safari;
    var edge = chrome && (navigator.userAgent.indexOf("Edge") > -1)
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
        $DLbutton.text("Unfortunately, CatBlock is available only for Chrome and Opera");
        $DLbutton.attr("href", "#");
    } else {
        $DLbutton.text("Unfortunately, CatBlock is available only for Chrome and Opera");
        $DLbutton.attr("href", "#");
    }
});