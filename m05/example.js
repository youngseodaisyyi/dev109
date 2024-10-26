var input = prompt("Input a number between 1 and 10 to see the multiplication table for the desired number.", "1-10"); // Prompt User
var num = parseInt(input); // Convert input to an integer
var msg = '';              // Message

// Validate input
if (num >= 1 && num <= 10) {
        var msg = '<h2>Multiplication Table'</h2>'; // Message

// Generate multiplication table
        for (var i = 1; i <= 10; i++) {
            msg += num + ' x ' + i + ' = ' + (num * i) + '<br>'; // Use <br> for line breaks
        }
} else {
        // Handle invalid input
        alert("Please enter a valid number between 1 and 10.");
    }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

