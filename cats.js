$(document).ready(function () {
    "use strict";

    var $DLbutton = $("#downloadbtn");

    // Project CATS is available for Chrome
    // TODO: Opera? Firefox?
    $DLbutton.text("Download for Chrome");
    $DLbutton.click(function() {
        localStorage.setItem("project-cats", true);
        chrome.webstore.install();
    });
});