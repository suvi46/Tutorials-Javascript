class car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  refuel() {
    console.log(this.name + "car is refueled");
  }
}
const c1 = new car("BMW", "C1029", 2000); //new object with object reference varible c1
console.log(c1.price + ": : " + c1.model + ": ");
console.log(c1);
c1.refuel();
const c2 = new car("audi", "d29", 4000); //new object with object reference varible c2
c2.refuel();

// note: class may have only one constructor.can not overload constructor
