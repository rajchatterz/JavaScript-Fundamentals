const btn = document.getElementById('btn')
btn.addEventListener("click",()=>{
    let list = document.getElementById('list')
    let inp = document.getElementById('inp')
    let text = inp.value
    let newDiv = document.createElement("div")
    newDiv.textContent=text
    list.appendChild(newDiv)
    
})
