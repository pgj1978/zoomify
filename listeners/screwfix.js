class ScewfixListener extends ClickListener {
    constructor(gallery) { super(gallery); }

    getIsZoomable = (clickedElement) => clickedElement?.parentElement?.parentElement?.parentElement?.classList?.contains('slick-current');
    nextButtonQuery = null;
    imageSourceQuery = 'div[data-qaid="product-images_thumbnails"] button img';
    replaceWidthHeight = (url, width, height) => url.replace(/(\&wid=)(\d+)/, `$1${width}`).replace(/(\&hei=)(\d+)/, `$1${height}`);
    onZoomed() { }
}