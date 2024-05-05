class WickesListener extends ClickListener {
    constructor(gallery) { super(gallery); }

    getIsZoomable = (clickedElement) => clickedElement.getAttribute('data-test') === 'zoom-trigger';
    nextButtonQuery = null;
    imageSourceQuery = 'div[data-test="gallery-thumbnail-wrap"] button img';
    replaceWidthHeight = (url, width, height) => url.replace(/(\,w_)(\d+)/g, `$1${width}`).replace(/(\,h_)(\d+)/g, `$1${height}`);
    onZoomed() { }
}  
