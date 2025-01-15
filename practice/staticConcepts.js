class Car {
  static wheels = 4;
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.wheels = 50;
  }
  static stop() {
    console.log("car stopped");
  }
  drive() {
    console.log(this.name + " is driving");
  }
}
const c1 = new Car("a", "b", 2000);
console.log(c1);
console.log(`${c1.wheels}`); //50

console.log(`${Car.wheels}`); //4 static value

//c1.stop();//error
Car.stop();
c1.drive();
//static variable/function : call it by class name
//instance variable/function : call it by object name
