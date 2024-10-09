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


//roll class

class Roll {
    constructor(thisRollType, rollGlazing, packSize, basePrice) {
        this.type = thisRollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        // this.price = this.calculatePrice();
    }

    // //calculate price
    // calculatePrice(){
    //     const packSizeMultiplier = {
    //         1: 1,
    //         3: 3,
    //         6: 5, 
    //         12: 10 
    //     };

    //     const glazingPrice = {
    //         "Original": 0,
    //         "Sugar Milk": 0,  
    //         "Vanilla Milk": 0.50, 
    //         "Double chocolate": 1.50,
    //     };

    //     //final equation
    //     console.log("glazing option price:", glazingPrice[this.glazing]);
    //     console.log("pack size option multiplier:", packSizeMultiplier[this.size]);


    //     const productFinalPrice = ((this.basePrice + glazingPrice[this.glazing] * packSizeMultiplier[this.size])).toFixed(2);
    //     return productFinalPrice;
    // }


}

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


const hw5Cart = [];

function addNewProduct(thisRollType, rollGlazing, packSize, basePrice) {
    const product = new Roll(thisRollType, rollGlazing, packSize, basePrice);

    hw5Cart.push(product);
}

// hw5 cart DELETE FOR HW 6

const originalRoll = addNewProduct("Original", "Sugar Milk", "1", "2.49");
const walnutRoll = addNewProduct("Walnut", "Vanilla Milk", "12", "3.49");
const raisinRoll = addNewProduct("Raisin", "Sugar Milk", "3", "2.99");
const appleRoll = addNewProduct("Apple", "Original", "3", "3.49");

console.log("This is the HW5 cart", hw5Cart);

for (const product of hw5Cart) {
    console.log(product);
    createElement(product);
    console.log(product.price);
}

function createElement(product){

    // make clone of notecard template
    const template = document.querySelector('#cartTemplate');
    const clone = template.content.cloneNode(true);
    product.element = clone.querySelector('.cartProduct');

    console.log(product.element.innerHTML);
    
    //delete button
    const btnDelete = product.element.querySelector('.removebutton');
    btnDelete.addEventListener('click', () => deleteProduct(product));

    // add  notecard to DOM
    const cartListElement = document.querySelector('#cartList');
    cartListElement.append(product.element);

    updateElement(product);

}

function updateElement(product){
    const productImageElement = product.element.querySelector('.cartimage');
    console.log(productImageElement);
    const productTitleElement = product.element.querySelector('.cartProductTitle');
    const productGlazingElement = product.element.querySelector('.cartProductGlazing');
    const productSizeElement = product.element.querySelector('.cartProductSize');
    const productPriceElement = product.element.querySelector('.cartProductPrice');

    productTitleElement.innerText = product.type + " Cinnamon Roll";
    productGlazingElement.innerText = product.glazing;
    productSizeElement.innerText = "Pack size: " + product.size;
    productPriceElement.innerText = "$ " + product.finalPrice;

}

function deleteProduct(product){
    product.element.remove();
    hw5Cart.delete(product);
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


  //----loading in page

  if (window.location.pathname === '/product.html') {
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
    console.log("You are not on the cart page");
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
  
