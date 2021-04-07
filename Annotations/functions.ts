//here the function is specified to be a number, thats why is marked an error
const add = (a:number, b:number):number =>{
    // return a+b + '10'
    return a+b
}

add(2,3)

//the following error is becase a void shouldn't return any value
const logger = (message: string):void =>{
    console.log(message);
    
    // return message + !!!
}

logger('Hello Wawi!!')


const throwError = (message:string):void => {
    if(!message){
        throw new Error(message)
    }
}
throwError('test')

const todaysWeather = {
    date: new Date(),
    weather: 'rainy'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void =>{
    console.log(date);
    console.log(weather);
    
    
}

logWeather(todaysWeather)