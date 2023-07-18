let cost = prompt("cost of the dish")
let num1=prompt("number of the dish")
let ppl = prompt("Number of the people sharing it")
let total = cost*num1
let res1 = (cost*num1)/ppl
let div = res1/ppl
console.log(res1)
class totalBill{
  constructor(r,d){
    this.total=r
    this.per=d
  }
}
const bill = new totalBill(total,res1)
console.log(bill)