class bank{
    constructor(n,b){
        this.name = n;
        this.balance = b;
    }
}
let bal = prompt('Enter the amount you want to withdrawl')
bal = Number.parseInt(bal)
const p = new bank("raj",400000-bal)
console.log(p)