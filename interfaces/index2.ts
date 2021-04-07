//It has to be in capital leters. It is creating a type
interface Reportable{
    sumary(): string;
}


const oldCivic = {
    name: 'civic SIR',
    year: 2010,
    broken: true,
    sumary(): string{
        return `Name ${this.name}`
    }

}


const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40,
    sumary(): string {
        return `my Drink has ${this.sugar} grams of sugar`
    }
}


const printSumary = (item: Reportable):void => {
    console.log(item.sumary());
    
}
// Using in both objects
printSumary(oldCivic)
printSumary(drink)