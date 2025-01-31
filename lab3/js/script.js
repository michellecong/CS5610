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

function displayOrderSummary(order) {
  console.log(
    `You have ordered a ${order.size} ${
      order.flavor
    } boba with these toppings: ${order.toppings.join(" ")}
Total Price: $${order.finalPrice.toFixed(2)}.`
  );
}

function placeOrder(flavor, size, toppings) {
  const basePrice = prices.flavor[flavor];
  const sizeMultiplier = prices.size[size];
  const toppingsPrice = toppings.reduce(
    (acc, topping) => acc + prices.toppings[topping],
    0
  );
  const finalPrice = sizeMultiplier * (basePrice + toppingsPrice);
  let order = {
    flavor: flavor,
    size: size,
    toppings: toppings,
    finalPrice: finalPrice,
  };

  displayOrderSummary(order);
}

function testOrder() {
  const flavor = "original";
  const size = "medium";
  const toppings = ["boba", "jelly"];
  placeOrder(flavor, size, toppings);
}
