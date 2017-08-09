let list = document.querySelector('#list')
let n =1 
let button = document.querySelector('#loadMoreButton')
function load(){
    let request = new XMLHttpRequest()
    request.open('GET',`./page-${n+1}.html`)
    request.onload = function(){
        n = n+1
        let response = request.responseText
        let data = window.JSON.parse(response)
        for(let i=0;i<data.content.length;i++){
            let liString = `
                <li>
                    <img src="${data.content[i].url}">
                    <h3>"${data.content[i].text}"</h3>
                </li>
            `
            list.insertAdjacentHTML('beforeend',liString)
        }
        if(data.hasNextPage === false){
            button.textContent = '没有下一页了'
            button.onclick = function(){
                alert('真的没有了')
            }
        }
    }
    request.send()
}
button.onclick = load


window.onscroll = function(){
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var clientHeight = doc.clientHeight
    var viewportOffset = button.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var buttonTop = viewportOffset.top;
    console.log(clientHeight - buttonTop)
    if(Math.ceil(clientHeight - buttonTop) === 104){
        if(button.textContent === '加载更多'){
            load()
        }
    }
}
