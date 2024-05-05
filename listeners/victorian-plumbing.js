class VictorianPlumbingListener extends ClickListener {
    constructor(gallery) { super(gallery); }

    getIsZoomable = (clickedElement) => clickedElement?.parentElement?.className?.indexOf('LazyPictureWrapper') > -1;
    nextButtonQuery = null;
    imageSourceQuery = '.slick-list picture img';
    replaceWidthHeight = (url, width, height) => url.replace(/(\&w=)(\d+)/g, `$1${width}`);
    onZoomed = async () => {
        for (var i = 0; i < 500; i += 10) {
            await new Promise(resolve => setTimeout(resolve, i));
            var close = document.querySelector('#ProductCarouselModal .modal-close-button ');
            if (close) {
                close.click();
                return;
            }
        }
    }
}  
