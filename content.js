

let listner = null;


window.addEventListener('load', async (event) => {
    if (listner) listner.dispose();
    listner = await listenerFactory();
});

async function listenerFactory() {
    switch (new URL(window.location.href).hostname) {
        case 'www.diy.com':
            return new BnQListener(new Gallery());
        case 'www.screwfix.com':
            return new ScewfixListener(new Gallery());
        case 'www.wickes.co.uk':
            return new WickesListener(new Gallery());
        default:
            return null;
    }
}

class Gallery {
    imageSrcs = [];
    galleryImages = [];
    galleryContainer = null;

    constructor() {
        this.galleryContainer = document.createElement('div');
        this.galleryContainer.classList.add('gallery-container');
        this.galleryContainer.addEventListener('click', () => {
            if (this.galleryContainer) {
                document.body.removeChild(this.galleryContainer);
            }
        });
    }

    addImages(imageSrcs) {
        imageSrcs.forEach((src) => {
            if (this.galleryImages.filter(x => x.src === src).length <= 0) {
                let galleryImage = new GalleryImage(this, src);
                this.galleryImages.push(galleryImage);
            }
        });
    }

    show() {
        this.imageSrcs.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            this.galleryContainer.appendChild(img);
        });

        document.body.appendChild(this.galleryContainer);
    }

    clear() {
        this.galleryImages.forEach(x => x.dispose());
        this.galleryImages = [];
    }
}

class GalleryImage {
    img = document.createElement('img');
    src = '';
    gallery = null;

    constructor(gallery, src) {
        this.img.src = src;
        this.src = src;
        this.gallery = gallery;
        this.gallery.galleryContainer.appendChild(this.img);
    }

    dispose() {
        this.gallery.galleryContainer.removeChild(this.img);
    }
}

function importScript(scriptName) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: [scriptName],
    });
}