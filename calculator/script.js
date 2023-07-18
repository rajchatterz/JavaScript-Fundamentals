let num1 = prompt("Enter the first number\n")
let num2 = prompt("Eter the second number\n")
let op = prompt("Enter the opeation you wanted to make ")

switch(op){
    case "+":
        console.log(num1+num2)
        break;
    case "-":
        console.log(num1-num2)
        break;
    case "*":
        console.log(num1*num2)
        break;
    case "/":
        console.log(num1/num2)
        break;
}
