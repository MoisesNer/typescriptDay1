//It has to be in capital leters. It is creating a type
interface Vehicle{
    name:string; 
    year:number;
    broken:boolean;
    // engine: string;
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

//you apply here the type Vehicle
const printVehicle = (vehicle: Vehicle):void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.sumary());
    
}
printVehicle(oldCivic)