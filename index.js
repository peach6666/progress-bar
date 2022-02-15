var price=document.getElementById('price')
var progress=document.getElementById('progress')
var text=document.getElementById('progress-text')

function progressFuc(){
    text.innerHTML=progress.value+"顆"
    let ethPrice=progress.value*0.1
    price.innerHTML="Price:"+ethPrice.toFixed(1)+"ETH"
}
window.onload=()=>{
    progressFuc()
}

progress.onmousedown=()=>{
    progressFuc()
    progress.onmousemove=()=>{
        progressFuc()
    }
    progress.onmouseup=()=>{
        progressFuc()
    }
}

progress.addEventListener('touchstart',()=>{
    progressFuc()
    progress.addEventListener('touchmove',()=>{
        progressFuc()
    })
    progress.addEventListener('touchend',()=>{
        progressFuc()
    })
})