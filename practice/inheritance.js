class Automobile {
  constructor(chasisNumber) {
    this.chasisNumber = chasisNumber;
  }
  useAeroDynamic() {
    console.log("automobile");
  }
}
class Vehicle extends Automobile {
  constructor(chasisNumber, brand, model, year) {
    super(chasisNumber);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return `${this.brand},${this.model},${this.year}`;
  }
  startEngine() {
    console.log("start vehicle");
  }
  stopEngine() {
    console.log("stop vehicle");
  }
}
//child class
class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    super(brand, model, year);
    this.fuelType = fuelType;
  }
  driveCar() {
    console.log("drive a car" + this.model);
  }
}
//child class2
class Truck extends Vehicle {
  constructor(brand, model, year, loadCapacity) {
    super(brand, model, year);
    this.loadCapacity = loadCapacity;
  }
  driveTruck() {
    console.log("drive a truck" + this.model + " and " + this.loadCapacity);
  }
}
//object created
const c1 = new Car("Tata", "Nexon", 2020, "cng+Petrol");
const c2 = new Truck("Hy", "N1212", 2018, "20000kg");

console.log(c1.model);
console.log(c1.getInfo());
c1.startEngine();
c1.stopEngine();
c1.useAeroDynamic();
console.log(c2.loadCapacity);
console.log(c2.getInfo());
c2.startEngine();
c2.stopEngine();

c1.driveCar();

//parent class can hav en number of child class

// we can inherit parent class properties in all child class
// also we can add more properties in child classes
//multiple inheritance is not allowed. only one parent class is allowed

//multilevel inheritance
