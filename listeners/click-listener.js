class ClickListener {
    clickListender;
    gallery = null;
    nextButtonQuery = null;
    imageSourceQuery = null;

    constructor(gallery) {
        this.gallery = gallery;
        this.clickListender = document.addEventListener('click', async (event) => {
            const clickedElement = event.target;

            let willZoom = this.getIsZoomable(clickedElement);

            if (willZoom) {
                this.gallery.clear();
                this.scanAndPushImages();
                gallery.show();

                if (this.nextButtonQuery) this.traverseDynamicImages();
                this.onZoomed();
            }
        });
    }

    dispose() {
        document.removeEventListener(this.clickListender);
    }

    traverseDynamicImages() {
        const nextButton = document.querySelector(this.nextButtonQuery);
        new Promise(async resolve => {
            for (let i = 0; i < 100; i++) {
                nextButton.click();
                await new Promise(resolve => setTimeout(resolve, 10));
            }
            this.scanAndPushImages();
        });
    }

    getIsZoomable = (clickedElement) => false;
    scanAndPushImages() {
        const allPictures = document.querySelectorAll(this.imageSourceQuery);

        let imageSrcs = [];
        allPictures.forEach((img) => {
            imageSrcs.push(img.src);
        });

        this.gallery.addImages(imageSrcs.map(x => this.replaceWidthHeight(x, 3000, 3000)));
    }
    onZoomed() { }
    replaceWidthHeight = (url, width, height) => url;
}