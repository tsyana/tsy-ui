
export default {
    inserted: function (el, binding, vnode) {
        tooltip(el, binding.value)
    },
    unbind: function (el, binding, vnode) { //5-解绑
        hideTooltip()
    }
}
// 生成唯一id
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function tooltip(el, binding) {
    hover(el, binding, (e, obj, binding) => {
        if (obj.scrollWidth > obj.offsetWidth) {
            showTooltip(obj, binding)
        }
    }, (e, obj, binding) => {
        if (obj.scrollWidth > obj.offsetWidth) {
            hideTooltip(obj, binding)
        }
    }, (e, obj, binding) => {
        // 被监听元素通过点击使display none被隐藏时（如element的popup），
        // 如果此时tooltip没有被隐藏掉，可以通过传click: true强制关闭
        if (binding.click) {
            hideTooltip()
        }
        if (window.history.state.key != historyState) {
            historyState = window.history.state.key
            hideTooltip()
        }
    });

}

function bind(elem, ev, callback) {

    if (document.all) {
        elem.attachEvent("on" + ev, callback);
    } else {
        elem.addEventListener(ev, callback, false);
    }
}

function unbind(elem, ev, callback) {
    if (typeof callback == "function") {
        if (document.all) {
            elem.detachEvent("on" + ev, callback);
        } else {
            elem.removeEventListener(ev, callback, false);
        }
    } else {
        if (document.all) {
            elem.detachEvent("on" + ev);
        } else {
            elem.removeEventListener(ev, false);
        }
    }
}

function hover(elem, binding, overCallback, outCallback, clickCallback) {
    //实现hover事件
    function over(e) {
        overCallback(e, elem, binding);
    }
    function out(e) {
        outCallback(e, elem, binding);
    }

    // 监听点击是否有跳转，解决跳转tooltip不隐藏的问题
    function clickElem(e) {
        clickCallback(e, elem, binding)
    }
    bind(elem, "mouseover", over);
    bind(elem, "mouseout", out);
    bind(elem, "click", clickElem);
}

function showTooltip(obj, binding) {
    let ToolTipBox = document.createElement('div')
    ToolTipBox.className = 'el-tooltip__popper is-dark cdp-tooltip';
    let uuid = uuidv4().split('-')[0]
    obj.setAttribute('tooltip-bind', uuid)
    ToolTipBox.id = 'tooltip-' + uuid
    ToolTipBox.innerHTML = obj.innerText
    document.body.appendChild(ToolTipBox)
    ToolTipBox.style.position = 'fixed'
    ToolTipBox.style.zIndex = '9999'
    // 获取要显示tooltip的元素的位置样式信息
    const locInfo = obj.getClientRects()[0]
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        locInfo.x = locInfo.left
        locInfo.y = locInfo.top
    }
    // 获取tooltip的位置、样式信息
    const tooltipInfo = ToolTipBox.getClientRects()[0]
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        tooltipInfo.x = tooltipInfo.left
        tooltipInfo.y = tooltipInfo.top
    }
    // 生成arrow
    let arrow = document.createElement('div')
    let tipStyle = { // tooltip样式
        left: 0,
        top: 0
    }
    switch (binding.position) {
        case 'top':
            tipStyle.left = locInfo.x + locInfo.width / 2 - tooltipInfo.width / 2
            tipStyle.top = locInfo.y - obj.offsetHeight / 2 - tooltipInfo.height
            arrow.style.borderLeft = '6px solid transparent'
            arrow.style.borderRight = '6px solid transparent'
            arrow.style.borderTop = '6px solid #303133'
            arrow.style.top = document.getElementsByClassName('cdp-tooltip')[0].getClientRects()[0].height + 'px'
            arrow.style.left = (tooltipInfo.width - 6) / 2 + 'px'
            break;
        case 'bottom':
            tipStyle.left = locInfo.x + locInfo.width / 2 - tooltipInfo.width / 2
            tipStyle.top = locInfo.y + locInfo.height + 10
            arrow.style.borderLeft = '6px solid transparent'
            arrow.style.borderRight = '6px solid transparent'
            arrow.style.borderBottom = '6px solid #303133'
            arrow.style.top = -12 + 'px'
            arrow.style.left = (tooltipInfo.width - 6) / 2 + 'px'
            break;
        case 'left':
            tipStyle.left = locInfo.x - tooltipInfo.width - 12
            tipStyle.top = locInfo.y - 6
            arrow.style.borderBottom = '6px solid transparent'
            arrow.style.borderTop = '6px solid transparent'
            arrow.style.borderLeft = '6px solid #303133'
            arrow.style.top = locInfo.height / 2 + 'px'
            arrow.style.left = (tooltipInfo.width) + 'px'
            break;
        case 'right':
            tipStyle.left = locInfo.x + locInfo.width + 12
            tipStyle.top = locInfo.y - 6
            arrow.style.borderBottom = '6px solid transparent'
            arrow.style.borderTop = '6px solid transparent'
            arrow.style.borderRight = '6px solid #303133'
            arrow.style.top = locInfo.height / 2 + 'px'
            arrow.style.left = -12 + 'px'
            break;
    }
    ToolTipBox.style.left = tipStyle.left + 'px'
    ToolTipBox.style.top = tipStyle.top + 'px'
    ToolTipBox.style.display = "block";

    arrow.className = 'popper__arrow'
    // arrow 样式


    ToolTipBox.appendChild(arrow)

}

function hideTooltip(obj) {
    if (obj) {
        if (document.getElementById('tooltip-' + obj.getAttribute('tooltip-bind'))) {
            document.body.removeChild(document.getElementById('tooltip-' + obj.getAttribute('tooltip-bind')))
        }
    } else {
        var arr = document.querySelectorAll('.cdp-tooltip')
        for (var i = 0; i < arr.length; i++) {
            document.body.removeChild(arr[i])
        }
    }

}
