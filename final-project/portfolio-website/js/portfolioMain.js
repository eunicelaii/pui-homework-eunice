import { PortfolioPiece, photographyPieces, videographyPieces, productDesignPieces } from './portfolioData.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("portfolio stuff loaded");

    // Global variables
    let currentContentType = null;
    let currentCarouselIndex = 0;
    let currentSlides = [];
    let pdfDoc = null;
    let currentPage = 1;
    let totalPages = 0;
    const scale = 1.5;
    let isCanvasAActive = true;

    const projectViewWindow = document.getElementById('projectViewWindow');
    const projectTitleElement = document.querySelector('.projectName');

    // Accordion function
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

    // Add event listener to the checkbox change
    const checkboxes = document.querySelectorAll('.toggleSwitch input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const accordionItem = this.closest('.accordionItem');
            const isChecked = this.checked;

            // Toggle accordion based on checkbox state
            toggleAccordion(accordionItem, isChecked);
        });
    });

    // Function to create portfolio items dynamically
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
                        loadPdf(content);
                        break;

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

// Function to load the PDF and render the first page
    function loadPdf(pdfUrl) {
        currentPage = 1; // Reset page to the first one whenever a new PDF is loaded.
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

    // Function to render a specific page of the PDF
    function renderPage(pageNumber) {
        // Ensure projectViewWindow is cleared and ready
        projectViewWindow.innerHTML = ''; 

        const canvas = document.createElement('canvas');
        canvas.id = 'pdf-canvas';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        projectViewWindow.appendChild(canvas);

        pdfDoc.getPage(pageNumber).then((page) => {
            const viewport = page.getViewport({ scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: viewport,
            };

            page.render(renderContext).promise.catch((error) => {
                console.error('Error rendering page:', error);
            });
        });
    }

// Function to update the carousel view
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

    // Initialize everything
    initializePortfolio();
});
