/**
 * Created by liuy1994@outlook.com on 2017/6/9.
 */
window.dom= {}

// dom.create
window.dom.create = function(tagName,child,attr){
    var tag = document.createElement(tagName)
    
    if (child instanceof HTMLElement){
        tag.appendChild(child)
    }else if (typeof child === 'string') {
        var text1 = document.createTextNode(child)
        tag.appendChild(text1)
    }else if (child instanceof Array) {
        for (var i = 0; i < child.length; i++) {
            if (typeof child[i] === 'string') {
                var text2 = document.createTextNode(child[i])
                tag.appendChild(text2)
            } else if (child[i] instanceof HTMLElement) {
                tag.appendChild(child[i])
            }
        }
    }
    if (typeof attr === 'object'){
        for (var key in attr){
            tag.setAttribute(key,attr[key])
        }
    }
    alert('新建成功')
    return tag
}

// dom.empty
window.dom.empty = function(tag){
    var firstChild = tag.childNodes[0]
    while(firstChild){
        firstChild.remove()
        firstChild = tag.childNodes[0]
    }
    alert('删除成功')
}

// dom.find
window.dom.find = function(selector,scope){
    var tag = (scope instanceof HTMLElement ? scope : document)
    alert('查找成功')
    return tag.querySelectorAll(selector)
}

// dom.children
window.dom.children = function (tag) {
   return tag.children
}

// dom.text
window.dom.text = function (tag) {
    var result = ''
    for (var i = 0;i < tag.childNodes.length;i++){
        if(tag.childNodes[i].nodeType === 3){
            result = result + tag.childNodes[i].textContent.trim()
        }
    }
    return result
}

// dom.attr
window.dom.attr = function (tag,attr) {
    for (var key in attr){
        tag.setAttribute(key,attr[key])
    }
}

// dom.style
window.dom.style = function (tag,styles) {
    for (var key in styles){
        tag.style[key] = styles[key]
    }
}

// dom.bigBrother
window.dom.bigBrother = function (tag) {
    var pre = tag.previousSibling
    while (pre !== null &&pre.nodeType !== 1){
        pre = pre.previousSibling
    }
    return pre
}

//dom.littleBrother
window.dom.littleBrother = function (tag) {
    var next = tag.nextSibling
    while (next !== null &&next.nodeType !== 1){
        next = next.nextSibling
    }
}
