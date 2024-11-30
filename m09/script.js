var mybutton = document.querySelector("#cleanBtn");

mybutton.addEventListener("click", function(event) {
    // Prevent event from propagating to the document body click listener
    event.stopPropagation();
    
    // Remove all existing dots
    var elements = document.getElementsByClassName("dot");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
});

// Prevent dot creation if clicked on the button
document.body.addEventListener("click", function(event) {
    // Check if the clicked target is the button, then prevent dot creation
    if (event.target !== mybutton) {
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(dot);
    }
});
