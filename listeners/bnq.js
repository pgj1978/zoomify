class BnQListener extends ClickListener {
    constructor(gallery) { super(gallery); }

    getIsZoomable = (clickedElement) => clickedElement.getAttribute('data-test-id') === 'picture-wrapper';
    nextButtonQuery = 'button[data-arrow-direction="next"]';
    imageSourceQuery = 'div.slick-track button[data-test-id="carousel-thumbnail-image"] img[data-test-id="image"]';
    replaceWidthHeight = (url, width, height) => url.replace(/(\$width=)(\d+)/, `$1${width}`).replace(/(\$height=)(\d+)/, `$1${height}`);
    onZoomed() { }
}