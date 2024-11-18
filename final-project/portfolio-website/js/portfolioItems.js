console.log("portfolio stuff loaded");

//acordian function

//function to handle the toggle of the accordion
function toggleAccordion(accordionItem, isChecked) {
    const content = accordionItem.querySelector('.accordionContent');
    const checkbox = accordionItem.querySelector('input[type="checkbox"]');
    
    //toggle accordion content display based on checkbox state
    if (isChecked) {
        accordionItem.classList.add('active');
        content.style.display = 'block';
    } else {
        accordionItem.classList.remove('active');
        content.style.display = 'none';
    }
    
    //reset all other items (collapse and uncheck their checkboxes)
    document.querySelectorAll('.accordionItem').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordionContent').style.display = 'none';
            const otherCheckbox = item.querySelector('input[type="checkbox"]');
            if (otherCheckbox) otherCheckbox.checked = false;
        }
    });
}

//add event listener to the checkbox change (this ensures toggle switch updates accordion)
const checkboxes = document.querySelectorAll('.toggleSwitch input');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const accordionItem = this.closest('.accordionItem');
        const isChecked = this.checked;
        
        //toggle accordion based on checkbox state
        toggleAccordion(accordionItem, isChecked);
    });
});


document.addEventListener('DOMContentLoaded', () => {

    //class definition
    class portfolioPiece {
        constructor(type,thumbnail, alt, title, description, time, content) {
            this.type = type;
            this.portfolioPieceThumbnail = thumbnail; 
            this.portfolioPieceAlt = alt;
            this.portfolioPieceTitle = title;
            this.portfolioPieceDescription = description;
            this.portfolioPieceTime = time;
            this.portfolioPieceContent = content;

            this.element = null;
        }
    }

    //portfolio items

    const photographyPieces = {
        "Film":{
            "type": "carousel",
            "thumbnail": "assets/projects/photography/film_photography/film_photography_thumbnail.jpg" ,
            "alt": "Film photography thumbnail",
            "title": "Film Photography Carousel",
            "description": "A series of my favorite film photos",
            "time": "2023,2024",
            "content": "assets/projects/PM FitnessBFF/Strava Product Pitch.pdf"
        },
        
    }

    const videographyPieces = {
        "Fitness-BFF":{
            "type": "youtube",
            "thumbnail": "assets/imagePlaceholder.png" ,
            "alt": "HoneyPoi Colors of Spring Documentary thumbnail",
            "title": "HoneyPoi Colors of Spring Documentary",
            "description": "A documentary for HoneyPoi's Color of Spring event, showcasing the preparation and event processes.",
            "time": "2024",
            "content": "assets/projects/PM FitnessBFF/Strava Product Pitch.pdf"
        },

    }

    const productDesignPieces = {
        "Fitness-BFF":{
            "type": "pdf",
            "thumbnail": "assets/projects/product_design/FitnessBFF/FitnessBFF_thumbnail.png" ,
            "alt": "Fitness BFF project thumbnail",
            "title": "Strava: FitnessBFF (PM Practice)",
            "description": "A short practice PM pitch designing a product for event gathering for Strava",
            "time": "2024",
            "content": "assets/projects/product_design/FitnessBFF/FitnessBFF_content.pdf"
        },
        
        "Netflix-Community-Feature":{
            "type": "pdf",
            "thumbnail": "assets/projects/product_design/netflix_community/netflix_community_thumbnail.png",
            "alt": "Netflix Community Feature project thumbnail",
            "title": "Netflix Community Feature (PM Pitch Competition)",
            "description": "A PM pitch competition project pitching a community tab feature on Netflix to revitalize connectivity in a digital first society",
            "time": "2024",
            "content": "assets/projects/product_design/netflix_community/netflix_community_content.pdf"
        }

    }

    //create and populate product design
    function createProductDesign(productDesignPiece) {
        const template = document.querySelector('#productDesign .projectTemplate');
        if (!template) {
            console.error("Template not found!");
            return;
        }

        //clone the template content
        const clone = template.content.cloneNode(true);

        //populate the cloned template with data
        const image = clone.querySelector('img');
        if (image) {
            image.src = productDesignPiece.portfolioPieceThumbnail;
            image.alt = productDesignPiece.portfolioPieceAlt;
        }

        const title = clone.querySelector('h1');
        if (title) {
            title.textContent = productDesignPiece.portfolioPieceTitle;
        }

        const fileLink = clone.querySelector('a');
        if (fileLink) {
            fileLink.href = productDesignPiece.portfolioPieceFile;
            fileLink.textContent = "View PDF";
        }

        const productDesignList = document.querySelector('#productDesign');
        if (productDesignList) {
            productDesignList.appendChild(clone);
        } else {
            console.error("Product design container not found!");
        }
    }

    //iterate over portfolio items and create elements
    for (const key in productDesignPieces) {
        if (Object.hasOwn(productDesignPieces, key)) {
            const piece = productDesignPieces[key];
            const portfolioItem = new portfolioPiece(
                piece.type,
                piece.thumbnail,
                piece.alt,
                piece.title,
                piece.description,
                piece.time,
                piece.content
            );
            createProductDesign(portfolioItem);
        }
    }

    console.log("product design done");



//send portfolio to main screen

//get all project showcase items
const projectShowcases = document.querySelectorAll('.projectShowcase');
const projectViewWindow = document.getElementById('projectViewWindow');
const projectTitleElement = document.querySelector('.projectName');

//add click event listeners to each project
projectShowcases.forEach(project => {
    project.addEventListener('click', function() {
        //remove 'selected' class from all projects
        projectShowcases.forEach(p => p.classList.remove('selected'));
        
        //add 'selected' class to clicked project
        this.classList.add('selected');

        //get the project content
        const projectImage = this.querySelector('img').src;
        const projectTitle = this.querySelector('h1').textContent;

        //update the project view window
        projectViewWindow.innerHTML = `
            <img src="${projectImage}" alt="${projectTitle}" style="width: 100%; height: 100%; object-fit: contain;">
        `;
        projectTitleElement.textContent = projectTitle;
    });
});

});