'use strict';
    const names = ['John', 'Paul', 'Jones'];
    var targetElement = document.getElementById("target");
    var listHTML = "";


    for (var i = 0; i < names.length; i++) {
        listHTML += "<li>" + names[i] + "</li>";
    }


    targetElement.innerHTML = listHTML;
