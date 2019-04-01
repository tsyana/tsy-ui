const PROCESS_CANVAS_ID = 'the_compress_canvas';

if (typeof (window) !== 'undefined' && this === window && (!document.getElementById(PROCESS_CANVAS_ID))) {
    document.createElement('canvas');
}

const compress = (image, quality, sizeRatio, outputType) => {
    if (window && window.document) {
        const w = image.naturalWidth * sizeRatio;
        const h = image.naturalHeight * sizeRatio;
        const cvs = {};
        cvs.width = w;
        cvs.height = h;
        const newImageData = cvs.toDataURL(outputType, quality / 100);
        // console.log("orginal image size:" + image.src.length +
        // "  compressed image size: " + newImageData.length)
        return newImageData;
    }
    return undefined;
};

export default compress;
