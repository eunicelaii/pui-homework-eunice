console.log("porfolio stuff loaded")

/* accordian menu */
const buttons = document.querySelectorAll('.accordionButton');

buttons.forEach(button => {
    button.addEventListener('click', toggleAccordion);
});

// Add event listeners for toggle switches
document.querySelectorAll('.togglSwitch input[type="checkbox"]').forEach(toggle => {
    toggle.addEventListener('change', function(e) {
        const accordionLabel = this.closest('.accordionLabel');
        const accordionItem = accordionLabel.parentElement;
        
    // Collapse all other items
    document.querySelectorAll('.accordionItem').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordionContent').style.display = 'none';
                const otherToggle = item.querySelector('input[type="checkbox"]');
                if (otherToggle) {
                    otherToggle.checked = false;
        }
            }
    });

    // Toggle current item
    accordionItem.classList.toggle('active');
    const content = accordionItem.querySelector('.accordionContent');
    if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
    });
});

function toggleAccordion() {
    const accordionItem = this.parentElement.parentElement;
    console.log('Accordion Item:', accordionItem);

    // Collapse all other items
    document.querySelectorAll('.accordionItem').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordionContent').style.display = 'none';
    }
    });

    // Toggle current item
    accordionItem.classList.toggle('active');
    const content = accordionItem.querySelector('.accordionContent');
    console.log('Content:', content);

    if (content) {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

    const toggleSwitch = this.nextElementSibling.querySelector('input[type="checkbox"]');
    if (toggleSwitch) {
        toggleSwitch.checked = !toggleSwitch.checked;
    }
}

/* class portfolioPiece {
    constructor(imageURL,title,description){
        this.portfolioPieceimageURL = imageURL;
        this.portfolioPieceTitle = title;
        this.portfolioPieceDescription - description;

        this.element = null;
    }
}

 */