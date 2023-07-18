
const sub = document.getElementById('sub')

sub.addEventListener("click",()=>{
    let inp = document.getElementById('input').value
    let out = document.getElementById('output').value
    if(inp==out){
        console.log("password match")
    }else if(inp!=out){
        console.log("password didn't match")
    }else{
        console.log("done")
    }
})