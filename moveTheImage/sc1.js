const image = document.querySelector('img')
let move = 5
window.addEventListener("load",()=>{
    image.style.position='absolute'
    image.style.top=0
    image.style.left=0
})
window.addEventListener("keydown",(d)=>{
    switch(d.key){
        case 'ArrowLeft':
            image.style.left=parseInt(image.style.left)-move+"px"
            break
        case 'ArrowRight':
            image.style.left=parseInt(image.style.left)+move+"px"
            break
        case 'ArrowUp':
            image.style.top=parseInt(image.style.top)-move+"px"
            break
        case 'ArrowDown':
            image.style.top=parseInt(image.style.top)+move+"px"
            break
    }
})