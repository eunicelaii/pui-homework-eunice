
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

let cart = [];

//creates params for each site
const queryString = window.location.search;
const params = new URLSearchParams(queryString); 
const rollType = params.get('roll');

console.log("params:" + params.get('roll'))

let rollData = rolls[rollType]; //this is what stores the stuff

//initializing variables
let rollTitle = '';
let rollImageFile = '';

if (rollData && "basePrice" in rollData) {
    rollBasePrice = rollData["basePrice"];
    console.log("Base price found:", rollBasePrice);
} else {
    rollBasePrice = 0;
}

console.log('Roll Data:', rollData); 

console.log('global base price: ' + rollBasePrice);

//for product page

function setRollData(rollData){
    if (rollData){ //see if roll data even exists on this page
        let rollTitle = rollType + ' Cinnamon Roll';
        let rollImageFile = `assets/products/${rollData["imageFile"]}`;

        console.log('Roll Title:', rollTitle);
        console.log('Roll Base Price:', rollBasePrice);
        console.log('Roll Image File:', rollImageFile);

        document.getElementById('rollTitle').innerText = rollTitle;
        document.getElementById('totalPrice').innerText = '$' + rollBasePrice;
        document.getElementById('rollImage').src = rollImageFile;

    }
}

setRollData(rollData);

// calculating prices on product page 
let glazingPrice = 0;
let packSizePrice = 1;

function glazingValue(element){
    glazingPrice = parseFloat(element.value);
    console.log("glazing option price:", glazingPrice);
    calculateTotal();

}

function packSizeValue(element){
    packSizePrice = parseInt(element.value);
    console.log("pack size option multiplier:", packSizePrice)
    calculateTotal();

}

function calculateTotal(){

    let totalPriceElement = document.getElementById("totalPrice");

    totalPrice = (rollBasePrice + glazingPrice) * packSizePrice; 

    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
    console.log ('price updated!')
}

console.log('--dropdown populated--')


// button submit
//currently commented out at the bottom

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
            "Original": 0,  
            "Sugar Milk": 0,  
            "Vanilla Milk": 0.50, 
            "Double Chocolate": 1.50,

        };

        //(base price + glazing price)*pack size
        console.log(`base price of ${this.type}: ${this.basePrice}`);
        console.log(`glazing price of ${this.type}: ${this.glazing}`);
        console.log(`pack size multiplier of ${this.type}: ${this.size}`);


        // Calculate the final price
        if (hw5Cart.length === -1) {
            const finalPrice = 0;
            return finalPrice;
        } else {
            const finalPrice = (this.basePrice + glazingPrice[this.glazing]) * packSizeMultiplier[this.size];
            return finalPrice; 
        }
    }


}

// hw5 cart DELETE FOR HW 6

const hw5Cart = [];

function addNewProduct(thisRollType, rollGlazing, packSize, basePrice) {
    const product = new Roll(thisRollType, rollGlazing, packSize, basePrice);

    hw5Cart.push(product);
}


const originalRoll = addNewProduct("Original", "Sugar Milk", 1, 2.49);
const walnutRoll = addNewProduct("Walnut", "Vanilla Milk", 12, 3.49); //should be vanilla milk
const raisinRoll = addNewProduct("Raisin", "Sugar Milk", 3, 2.99);
const appleRoll = addNewProduct("Apple", "Original", 3, 3.49);

console.log("This is the HW5 cart", hw5Cart);

for (const product of hw5Cart) {
    console.log(product);
    createElement(product);

    console.log("this product's final price: " + product.price);
}

function createElement(product){

    // make clone of notecard template
    const template = document.querySelector('#cartTemplate');
    const clone = template.content.cloneNode(true);
    product.element = clone.querySelector('.cartProduct');
    
    //delete button
    const btnDelete = product.element.querySelector('.removebutton');
    btnDelete.addEventListener('click', () => deleteProduct(product));

    // add  notecard to DOM
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
    const index = hw5Cart.indexOf(product);
    
    if (index > -1) { // Only proceed if the product is found
        hw5Cart.splice(index, 1);
    }

    product.element.remove();

    updateFinalPrice();
}
    
