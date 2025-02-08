// Prices for each item
const prices = {
  flavor: {
    original: 2.5,
    mango: 3.0,
    strawberry: 3.5,
  },
  size: {
    small: 1.0,
    medium: 1.5,
    large: 2.0,
  },
  toppings: {
    boba: 0.5,
    jelly: 0.75,
    pudding: 1.0,
  },
};

// Function to display the order summary
function displayOrderSummary(order) {
  const orderSummary = `You have ordered a ${order.size} ${
    order.flavor
  } boba with these toppings: ${order.toppings.join(" ")}
Total Price: $${order.finalPrice.toFixed(2)}.`;
  document.getElementById("flavor-summary").innerText = orderSummary;
}

// Function to place the order
function placeOrder(event) {
  event.preventDefault();

  const flavorSelected = document.getElementById("flavor").value;
  const sizeSelected = document.getElementById("size").value;

  const toppingsSelect = document.getElementById("toppings");

  const selectedToppings = Array.from(toppingsSelect.selectedOptions)
    .filter((option) => !option.disabled)
    .map((option) => option.value);

  if (!validateOrder(flavorSelected, sizeSelected)) {
    alert("Please select a flavor and size.");
    return;
  }

  const basePrice = prices.flavor[flavorSelected];
  const sizeMultiplier = prices.size[sizeSelected];
  const toppingsPrice = selectedToppings.reduce(
    (acc, topping) => acc + prices.toppings[topping],
    0
  );

  const finalPrice = sizeMultiplier * (basePrice + toppingsPrice);

  let order = {
    flavor: flavorSelected,
    size: sizeSelected,
    toppings: selectedToppings,
    finalPrice: finalPrice,
  };

  displayOrderSummary(order);
}

// function testOrder() {
//   const flavor = "original";
//   const size = "medium";
//   const toppings = ["boba", "jelly"];
//   placeOrder(flavor, size, toppings);
// }

// Function to validate if the required fields are filled out
function validateOrder(flavorSelected, sizeSelected) {
  return flavorSelected && sizeSelected;
}

const button = document.getElementById("orderButton");
button.addEventListener("click", placeOrder);
