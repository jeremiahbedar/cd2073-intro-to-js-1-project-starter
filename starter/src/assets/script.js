/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name: "cherry",
  price: 1.99,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
}
const orange = {
  name: "orange",
  price: 2.19,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
}
const strawberry = {
  name: "strawberry",
  price: 2.39,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
}

products.push(cherry, orange, strawberry);
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

// Helper function that filters product from total list of products
function getProductFromList(productId, productList) {
  return productList.filter((product) => product.productId === productId)[0];
  
}

function addProductToCart(productId) {
  const selectedProduct = getProductFromList(productId, products);
  if (!cart.includes(selectedProduct)) { 
    // if cart doesn't include item, add to cart
    cart.push(selectedProduct); // 
  }
  selectedProduct.quantity += 1; 
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const selectedProduct = getProductFromList(productId, products);
  selectedProduct.quantity += 1;
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const selectedProduct = getProductFromList(productId, products);
  selectedProduct.quantity -= 1;
  if (selectedProduct.quantity === 0) {
    let productIndex = cart.indexOf(selectedProduct);
    cart.splice(productIndex, 1);
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  // find product from list by index
  // set the quantity to 0
  // remove item from cart
  const selectedProduct = getProductFromList(productId, cart);
  let productIndex = cart.indexOf(selectedProduct);
  selectedProduct.quantity = 0;
  cart.splice(productIndex, 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  // iterate over every item in cart, adding price per items
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += (cart[i].price * cart[i].quantity);
  }
  return Number(totalCost.toFixed(2)); // returns cart Total with 2 decimal point precision
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = []; // removes all of the contents of the user's cart
}
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

let totalPaid = 0; // tracks amount of money paid 

function pay(amount) {
  // adds amount paid to total paid
  totalPaid += amount;
  console.log(totalPaid);
  let remainingToPay = totalPaid - cartTotal(); // tracks money left to pay
  if (remainingToPay >= 0) { // if money left to pay is greater than or equal to 0
    totalPaid = 0;
    emptyCart(); // clear cart
  }

  return Number(remainingToPay.toFixed(2));

}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
