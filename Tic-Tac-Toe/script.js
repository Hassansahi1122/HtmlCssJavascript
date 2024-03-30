// This function takes a CSS selector string as an argument and returns all elements.
const queryall = (vari) => {
  return document.querySelectorAll(vari);
};

// This function takes a CSS selector string as input and returns the first element
const query = (vari) => {
  return document.querySelector(vari);
};

let boxes = queryall(".box");
let btnReset = query("#btnReset");
let newBtn = query("#newbtn");
let continu = query("#continue");
let showstatement = query("#show_result");
let winnerdiv = query(".winerdiv");
let Tic = query(".Tic-Tac");
let select_o_x = query(".select");
let select1_o_x = query(".select1");
let list = query(".list");
let listitem = queryall(".list li");
let btn = queryall(".btn");
let sp = query(".sp");
let info = query(".information");
let pop = query(".pop");
let gamediv = query(".gamediv");
let infomain = query(".info-main");
let namewiner = query("#name");
let player1stname = query(".player1stname");
let player2ndname = query(".player2ndname");
let player1stwingame = query(".player1stwingame");
let player2ndwingame = query(".player2ndwingame");
let winningpoint1st = 0;
let winningpoint2nd = 0;
let O;
let getotruefalse = false;
let count = 0;

// Display will be block of Competiter Information when the DOM content mean page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  pop.style.display = "block";
});

// Toggle the display the list of X and O item when the X will click
select_o_x.addEventListener("click", () => {
  // If the current display style is flex, change it to none; otherwise, change it to flex
  list.style.display = list.style.display === "flex" ? "none" : "flex";
});

// Hide the list of X and O item when clicking outside of the select_o_x element, select1_o_x element, and the list itself
document.addEventListener("click", (e) => {
  if (
    !select_o_x.contains(e.target) &&
    !select1_o_x.contains(e.target) &&
    !list.contains(e.target)
  ) {
    list.style.display = "none";
  }
});

///////////////////////////////////////////////////////
/////////////// Select Letter X or O
///////////////////////////////////////////////////////

// Set default selection to X for the first player
listitem[0].querySelector(".btn").classList.add("clicked");
select_o_x.innerText = listitem[0].querySelector(".ite").innerText;
// Set default selection to O for the second player
select1_o_x.innerText = listitem[1].querySelector(".ite").innerText;

listitem.forEach((item) => {
  // Add click event listeners to each list item
  item.addEventListener("click", () => {
    // Remove 'clicked' class from all list items
    listitem.forEach((li) => {
      // check if the 'clicked' class is attached to a list li
      if (li.querySelector(".btn").classList.contains("clicked")) {
        li.querySelector(".btn").classList.remove("clicked");
      }
    });
    // Add 'clicked' class to the clicked list item
    item.querySelector(".btn").classList.add("clicked");
    // Update select_o_x text with the selected item's text
    select_o_x.innerText = item.querySelector(".ite").innerText;
    // Update select1_o_x text based on the selected item
    select1_o_x.innerText = select_o_x.innerText === "X" ? "O" : "X";
    O = select_o_x.innerText === "X" ? false : true;
    getotruefalse = O;
  });
});

///////////////////////////////////////////////////////
/////////////// After Submit the information
///////////////////////////////////////////////////////

// Handle form submission for player information
info.addEventListener("submit", (e) => {
  // Hide the pop-up playes information and show the game div
  pop.style.display = "none";
  gamediv.style.display = "block";
  // Prevent the default form submission behavior
  e.preventDefault();
  // Get all input elements of type text such as player1 and player2
  const inputs = queryall('input[type="text"]');
  // Initialize an array to store input values
  let inputvalue = [];

  // Iterate over each input element and push its value to the array(inputvalue)
  inputs.forEach((input) => {
    inputvalue.push(input.value);
  });
  // Set the player names in the game UI
  player1stname.innerText = inputvalue[0];
  player2ndname.innerText = inputvalue[1];
});

// Array of win pattern
let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// disable all boxes
const hide = () => {
  for (const i of boxes) {
    i.disabled = true;
  }
};
// Enable all boxes
const show = () => {
  for (const i of boxes) {
    i.disabled = false;
  }
};

// This function resets the character of all boxes to empty strings.
const empty = () => {
  for (const box of boxes) {
    box.innerText = "";
  }
  count = 0;
};

///////////////////////////////////////////////////////
// Display the winner of the game and update the score
///////////////////////////////////////////////////////

const displaywinner = (winner) => {
  if ((winner === "X" && !getotruefalse) || (winner === "O" && getotruefalse)) {
    // Update UI for player 1 win
    namewiner.innerText = player1stname.innerText;
    winningpoint1st++;
    player1stwingame.innerText = winningpoint1st;
  } else {
    // Update UI for player 2 win
    namewiner.innerText = player2ndname.innerText;
    winningpoint2nd++;
    player2ndwingame.innerText = winningpoint2nd;
  }
  showstatement.innerText = " The winner is : ";
  namewiner.style.display = "block";
  infomain.style.display = "block";
  hide(); // Disable all box
};

///////////////////////////////////////////////////////
// Check Win Pattern
///////////////////////////////////////////////////////

const checkWiner = (index) => {
  // Loop through each win pattern
  for (let pattern of winpattern) {
    // Check if the index is part of the current win pattern
    if (index === pattern[0] || index === pattern[1] || index === pattern[2]) {
      // Get the text content of the pattern in the position
      let position1 = boxes[pattern[0]].innerText;
      let position2 = boxes[pattern[1]].innerText;
      let position3 = boxes[pattern[2]].innerText;
      // Check if all positions are filled
      if (position1 !== "" && position2 !== "" && position3 !== "") {
        if (position1 == position2 && position2 == position3) {
          // Display the winner
          displaywinner(position1);
          // Check elseif it's a draw (neither player has won)
        } else if (
          count === 9 &&
          (position1 !== position2 || position2 !== position3) &&
          (position2 === position3 || position2 !== position3) &&
          (position2 === position1 || position2 !== position1)
        ) {
          showstatement.innerText = " Neither player has won ";
          namewiner.style.display = "none";
          infomain.style.display = "block";
          winnerdiv.classList.remove("disable");
        }
      }
    }
  }
};

///////////////////////////////////////////////////////
//// This script handles the logic of which character will be set in the box.
///////////////////////////////////////////////////////

boxes.forEach((box, index) => {
  // Add a click event listener to each box
  box.addEventListener("click", () => {
    // Set the text content of the box based on the current player (O or X)
    box.innerText = O ? "O" : "X";
    // Set the color of the text based on the current player
    box.style.color = O ? "red" : "aqua";
    // Toggle the current player (O to X or X to O)
    O = !O;
    // Disable the box to prevent further clicks
    box.disabled = true;
    // Increment the count of clicked boxes
    count++;
    // Check if there's a winner after each click
    checkWiner(index);
  });
});

// Add event listener to new button
newBtn.addEventListener("click", () => {
  // Hides the Result section
  infomain.style.display = "none";
  // Hides the Tic_Tac_Toe Body section
  gamediv.style.display = "none";
  // Reloads the page to start a new game.
  location.reload();
});

// Add event listener to Reset button
btnReset.addEventListener("click", () => {
  O = getotruefalse;
  // Call to empty function
  empty();
  // Call to show function
  show();
});

// Add event listener to continue button
continu.addEventListener("click", () => {
  O = getotruefalse;
  // Call to empty function
  empty();
  // Call to show function
  show();
  // Hides the Result section
  infomain.style.display = "none";
});
