let col1 = prompt("Enter the first color small letter\n")
let col2 = prompt("Eter the second color small letter\n")
if(col1=='red' && col2 == 'blue'){
    console.log('purple')
}else if(col1=='blue' && col2 == 'red'){
    console.log('purple')
}else if(col1=='red' && col2 == 'yellow'){
    console.log('orange')
}else if(col1=='yellow' && col2 == 'red'){
    console.log('orange')
}else if(col1=='blue' && col2 == 'yellow'){
    console.log('green')
}else if(col1=='yellow' && col2 == 'blue'){
    console.log('green')
}else{
    console.log("Invalid color com#ination")

}