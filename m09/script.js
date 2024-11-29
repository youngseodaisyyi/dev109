var mybutton = document.querySelector("#cleanBtn");

mybutton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("dot");
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    event.stopPropagation();
});

document.body.addEventListener("click", function(event) {
    if (event.target !== mybutton) {
        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(dot);
    }
});
