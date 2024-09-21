
document.addEventListener('DOMContentLoaded', function() {

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
const basePrice = 2.49;

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

    totalPrice = (basePrice + glazingPrice) * packSizePrice;

    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}

