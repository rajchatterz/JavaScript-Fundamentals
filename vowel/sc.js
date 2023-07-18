function vc(user){
    let count = 0
    let vowel = 'AaeEiIOoUu'
    for(let i in user){
        if(vowel.indexOf(user[i])!==1){
            count=count+1
        }
    }
    return count
}
let user = prompt("Enter the name")
console.log("the number of vowel in the name is ",vc(user))