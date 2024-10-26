var input = prompt("Input a number between 0-10 to see the multiplication table for the desired number.", "0-10"); // Prompt User
var num = parseInt(input); // Convert input to an integer
var operator = 'multiplication'; // Type of calculation
var i = 1;  // Set counter to 1

 if (num >= 1 && num <= 10) {
        var msg = '<h2>Multiplication Table for ' + number + '</h2><ul>';
  for (var i = 1; i <= 10; i++) {
            msg += '<li>' + number + ' x ' + i + ' = ' + (number * i) + '</li>'; // Add each calculation to the message
        }
        msg += '</ul>';
   else {
        alert("Please enter a valid number between 1 and 10.");
    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
