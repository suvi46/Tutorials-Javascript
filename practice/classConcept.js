class car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  refuel() {
    console.log("car is refueled");
  }
}
const c1 = new car("BMW", "C1029", 2000); //new object with object reference varible c1
console.log(c1.price + ": : " + c1.model + ": ");
console.log(c1);
const c2 = new car("audi", "d29", 4000); //new object with object reference varible c2
