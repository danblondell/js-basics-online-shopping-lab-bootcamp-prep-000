var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var itemAndPrice = {};
  var price = Math.floor(Math.random() * 100);
  itemAndPrice[item] = price;
  cart.push(itemAndPrice);
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  var niceCart = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      // Gets item and price object from cart
      var itemAndPrice = cart[i];
      for (var item in itemAndPrice) {
        niceCart.push(` ${item} at $${itemAndPrice[item]}`);
      }
    }
    console.log(`In your cart, you have${niceCart}.`)
  }
}

function removeFromCart(item) {
  var itemThere = false;
  for (var i = 0, l = cart.length; i < l; i++) {
    var itemObj = cart[i];
    if (itemObj.hasOwnProperty(item)) {
      cart.splice(i,1);
      var itemThere = true;
      }
    }
    if (!itemThere) {
      console.log("That item is not in your cart.");
  } 
  return cart;
}  

/*   
  Works except for else condition
    var itemObj = cart[i];
    for (var itemName in itemObj) {
      if (itemName === item) {
        cart.splice(i,1);
      } else {
        console.log("That item is not in your cart.");
      } 
    }
  } return cart
} 
*/

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0;
  return cart
}