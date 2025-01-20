//Callback hell in Javascript occurs when multiple callbacks are nested inside each other, leads to create a complex and hard-to-manage code.
//Make Coffee with Callback Hell Example || Why to avoid this callback hell in Javascript
//steps:
//1: start coffee machine
//2: grind coffee beans
//3: boil water
//4: pour boiling water into cup
//5.:add grind coffee to cup
//6.:stir the coffee
//7.:enjoy your coffee

function startCoffeeMachine(callback) {
  console.log("starting coffeemachine");
  setTimeout(() => {
    console.log("coffee machine is ready");
    callback("coffee machine is ready");
  }, 2000);
}

function gridCoffeeBeans(callback) {
  console.log("start Grinding coffee beans");
  setTimeout(() => {
    console.log("Grind coffee beans in machine");
    callback("Grind coffee beans in machine");
  }, 1000);
}
function boilWater(callback) {
  console.log("start boiling water");
  setTimeout(() => {
    console.log("boil water for coffee");
    callback("boil water for coffee");
  }, 1500);
}
function pourBoilWater(boiledWater, callback) {
  console.log("Pour boiled Water");
  setTimeout(() => {
    console.log("Pour boiled Water in cup");
    callback(boiledWater + "Pour boiled Water in cup");
  });
}
function addGrindCoffee(grindcoffee, callback) {
  console.log("Add grid coffee in cup");
  setTimeout(() => {
    console.log("Add grid coffee in cup");
    callback(grindcoffee, "Add grid coffee in cup");
  });
}
function stirCoffee(coffeeincup, callback) {
  console.log("Stir coffee");
  setTimeout(() => {
    console.log("Stir coffee");
    callback(coffeeincup + "Stir coffee");
  });
}
function enjoyCoffee(finalcoffee, callback) {
  console.log("Enjoy your coffee!Have a great day.");
  setTimeout(() => {
    console.log("Enjoy your coffee!");
    callback(finalcoffee + "Enjoy your coffee!");
  });
}

//callback hell:
startCoffeeMachine(function (coffeeMachineStatus) {
  gridCoffeeBeans(function (groundCoffee) {
    boilWater(function (boiledWater) {
      pourBoilWater(boiledWater, function (waterInCup) {
        addGrindCoffee(groundCoffee, function (coffeeincup) {
          stirCoffee(coffeeincup, function (stirredCoffee) {
            console.log(stirredCoffee);
            enjoyCoffee(stirredCoffee, function (finalCoffee) {
              console.log(finalCoffee);
            });
          });
        });
      });
    });
  });
});
