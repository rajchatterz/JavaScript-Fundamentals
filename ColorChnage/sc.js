let button = document.getElementById('btn')

button.addEventListener("click",changeColor)
function buttin(){
    let hash = '#'
    let color = '0123456789abcdef'
    for(let i =0;i<6;i++){
        hash=hash+color[Math.floor(Math.random()*16)]
    }
    return hash
}

function changeColor(){
    document.body.style.backgroundColor=buttin()
}

