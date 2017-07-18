window.$ = function (elementOrSelector) {
    var elements
    if(typeof(elementOrSelector) === 'string'){  // 参数是字符串，选择器
        elements = document.querySelectorAll(elementOrSelector)
    }else if(elementOrSelector instanceof Element){  // 参数是元素标签
        elements = {0: elementOrSelector, length: 1}
    }else if(elementOrSelector instanceof Array){  // 参数是数组
        elements = {}
        for(var i=0;i<elementOrSelector.length;i++){  // 把Array的值复制到elments
            elements[i] = elementOrSelector[i]
        }
        elements.length = elementOrSelector.length
    }
    elements.on = function (evenType,fn) {
        for(var i=0;i<elements.length;i++){
            element = elements[i]
            if(element.addEventListener){
                element.addEventListener(evenType,fn)
            }else if(element.attachEvent){  // IE
                element.attachEvent(evenType,fn)
            }
        }
        return elements
    }
    elements.addClass = function (className) {
        for(var i=0;i<elements.length;i++){
            element = elements[i]
            if(element.classList){
                element.classList.add(className)
            }else{                        // IE
                element.className = element.className + '' + className
            }
        }
        return elements
    }
    elements.removeClass = function (className) {
        for(var i=0;i<elements.length;i++){
            element = elements[i]
            if(element.classList){
                element.classList.remove(className)
            }else {  // IE

            }
        }
        return elements
    }
    elements.text = function (string) {
        if(string === undefined){
            var result = []
            for(var i=1;i<elements.length;i++){
                var element = elements[i]
                if(element.textContent !== undefined){
                    result.push(element.textContent)
                }else if(element.innerText !== undefined){  // IE
                    result.push(element.innerText)
                }
            }
            return result
        }else{
            for(var i=0;i<elements.length;i++){
                var element = elements[i]
                if(element.textContent !== undefined){
                    element.textContent = string
                }else if(element.innerText !== undefined){  // IE
                    element.innerText = string
                }
            }
            return elements
        }        
    }
    elements.html = function (htmlString) {
        if(htmlString === undefined){
            var result = []
            for(var i=1;i<elements.length;i++){
                var element = elements[i]
                result.push(element.innerHTML)
            }
            return result
        }else{
            for(var i=0;i<elements.length;i++){
                var element = elements[i]
                element.innerHTML = htmlString
            }
            return elements
        }
    }
    elements.appendText = function (string) {
        if(string === undefined){
            var result = []
            for(var i=1;i<elements.length;i++){
                var element = elements[i]
                if(element.textContent !== undefined){
                    result.push(element.textContent)
                }else if(element.innerText !== undefined){  // IE
                    result.push(element.innerText)
                }
            }
            return result
        }else{
            for(var i=0;i<elements.length;i++){
                var element = elements[i]
                if(element.textContent !== undefined){
                    element.textContent += string
                }else if(element.innerText !== undefined){  // IE
                    element.innerText += string
                }
            }
            return elements
        }
    }
    elements.get = function (index) {
        return elements[index]
    }
    elements.siblings = function () {
        var result = []
        for(var i=0;i<elements.length;i++){
            var element = elements[i]
            var children = element.parentNode.children
            for(var j=0;j<children.length;j++){
                if(children[j] !== element){
                    result.push(children[j])
                }
            }
        }
        result = $(result)
        return result
    }
    elements.css = function (name,css) {
        for(var i=0;i<elements.length;i++){
            var element = elements[i]
            element.style[name] = css
        }
        return elements
    }
    elements.attr = function (name,attr) {
        for(var i=0;i<elements.length;i++){
            var element = elements[i]
            element.setAttribute(name,attr)
        }
        return elements
    }
    return elements
}

var items = $('li')

items.on('click', function(){
    console.log('click')
})

items.addClass('hi').on('dblclick', function(){
    console.log('dbclick')
}).removeClass('hi').addClass('hello').addClass('frank').addClass('jack')

items.text('<p>你好</p>')
console.log(items.text())

items.css('border', '1px solid red')
items.attr('name', 'frank')
items.html('<p>你好</p>')
items[0].style.border='1px solid red'
items.get(1).style.border = '1px solid blue'

var item = $(items[1])
item.siblings().addClass('s')