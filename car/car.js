
let day = prompt("Enter the no of days you wanted to rent a car")
day=Number.parseInt(day)
function rent() {
    let typeOfCar = prompt("Choose the type of the car you wanted to rent")
    if(typeOfCar=='Economy'){
        return 4000
    }else if(typeOfCar=='Midsize'){
        return 10000

    }else if(typeOfCar=='luxary'){
        return 20000
    }else{
        console.log('none')
    }
}
let result = day*rent()
console.log(result)