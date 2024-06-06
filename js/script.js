// created by Niko 
// created on: May 27 2024
// user number display

"use strict"

// function for user display
function numberAddition() {

  // get user input for min
  let userMax = Number(document.getElementById("userMax").value);
  // get user input for max
  let userMin = Number(document.getElementById("userMin").value);
  let userInt = Number(document.getElementById("userInt").value);
  // empty string for displaying numbers
  let displayMessage = "";
  // counter to see if user Min is equal to user Max
  let counter = userMin;

  let sum = 0;

  // while counter is not equal to userMax, update the counter unti it is equal to userMax
  while (counter <= userMax) {
    sum =  userInt + counter;
    displayMessage = displayMessage + counter + "+" + userInt + "=" + sum + "<br>";
    counter++;
  }

  if (userMin > userMax) {
    document.getElementById("user-info").innerHTML = "Your minimum is greater than your maximum. Please try again.";
  } else {
    // display the numbers
    document.getElementById("user-info").innerHTML = displayMessage;
  }
}

