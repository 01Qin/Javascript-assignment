
    var students = [
        { value: "2345768", name: "John" },
        { value: "2134657", name: "Paul" },
        { value: "5423679", name: "Jones" }
    ];

    var targetElement = document.getElementById("target");


    for (var i = 0; i < students.length; i++) {
        var option = document.createElement("option");
        option.value = students[i].value;
        option.text = students[i].name;
        targetElement.appendChild(option);
    }
