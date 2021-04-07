let apples: number;
apples = 5

// with json
const json = '{"x": 10, "y":20}'
const coordinates:{x:number, y:number} = JSON.parse(json)

console.log(coordinates);

let colors = ['pink', 'yellow', 'red', 'blue', 'mario']
let favColor: boolean;

for(let m = 0; m < colors.length; m++){
    if(colors[m] === 'mario'){
        favColor = true
    }
}
console.log(favColor);


let numbers = [-11, -5, -60, -99]
let numberAboveZero: boolean | number = false

for(let m = 0; m < numbers.length; m++){
    if(numbers[m] < 0){
        numberAboveZero = numbers[m]
    }
}
