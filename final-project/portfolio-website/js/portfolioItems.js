console.log("porfolio stuff loaded")

const buttons = document.querySelectorAll('.accordionButton');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

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
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
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