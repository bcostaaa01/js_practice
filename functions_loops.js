// this is a practise on functions and loops in JavaScript

// function to get total before tax

function preTaxTotal (cartItems) {

let total = 0;

for (let cartItem of cartItems) { 
  // iterating through the cartItems array
  total += cartItem.quantity * cartItem.price;
 }
 return total;
}

const cartItems = [
  { quantity: 1, price: 10,
    quantity: 5, price: 15,
    quantity: 10, price: 20
  }
];

const preTaxTotal = getPreTaxTotal(cartItems); 

console.log(preTaxTotal(cartItems)); // log: '285'

// function to get the total with tax

function getTaxedTotal(preTaxTotal) {
  return preTaxTotal *= 1.20;
};

const finalPrice = getTaxedTotal(preTaxTotal); // variable where the price with tax is stored

console.log(finalPrice); // log: '342'

