
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

const queryString = window.location.search;
const params = new URLSearchParams(queryString); //makes it so that you don't have to make seperate html file for each product
const rollType = params.get('roll');

let rollData = rolls[rollType]; //this is what stores the stuff

//initializing variables
let rollTitle = '';
let rollImageFile = '';
let rollBasePrice = rollData["basePrice"];

console.log('Roll Data:', rollData); 

console.log('global base price: ' + rollBasePrice);

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

console.log('--hw 4 stuff complete--')

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

}
)

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

class Roll {
    constructor(thisRollType, rollGlazing, packSize, basePrice) {
        this.type = thisRollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const addToCartButton = document.getElementById('addToCart');
addToCartButton.onclick = addToCart;


function addToCart() {
    const thisRolltype = rollType;
    const rollGlazing = document.getElementById('glazingOptions').value;
    const packSize = document.getElementById('packSizeOptions').value;
    const basePrice = rollData.basePrice;

    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);

    cart.push(newRoll);
    console.log("Cart:", cart);

}
