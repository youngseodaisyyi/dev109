prompt("Input a number between 0-10 to see the multiplication table for the desired number.", "0-10"); // Prompt User
var operator = 'multiplication'; // Type of calculation
var i = 1;  // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';  // Message

if (operator === 'addition') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
