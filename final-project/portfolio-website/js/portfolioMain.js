import { PortfolioPiece, photographyPieces, videographyPieces, productDesignPieces } from './portfolioData.js';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("portfolio stuff loaded");

//title Global variables
// #region Global Variables
    let currentContentType = null;

    //note carousel global
    let currentCarouselIndex = 0;
    let currentSlides = [];

    //note pdf global
    let currentPdfUrl = null; 
    let pdfDoc = null
    let currentPage = 1;
    let totalPages = 0;
    const scale = 1.5;
    let isCanvasAActive = true;
    let pageCache = {}; 
// #endregion

//title Accordion
// #region Accordion
const projectViewWindow = document.getElementById('projectViewWindow');
const projectTitleElement = document.querySelector('.projectName');

//feature Accordion function
function toggleAccordion(accordionItem, isChecked) {
    const content = accordionItem.querySelector('.accordionContent');
    const checkbox = accordionItem.querySelector('input[type="checkbox"]');

    //note Toggle accordion content display based on checkbox state
    if (isChecked) {
        accordionItem.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        accordionItem.classList.remove('active');
        content.style.maxHeight = '0';
    }

    //note reset all other items (collapse and uncheck their checkboxes)
    document.querySelectorAll('.accordionItem').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            const otherCheckbox = item.querySelector('input[type="checkbox"]');
            if (otherCheckbox) otherCheckbox.checked = false;
            const otherContent = item.querySelector('.accordionContent');
            if (otherContent) otherContent.style.maxHeight = '0';
        }
    });
} 

// Attach the function to each checkbox
const accordionItems = document.querySelectorAll('.accordionItem');
accordionItems.forEach(accordionItem => {
    const checkbox = accordionItem.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            toggleAccordion(accordionItem, checkbox.checked);
        });
    }
});


//#endregion

//title function to create portfolio items dynamically
// #region Inject Portfolio
    function createPortfolioItem(piece, category) {
        const template = document.querySelector(`#${category} .projectTemplate`);
        if (!template) {
            console.error(`Template not found for ${category}!`);
            return;
        }

        // Clone the template content
        const clone = template.content.cloneNode(true);

        // Ensure the cloned element has the correct class
        const projectElement = clone.querySelector('.projectShowcase');
        if (projectElement) {
            projectElement.dataset.type = piece.type; // Assign type
            projectElement.dataset.content = piece.portfolioPieceContent; // Assign content

            // Populate the cloned template with data
            const image = clone.querySelector('img');
            if (image) {
                image.src = piece.portfolioPieceThumbnail;
                image.alt = piece.portfolioPieceAlt;
            }

            const title = clone.querySelector('h1');
            if (title) {
                title.textContent = piece.portfolioPieceTitle;
            }

            // Find the correct container and append
            const container = document.querySelector(`#${category}`);
            if (container) {
                container.appendChild(clone);
            } else {
                console.error(`Container not found for ${category}!`);
            }
        }
    }

    // Initialize Portfolio Items
    function initializePortfolio() {
        const categories = {
            photography: photographyPieces,
            videography: videographyPieces,
            productDesign: productDesignPieces,
        };

        // Iterate over categories and create portfolio items
        Object.entries(categories).forEach(([category, items]) => {
            Object.values(items).forEach((itemData) => {
                const piece = new PortfolioPiece(
                    itemData.type,
                    itemData.thumbnail,
                    itemData.alt,
                    itemData.title,
                    itemData.description,
                    itemData.time,
                    itemData.content
                );
                createPortfolioItem(piece, category);
            });
        });

        console.log("Portfolio items created");

        // Add click handlers to dynamically render content in project view
        const projectShowcases = document.querySelectorAll('.projectShowcase');

        projectShowcases.forEach((project) => {
            project.addEventListener('click', function () {
                projectShowcases.forEach((p) => p.classList.remove('selected'));
                this.classList.add('selected');

                console.log("Project clicked");

                currentContentType = this.dataset.type; // Set the current content type
                const content = this.dataset.content;

                console.log(`Type: ${currentContentType}, Content: ${content}`); // Debugging

                projectViewWindow.innerHTML = '';

                switch (currentContentType) {
                    case 'image':
                        projectViewWindow.innerHTML = `<img src="${content}" alt="" style="width: 100%; height: 100%; object-fit: contain;">`;
                        break;

                    case 'youtube':
                        projectViewWindow.innerHTML = `<iframe src="https://www.youtube.com/embed/${content}" frameborder="0" allowfullscreen style="width: 100%; height: 100%;"></iframe>`;
                        break;

                    case 'pdf':
                        currentPdfUrl = content;

                        projectViewWindow.innerHTML = `<canvas id="pdf-canvas" style="width: 100%; height: 100%;"></canvas>`;
                        loadPdf(currentPdfUrl);

                    case 'carousel':
                        currentSlides = JSON.parse(content);
                        currentCarouselIndex = 0; // Start with the first slide
                        updateCarouselView(currentCarouselIndex);
                        break;

                    default:
                        projectViewWindow.innerHTML = `<p>Content type not supported.</p>`;
                }

                projectTitleElement.textContent = this.querySelector('h1').textContent;
            });
        });
    }
