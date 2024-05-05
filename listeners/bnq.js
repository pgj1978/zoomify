
class BnQListener {
    clickListender;

    constructor(gallery) {

        this.clickListender = document.addEventListener('click', async function (event) {
            const clickedElement = event.target;
            const dataTestId = clickedElement.getAttribute('data-test-id');

            if (dataTestId === 'picture-wrapper') {
                gallery.clear();
                const nextButton = document.querySelector('button[data-arrow-direction="next"]');

                new Promise(async resolve => {
                    for (let i = 0; i < 100; i++) {
                        nextButton.click();
                        await new Promise(resolve => setTimeout(resolve, 10));
                    }
                    scanAndPushImages();
                });

                scanAndPushImages();

                gallery.show();
            }

            function scanAndPushImages() {
                const allPictures = document.querySelectorAll('div.slick-track button[data-test-id="carousel-thumbnail-image"] img[data-test-id="image"]');

                let imageSrcs = [];
                allPictures.forEach((img) => {
                    imageSrcs.push(img.src);
                });

                gallery.addImages(imageSrcs.map(x => replaceWidthHeight(x, 3000, 3000)));
            }

            function replaceWidthHeight(url, width, height) {
                const regex = /(\$width=)(\d+)/;
                const regex2 = /(\$height=)(\d+)/;
                const newUrl = url.replace(regex, `$1${width}`);
                return newUrl.replace(regex2, `$1${height}`);
            }
        });

    }

    dispose() {
        document.removeEventListener(this.clickListender);
    }
}
