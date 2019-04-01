const DATA_DPR = 'data-dpr';

/**
 * 当 DPR 图片存在时，进行替换。
 *
 * @param {Element} image
 * @param {String}  dprSrc
 */
const replaceDPR = (imageA, dprSrc) => {
    const testImage = document.createElement('img');
    const image = imageA;
    testImage.addEventListener('load', () => {
        if (image.nodeName.toLowerCase() === 'img') {
            image.setAttribute('src', dprSrc);
        } else {
            image.style.backgroundImage = `url(${dprSrc})`;
        }
    });

    testImage.setAttribute('src', dprSrc);
    image.setAttribute(DATA_DPR, true);
};

const setDPR = (image) => {
    if (image.getAttribute(DATA_DPR)) {
        return false;
    }

    const dpr = Math.round(window.devicePixelRatio || 1);

    let src = image.getAttribute('src');
    if (image.nodeName.toLowerCase() !== 'img') {
        src = image.style.backgroundImage.replace(/url\(('|")?([^\)'"]+)('|")?\)/i, '$2');  // eslint-disable-line no-useless-escape
    }

    const dprSrc = src.replace(/(\.[A-z]{3,4}\/?(\?.*)?)$/, `@${dpr}x$1`);

    replaceDPR(image, dprSrc);
    return true;
};

/*
 * If this environment has `window`, activate the plugin.
 */
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        document.querySelectorAll('img').forEach((img) => {
            setDPR(img);
        });
    });
}

export default setDPR;
