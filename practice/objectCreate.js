//1. object literals:{}

const user = { name: "test1", age: 30, city: "Mumbai", occupation: "Engineer" };
console.log(user.city);
console.log(user.occupation);

//2. Constructor function
function car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
const c1 = new car("BMW", "120d", 2000);
const c2 = new car("Audi", "90d", 4000);

console.log(c1.brand + "\n" + c1.model + "\n" + c1.price);
console.log(c2.brand + "\n" + c2.model + "\n" + c2.price);

//3. Class Style
class Customer {
  constructor(name, product) {
    this.name = name; //instance variable
    this.product = product;
  } //special method constructor is used to create and initialize an object when a class is instantiated
  addtocart() {
    console.log(`this product ${this.product} added to cart`);
  }
}
//instance of class
const cust1 = new Customer("suvi", "cosmetics");
console.log(cust1.name);
console.log(cust1.product);
cust1.addtocart();

//4. object.create method

const employeePrototype = {
  printInfo: function () {
    console.log(`this is employee data: ${this.name}`);
  },
};

const e1 = Object.create(employeePrototype);
console.log((e1.name = "tom"));
e1.printInfo();
//5. using factory functions: returns an object

function createDepartment(deptName, hodName) {
  return {
    deptName: deptName,
    hodName: hodName,
    // we can add function also inside this
    printInfo: function () {
      console.log(`hello this is ${deptName}`);
    },
  };
}
const dept1 = createDepartment("physics", "suvi t");
console.log(dept1.deptName);
const dept2 = createDepartment("chemistry", "hod2");
console.log(dept2.deptName + " " + dept2.hodName);
dept1.printInfo();
dept2.printInfo();
console.log(dept1.deptName + " " + dept1.hodName);
