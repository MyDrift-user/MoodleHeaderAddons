// ==UserScript==
// @name         Moodle Header Addons
// @namespace    Moodle Header Addons
// @description  Adds a direct link to important sites on the Moodle header
// @author       MyDrift (https://github.com/MyDrift-user/)
// @version      1.0
// @match        https://moodle.bbbaden.ch/*
// @downloadURL  https://github.com/MyDrift-user/Moodle-Header-Addons/raw/main/Moodle-Header-Addons.user.js
// @updateURL    https://github.com/MyDrift-user/Moodle-Header-Addons/raw/main/Moodle-Header-Addons.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

function createHeader(name, link) {
    try {
        var li = document.createElement('li');
        var a = document.createElement('a');

        var linkText = document.createTextNode(name);
        a.title = name;
        a.href = link;
        a.appendChild(linkText);

        li.appendChild(a);

        document.querySelector(".navbar .nav").appendChild(li);
        console.log("created", name);
    }
    catch (error) {
        console.error("[createHeader] name: ${name} link: ${link}", error);
    }
}


createHeader("Mahara", "https://portfolio.bbbaden.ch/");
createHeader("ÜK", "https://odaorg.ict-bbag.ch/")