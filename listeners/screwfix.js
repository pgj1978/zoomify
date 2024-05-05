
class ScewfixListener {
    clickListender;

    constructor(gallery) {

        this.clickListender = document.addEventListener('click', async function (event) {
            const clickedElement = event.target;
            if (clickedElement.parentElement.parentElement.parentElement.classList.contains('slick-current')) {
                gallery.clear();
                const nextButton = document.querySelector('button[data-arrow-direction="next"]');

                scanAndPushImages();

                gallery.show();
            }

            function scanAndPushImages() {
                const allPictures = document.querySelectorAll('div[data-qaid="product-images_thumbnails"] button img');

                let imageSrcs = [];
                allPictures.forEach((img) => {
                    imageSrcs.push(img.src);
                });

                gallery.addImages(imageSrcs.map(x => replaceWidthHeight(x, 3000, 3000)));
                
            }

            function replaceWidthHeight(url, width, height) {
                const regex = /(\&wid=)(\d+)/;
                const regex2 = /(\&hei=)(\d+)/;
                const newUrl = url.replace(regex, `$1${width}`);
                return newUrl.replace(regex2, `$1${height}`);
            }
        });

    }

    dispose() {
        document.removeEventListener(this.clickListender);
    }
}