//update final cart price
function updateFinalPrice(){
    console.log("calculating the final price...");

    let cartFinalPrice = 0;
    const cartPriceElement = document.getElementById('cartFinalPrice');

    if (hw5Cart.length === 0) {
        console.log("Cart is empty.");
        cartPriceElement.innerText = '$0.00'; // Set to 0 when the cart is empty
    } else {
        for (const product of hw5Cart) {
            cartFinalPrice += product.price;
        }
        cartPriceElement.innerText = '$' + cartFinalPrice.toFixed(2); 
        console.log('Total cart price updated: $' + cartFinalPrice.toFixed(2));
    }


}


// ADD TO CART THINGS NEED TO BE IN AN IF STATMENT 
// const addToCartButton = document.getElementById('addToCart');
// addToCartButton.onclick = addToCart;

//add to cart

/*COMMENT BACK IN FOR HW 6*/

// function addToCart() {
//     currentGlazingOption = document.getElementById('glazingOptions');
//     currentPackSizeOption = document.getElementById('packSizeOptions');
//     const rollGlazing = currentGlazingOption.options[currentGlazingOption.selectedIndex].textContent;
//     const packSize = currentPackSizeOption.options[currentPackSizeOption.selectedIndex].textContent;
//     const basePrice = rollBasePrice;

//     const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);

//     cart.push(newRoll);
//     console.log(cart);

// }
// function saveToLocalStorage(){
//     const cartArray = Array.from(cart);

//     const cartArrayString = JSON.stringify(cartArray);
//     console.log(cartArrayString);

//     localStorage.setItem('storedCart', cartArrayString);
// }

// function retrieveFromLocalStorage() {
//     const cartArrayString = localStorage.getItem('storedCart');
//     const cartArray = JSON.parse(cartArrayString);

//     console.log('Cart loaded from localStorage:', cart);
//   }

//populate page

const urlParams = new URLSearchParams(window.location.search);

if (window.location.pathname === '/product.html' && params.has('roll')) {
    document.addEventListener('DOMContentLoaded', function() { //waiting for stuff on the page to load first, before populating it

        const glazingOptions = [
            { name: 'Keep original', priceAdaptation: 0 },
            { name: 'Sugar milk', priceAdaptation: 0 },
            { name: 'Vanilla milk', priceAdaptation: 0.50 },
            { name: 'Double chocolate', priceAdaptation: 1.50 }
        ];
        
        const packSizeOptions = [
            { name: '1', multiplier: 1 },
            { name: '3', multiplier: 3 },
            { name: '6', multiplier: 5 },
            { name: '12', multiplier: 10 }
        ];
        
        let glazingDropdown = document.getElementById("glazingOptions")
        for (let i = 0; i < glazingOptions.length; i += 1) {
            let optionElement = document.createElement("option");
            optionElement.textContent = glazingOptions[i].name;
            optionElement.value = glazingOptions[i].priceAdaptation;
            glazingDropdown.appendChild(optionElement);
        }
        let packSizeDropdown = document.getElementById("packSizeOptions")
        for (let i = 0; i < packSizeOptions.length; i += 1){
            let optionElement = document.createElement("option");
            optionElement.textContent = packSizeOptions[i].name;
            optionElement.value = packSizeOptions[i].multiplier;
            packSizeDropdown.appendChild(optionElement);
        }
    
        // retrieveFromLocalStorage();
    
    }
    )
  } else {
    console.log("You are not on a prouduct page page");
  }



//   ----cart

//   function createElement(cartItem) {
//     const template = document.querySelector('#cartTemplate');
//     const clone = template.content.cloneNode(true);
    
//     cartItem.element = clone.querySelector('.cartItem');

//     console.log(cartItem.element);

//     const cartListElement = document.querySelector('#cartList');
//     notecardListElement.prepend(cartItem.element);

//     updateElement(cartItem);

//   }
  
