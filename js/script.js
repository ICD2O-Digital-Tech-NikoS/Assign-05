// created by Niko 
// created on: june 7th 2024
// number addition

"use strict"

// function for number addition
function numberAddition() {

  // get user input for max
  let userMax = Number(document.getElementById("userMax").value);
  // get user input for min
  let userMin = Number(document.getElementById("userMin").value);
  // gets users number
  let userInt = Number(document.getElementById("userInt").value);
  // empty string for displaying numbers
  let displayMessage = "";
  // counter set to user min value
  let counter = userMin;
  // initializes sum value
  let sum = 0;

  // Check if any input is empty
  if (userMax == "" || userMin == "" || userInt == "") {
    document.getElementById("user-info").innerHTML = "Please fill all boxes";
    return;
  }

  // if the user minimum number for the addition table is greater than their maximum number, it dislays an error message because a minimum should not be greater than a maximum. 
  if (userMin > userMax) {
    // displays error message in the display div
    document.getElementById("user-info").innerHTML = "Your minimum is greater than your maximum. Please try again.";
  } else {
    // while counter is not greater than the userMax, update the sum to equal the user number plus the counter, the display message to equal the sum, and the counter to equal the counter plus one. repeats until the counter is greater than the userMax
    while (counter <= userMax) {
      sum =  userInt + counter;
      displayMessage = displayMessage + counter + "+" + userInt + "=" + sum + "<br>";
      counter++;
    }
    // display the display message
    document.getElementById("user-info").innerHTML = displayMessage;
  }
}
