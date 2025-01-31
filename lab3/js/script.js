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

function placeOrder(flavor, size, toppings) {
  const basePrice = prices.flavor[flavor];
  const sizeMultiplier = prices.size[size];
  const toppingsPrice = toppings.reduce(
    (acc, topping) => acc + prices.toppings[topping],
    0
  );
  const finalPrice = sizeMultiplier * (basePrice + toppingsPrice);
  const order = {
    flavor: flavor,
    size: size,
    toppings: toppings,
    price: finalPrice,
  };
  return order;
}

function displayOrderSummary(order) {
  console.log(
    `You ordered a ${order.size} ${
      order.flavor
    } flavor boba tea with ${order.toppings.join(", ")}. 
  Your total is $${order.price.toFixed(2)}.`
  );
}

function testOrder() {
  const flavor = "mango";
  const size = "medium";
  const toppings = ["boba", "jelly"];
  const order = placeOrder(flavor, size, toppings);
  displayOrderSummary(order);
}
