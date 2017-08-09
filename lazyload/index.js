let loadingImage = new Image()
loadingImage.src = 'https://i.loli.net/2017/08/09/598b2ac3c6381.gif'

let list = document.querySelector('#list')
let n =1 
let button = document.querySelector('#loadMoreButton')
let hasNext = true
let loading = false
function load(){
    if(loading){return}
    if(!hasNext){return}
    let request = new XMLHttpRequest()
    request.open('GET',`./page-${n+1}.html`)
    request.onerror = function(){
        loading = false
    }
    request.onload = function(){
        loading = false
        n = n + 1
        let response = request.responseText
        let data = window.JSON.parse(response)
        for(let i=0;i<data.content.length;i++){
            let liString = `
                <li>
                    <img src="https://i.loli.net/2017/08/09/598b2ac3c6381.gif" data-xxx="${data.content[i].url}">
                    <h3>"${data.content[i].text}"</h3>
                </li>
            `
            list.insertAdjacentHTML('beforeend',liString)
        }
        if(data.hasNextPage === false){
            hasNext = false
            button.textContent = '没有下一页了'
            button.onclick = function(){
                alert('真的没有了')
            }
        }
    }
    loading = true
    request.send()
}
button.onclick = load


window.onscroll = function(){
    if(enterViewport(loadMoreButton)){
        if(button.textContent === '加载更多'){
            load()
        }
    }
    let imgs = document.querySelectorAll("img[data-xxx]")
    for(var i=0;i<imgs.length;i++){
        if(enterViewport(imgs[i])){
                imgs[i].src = imgs[i].getAttribute('data-xxx')
                imgs[i].removeAttribute('data-xxx')
        }
    }


}







function enterViewport(element) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var clientHeight = doc.clientHeight
    var viewportOffset = element.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var toTop = viewportOffset.top;
    if(clientHeight - toTop > 100){
        return true
    }else {
        return false
    }
}


