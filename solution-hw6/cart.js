const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

//only call function when page loads in
document.addEventListener('DOMContentLoaded', function() {
    retrieveFromLocalStorage(); 
});

finalCart = [];

//roll class
class Roll {
    constructor(thisRollType, rollGlazing, packSize, basePrice) {
        this.type = thisRollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.price = this.calculatePrice();
    }

    //calculate price based on pack size and glazing
    calculatePrice() {

        const packSizeMultiplier = {
            1: 1,
            3: 3,
            6: 5, 
            12: 10, 
        };

        const glazingPrice = {
            "Keep original": 0,  
            "Sugar milk": 0,  
            "Vanilla milk": 0.50, 
            "Double chocolate": 1.50,

        };

        // console.log(`base price of ${this.type}: ${this.basePrice}`);
        // console.log(`glazing of ${this.type}: ${this.glazing}`);
        // console.log(`glazing added price of ${this.type}: ${glazingPrice[this.glazing]}`)
        // console.log(`pack size multiplier of ${this.type}: ${this.size}`);

        // Calculate the final price
        if (finalCart.length === -1) {
            const finalPrice = 0;
            return finalPrice;
        } else {
            const finalPrice = (this.basePrice + glazingPrice[this.glazing]) * packSizeMultiplier[this.size];
            return finalPrice; 
        }
    }

}

//create elements on page

function createElement(product){

    // make clone of notecard template
    const template = document.querySelector('#cartTemplate');
    const clone = template.content.cloneNode(true);
    product.element = clone.querySelector('.cartProduct');
    
    //delete button
    const btnDelete = product.element.querySelector('.removebutton');
    btnDelete.addEventListener('click', () => deleteProduct(product));

    // add  product to DOM
    const cartListElement = document.querySelector('#cartList');
    cartListElement.append(product.element);

    updateElement(product);

    updateFinalPrice();
}

function updateElement(product){
    const productImageElement = product.element.querySelector('.cartProductimage');
    const productTitleElement = product.element.querySelector('.cartProductTitle');
    const productGlazingElement = product.element.querySelector('.cartProductGlazing');
    const productSizeElement = product.element.querySelector('.cartProductSize');
    const productPriceElement = product.element.querySelector('.cartProductPrice');

    productImageElement.src = `assets/products/${product.type.toLowerCase()}-cinnamon-roll.jpg`;
    productTitleElement.innerText = product.type + " Cinnamon Roll";
    productGlazingElement.innerText = product.glazing;
    productSizeElement.innerText = "Pack size: " + product.size;
    productPriceElement.innerText = "$ " + product.price.toFixed(2);

}

function deleteProduct(product){
    const index = finalCart.indexOf(product);
    
    if (index > -1) { // Only proceed if the product is found
        finalCart.splice(index, 1);
    }

    product.element.remove();

    updateFinalPrice();

    updateLocalStorage();

}

// retrieve from local storage

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(cartArrayString);
    console.log("--cart array--")
    console.log(cartArray);

    for (const item of cartArray) {
        const thisRollType = item.type;
        const rollGlazing = item.glazing;
        const packSize = item.size;
        const basePrice = item.basePrice;

        const product = new Roll(thisRollType, rollGlazing, packSize, basePrice);
        finalCart.push(product);
        createElement(product);

        console.log(product);

        }
}
    
function updateLocalStorage() {
    const cartArrayString = JSON.stringify(finalCart);
    localStorage.setItem('storedCart', cartArrayString);  // Store the updated cart array as a string in local storage
}

//update final cart price
function updateFinalPrice(){
    console.log("calculating the final price...");

    let cartFinalPrice = 0;
    const cartPriceElement = document.getElementById('cartFinalPrice');

    console.log("no of rolls in cart: " + finalCart.length);

    if (finalCart.length === 0) {
        console.log("Cart is empty.");
        cartPriceElement.innerText = '$0.00'; // Set to 0 when the cart is empty
    } else {
        for (const product of finalCart) {
            cartFinalPrice += product.price;
            console.log(`Adding product ${product.type} price: $${product.price}`);
        }
        cartPriceElement.innerText = '$' + cartFinalPrice.toFixed(2); 
        console.log('Total cart price updated: $' + cartFinalPrice.toFixed(2));
    }

}



