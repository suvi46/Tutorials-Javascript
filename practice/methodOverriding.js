class Car {
  minSpeed = 100;
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  drive() {
    console.log(this.name + " is driving");
  }
}
class Audi extends Car {
  //minSpeed = 200;

  constructor(name, model, price, brand) {
    super(name, model, price);
    this.brand = brand;
  }
  drive() {
    console.log(this.name + " is driving safely");
  }
}
const c1 = new Car("testname", "testmodel", 1200);
console.log(c1.name);
const audi1 = new Audi("audi1", "audiModel", 1900, "audibrand");
console.log(audi1);
audi1.drive();
console.log(audi1.minSpeed);

const audi = new Audi();
console.log(audi.minSpeed);
