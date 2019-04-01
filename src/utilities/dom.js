import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

const trim = string => (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');

const camelCase = name =>
    name.replace(
        SPECIAL_CHARS_REGEXP, (w, separator, letter, offset) => (offset ? letter.toUpperCase() : letter)).replace(MOZ_HACK_REGEXP, 'Moz$1');


export const on = (() => {
    if (!isServer && document.addEventListener) {
        return (element, event, handler) => {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    }
    return (element, event, handler) => {
        if (element && event && handler) {
            element.attachEvent(`on${event}`, handler);
        }
    };
})();

export const off = (() => {
    if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    }
    return function (element, event, handler) {
        if (element && event) {
            element.detachEvent(`on${event}`, handler);
        }
    };
})();

export const once = (el, event, fn) => {
    const listener = () => {
        if (fn) {
            fn.apply(this, arguments);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
};

export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }
    return (` ${el.className} `).indexOf(` ${cls} `) > -1;
}

export function addClass(ela, cls) {
    const el = ela;
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i += 1) {
        const clsName = classes[i];
        if (clsName) {
            if (el.classList) {
                el.classList.add(clsName);
            } else if (!hasClass(el, clsName)) {
                curClass += `  ${clsName}`;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

export function removeClass(elA, cls) {
    const el = elA;
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ` ${el.className} `;

    for (let i = 0, j = classes.length; i < j; i += 1) {
        const clsName = classes[i];
        if (clsName) {
            if (el.classList) {
                el.classList.remove(clsName);
            } else if (hasClass(el, clsName)) {
                curClass = curClass.replace(` ${clsName} `, ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

export const getStyle = ieVersion < 9 ? function (element, styleNameA) {
    let styleName = styleNameA;
    if (isServer) return '';
    if (!element || !styleName) return null;

    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'styleFloat';
    }

    try {
        switch (styleName) {
            case 'opacity':
                try {
                    return element.filters.item('alpha').opacity / 100;
                } catch (e) {
                    return 1.0;
                }
            default:
                return (element.style[styleName] ||
                element.currentStyle ? element.currentStyle[styleName] : null);
        }
    } catch (e) {
        return element.style[styleName];
    }
} : function (element, styleNameA) {
    let styleName = styleNameA;
    styleName = camelCase(styleName);
    if (isServer) return '';
    if (!element || !styleName) {
        return null;
    }
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};

export function setStyle(elementA, styleNameA, value) {
    let styleName = styleNameA;
    const element = elementA;
    if (!element || !styleName) return;

    if (typeof styleName === 'object') {
        styleName.each((prop) => {
            if ({}.hasOwnProperty.call(styleName, prop)) {
                setStyle(element, prop, styleName[prop]);
            }
        });
    } else {
        styleName = camelCase(styleName);
        if (styleName === 'opacity' && ieVersion < 9) {
            element.style.filter = isNaN(value) ? '' : `alpha(opacity=${value * 100})`;
        } else {
            element.style[styleName] = value;
        }
    }
}
