
    var targetElement = document.getElementById("target");


    var listItems = ["First item", "Second item", "Third item"];
    for (var i = 0; i < listItems.length; i++) {
        var li = document.createElement("li");
        li.textContent = listItems[i];


        if (i === 1) {
            li.classList.add("my-item");
        }

        targetElement.appendChild(li);
    }
