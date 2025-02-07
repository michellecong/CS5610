const radiusP = document.querySelector("#radius");
const resultP = document.querySelector("#result");

function getNumber() {
  // let radius = prompt("Enter the radius of the circle");
  // return radius;
}

function calculateArea() {
  const number = getNumber();
  // check if the input is a number

  // isNaN(number) ? alert("Please enter a number") : (resultP.textContent = Math.PI * number * number);
  if (isNaN(number)) {
    return "Error: Please enter a number";
  } else {
    return Math.PI * number * number;
  }
}

const result = calculateArea();
console.log(result);

resultP.innerText += result;

let shoppingItems = ["bread", "cheese", "green pepper"];
//ul class="shopping" id="shopping"
// loo in the array
// create a li element
// add the item to the li element
// append the li element to the ul element

const shoppingList = document.querySelector(".shopping");

// for (let i = 0; i < shoppingItems.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = shoppingItems[i];
//   shoppingList.appendChild(li);
// }

// for (let item of shoppingItems) {
//   const li = document.createElement("li");
//   li.textContent = item;
//   shoppingList.appendChild(li);
// }

function pulateShoppingList(shoppingItems) {
  shoppingItems.forEach((item) => {
    // we need to create 3 nodes, not outside the loop
    const shoppingListElement = document.createElement("li");
    shoppingListElement.textContent = item;
    shoppingListElement.classList.add("squareList");

    shoppingList.appendChild(shoppingListElement);
  });
}

pulateShoppingList(shoppingItems);

function changeListElement() {
  shoppingListElement.classList.add("squareList");
}

const button = document.querySelector("#updateImage");

const buttonText = localStorage.getItem("buttonText");
console.log(buttonText);

if (buttonText) {
  button.innerText = buttonText;
}

function changeButtonTest() {
  if (button.innerText === "Click Me!") {
    button.innerText = "Clicked";
  } else if (button.innerText === "Clicked") {
    button.innerText = "Click Me!";
  }

  localStorage.setItem("buttonText", button.innerText);
}

button.addEventListener("click", changeButtonTest);

const buttonContainer = document.querySelector(".buttonContainer");

function changeButtonColor(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  console.log(event);
  event.target.style.backgroundColor = event.target.innerText;
}
// set the listner on the parent of the buttons
buttonContainer.addEventListener("click", changeButtonColor);
