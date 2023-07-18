const submit = document.getElementById('sub')

submit.addEventListener("click",()=>{
    const mail = document.getElementById('mail').value
    const password = document.getElementById('pass').value
    if((mail.includes('@')) && (password.length>8)) {
        console.log('done')
        document.getElementById('mail').style.borderColor='black'
        document.getElementById('pass').style.borderColor='black'
    }else{
        alert("you have entered a invalid email or password")
        document.getElementById('mail').style.borderColor='red'
        document.getElementById('pass').style.borderColor='red'
    }
    
})