// Class definition
class PortfolioPiece {
    constructor(type, thumbnail, alt, title, description, time, content) {
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

// Portfolio Items
const photographyPieces = {
    "Film": {
        "type": "carousel",
        "thumbnail": "assets/projects/photography/film_photography/film_photography_thumbnail.jpg",
        "alt": "Film photography thumbnail",
        "title": "Film Photography Carousel",
        "description": "A series of my favorite film photos",
        "time": "2023,2024",
        "content": JSON.stringify([
            "assets/projects/photography/film_photography/film_photography_thumbnail.jpg",
            "assets/projects/photography/film_photography/images/photo1.jpg",
            "assets/projects/photography/film_photography/images/photo2.jpg",
            "assets/projects/photography/film_photography/images/photo3.jpg", 
            "assets/projects/photography/film_photography/images/photo4.jpg"
        ])
    }
};

const videographyPieces = {
    "HP-Colors-Of-Spring": {
        "type": "youtube",
        "thumbnail": "assets/imagePlaceholder.png",
        "alt": "HoneyPoi Colors of Spring Documentary thumbnail",
        "title": "HoneyPoi Colors of Spring Documentary",
        "description": "A documentary for HoneyPoi's Color of Spring event.",
        "time": "2024",
        "content": "YK59L-BDaqY" 
    }
};

const productDesignPieces = {
    "Fitness-BFF": {
        "type": "pdf",
        "thumbnail": "assets/projects/product_design/FitnessBFF/FitnessBFF_thumbnail.png",
        "alt": "Fitness BFF project thumbnail",
        "title": "Strava: FitnessBFF (PM Practice)",
        "description": "A short practice PM pitch designing a product for event gathering for Strava",
        "time": "2024",
        "content": "assets/projects/product_design/FitnessBFF/FitnessBFF_content.pdf"
    },
    "Netflix-Community-Feature": {
        "type": "pdf",
        "thumbnail": "assets/projects/product_design/netflix_community/netflix_community_thumbnail.png",
        "alt": "Netflix Community Feature project thumbnail",
        "title": "Netflix Community Feature (PM Pitch Competition)",
        "description": "A PM pitch competition project pitching a community tab feature on Netflix.",
        "time": "2024",
        "content": "assets/projects/product_design/netflix_community/netflix_community_content.pdf"
    }
};

const timelineImages = {
    "meBaby": {
        "src": "assets/timeline/meBaby.jpg",
        "alt": "photo of me as a baby",
    },
    "meGraduated": {
        "src": "assets/timeline/meGraduated.jpg",
        "alt": "photo of me when I graduated from High School"
    },
    "meSummer": {
        "src": "assets/timeline/meSummer.jpg",
        "alt": "photo of me in Sri Lanka this summer",
    },
    "meNow": {
        "src": "assets/timeline/meNow.jpg",
        "alt": "photo of me right now!",
    }
}
// Export data and class
export { PortfolioPiece, photographyPieces, videographyPieces, productDesignPieces, timelineImages };
