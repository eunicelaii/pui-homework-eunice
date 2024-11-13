console.log("portfolio stuff loaded");

// Function to handle the toggle of the accordion
function toggleAccordion(accordionItem, isChecked) {
    const content = accordionItem.querySelector('.accordionContent');
    const checkbox = accordionItem.querySelector('input[type="checkbox"]');
    
    // Toggle accordion content display based on checkbox state
    if (isChecked) {
        accordionItem.classList.add('active');
        content.style.display = 'block';
    } else {
        accordionItem.classList.remove('active');
        content.style.display = 'none';
    }
    
    // Reset all other items (collapse and uncheck their checkboxes)
    document.querySelectorAll('.accordionItem').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordionContent').style.display = 'none';
            const otherCheckbox = item.querySelector('input[type="checkbox"]');
            if (otherCheckbox) otherCheckbox.checked = false;
        }
    });
}

// Add event listener to the checkbox change (this ensures toggle switch updates accordion)
const checkboxes = document.querySelectorAll('.toggleSwitch input');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const accordionItem = this.closest('.accordionItem');
        const isChecked = this.checked;
        
        // Toggle accordion based on checkbox state
        toggleAccordion(accordionItem, isChecked);
    });
});


/* class portfolioPiece {
    constructor(imageURL,title,description){
        this.portfolioPieceimageURL = imageURL;
        this.portfolioPieceTitle = title;
        this.portfolioPieceDescription - description;

        this.element = null;
    }
}

 */