// #endregion

//title project loading functions
// #region load functions
    //feature load PDF function
    function loadPdf(pdfUrl) {
        currentPage = 1; // Reset to first page whenever a new PDF is loaded.
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then((pdf) => {
            pdfDoc = pdf;
            totalPages = pdf.numPages;
            renderPage(currentPage);
        }).catch((error) => {
            console.error('Error loading PDF:', error);
            projectViewWindow.innerHTML = `<p>Error loading PDF. Please try again later.</p>`;
        });
    }

    function renderPage(pageNumber) {
        // Clear previous content in the project view window
        projectViewWindow.innerHTML = '';
    
        // Create a canvas to render the current page
        const canvas = document.createElement('canvas');
        canvas.id = 'pdf-canvas';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        projectViewWindow.appendChild(canvas);
    
        const canvasContext = canvas.getContext('2d', { willReadFrequently: true });
    
        // Check if the page is in cache
        if (pageCache[pageNumber]) {
            // Render directly from cached image if available
            const cachedImage = document.createElement('img');
            cachedImage.src = pageCache[pageNumber]; // Use cached image URL
            cachedImage.style.width = '100%';
            cachedImage.style.height = '100%';
            cachedImage.style.objectFit = 'contain';
    
            projectViewWindow.innerHTML = ''; // Clear the canvas
            projectViewWindow.appendChild(cachedImage);
        } else {
            // Load and render the page if it's not in the cache
            pdfDoc.getPage(pageNumber).then((page) => {
                const viewport = page.getViewport({ scale });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
    
                const renderContext = {
                    canvasContext: canvasContext,
                    viewport: viewport,
                };
    
                // Render the page to the canvas
                page.render(renderContext).promise.then(() => {
                    // Convert the rendered canvas to an image and store in cache
                    const imageURL = canvas.toDataURL();
                    pageCache[pageNumber] = imageURL;
    
                    // Display the cached image
                    const cachedImage = document.createElement('img');
                    cachedImage.src = imageURL;
                    cachedImage.style.width = '100%';
                    cachedImage.style.height = '100%';
                    cachedImage.style.objectFit = 'contain';
    
                    projectViewWindow.innerHTML = ''; // Clear the canvas
                    projectViewWindow.appendChild(cachedImage);
                }).catch((error) => {
                    console.error('Error rendering page:', error);
                });
            }).catch((error) => {
                console.error('Error getting page:', error);
            });
        }
    
        // Preload next and previous pages for a smoother experience
        if (pageNumber < totalPages && !pageCache[pageNumber + 1]) {
            pdfDoc.getPage(pageNumber + 1).then((page) => {
                const canvas = document.createElement('canvas');
                const viewport = page.getViewport({ scale });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const renderContext = {
                    canvasContext: canvas.getContext('2d', { willReadFrequently: true }),
                    viewport: viewport,
                };
                page.render(renderContext).promise.then(() => {
                    pageCache[pageNumber + 1] = canvas.toDataURL(); // Cache next page image
                });
            });
        }
    
        if (pageNumber > 1 && !pageCache[pageNumber - 1]) {
            pdfDoc.getPage(pageNumber - 1).then((page) => {
                const canvas = document.createElement('canvas');
                const viewport = page.getViewport({ scale });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const renderContext = {
                    canvasContext: canvas.getContext('2d', { willReadFrequently: true }),
                    viewport: viewport,
                };
                page.render(renderContext).promise.then(() => {
                    pageCache[pageNumber - 1] = canvas.toDataURL(); // Cache previous page image
                });
            });
        }
    }
    //feature function to update the carousel view
    function updateCarouselView(index) {
        if (index < 0 || index >= currentSlides.length) {
            console.error('Invalid carousel index');
            return;
        }
        projectViewWindow.innerHTML = `<img src="${currentSlides[index]}" alt="Carousel Slide" style="width: 100%; height: 100%; object-fit: contain;">`;
    }

    // Event listeners for forward and backward buttons
    document.getElementById('forwardButton').addEventListener('click', () => {
        switch (currentContentType) {
            case 'pdf':
                if (pdfDoc && currentPage < totalPages) {
                    currentPage++;
                    renderPage(currentPage);
                }
                break;
            case 'carousel':
                if (currentCarouselIndex < currentSlides.length - 1) {
                    currentCarouselIndex++;
                    updateCarouselView(currentCarouselIndex);
                }
                break;
            default:
                console.warn('Forward button action not defined for current content type');
        }
    });

    document.getElementById('backwardButton').addEventListener('click', () => {
        switch (currentContentType) {
            case 'pdf':
                if (pdfDoc && currentPage > 1) {
                    currentPage--;
                    renderPage(currentPage);
                }
                break;
            case 'carousel':
                if (currentCarouselIndex > 0) {
                    currentCarouselIndex--;
                    updateCarouselView(currentCarouselIndex);
                }
                break;
            default:
                console.warn('Backward button action not defined for current content type');
        }
    });
// #endregion

    // Initialize everything
    initializePortfolio();
});
