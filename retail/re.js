let myArr = [
    {
        price:3000,
        qunatity:2
    },
    {
        price:4000,
        qunatity:1
    },
    {
        price:200,
        quantity:10
    }
]
let result =  Array.from(myArr)
for(let i in result){
    let res1 = result[i]
    console.log(res1[0])
}
// console.log(result[0])