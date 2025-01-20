//With promises, we can chain asynchronous operations together and use “then” and “catch” methods to make the code more readable
function startCoffeeMachine() {
  return new Promise((resolve) => {
    console.log("starting coffee machine");
    setTimeout(() => {
      console.log("coffee machine is ready");
      resolve("coffee machine is now ready");
    }, 2000);
  });
}

function grindCoffeeBeans() {
  return new Promise((resolve) => {
    console.log("start Grinding coffee beans");
    setTimeout(() => {
      console.log("Grind coffee beans in machine");
      resolve("Grind coffee beans in machine");
    }, 1000);
  });
}

function boilWater() {
  return new Promise((resolve) => {
    console.log("start boiling water");
    setTimeout(() => {
      console.log("boil water for coffee");
      resolve("boil water for coffee");
    }, 1500);
  });
}

function pourBoilingWaterIntoCup(boiledWater) {
  return new Promise((resolve) => {
    console.log("Pour boiled Water");
    setTimeout(() => {
      console.log("Pour boiled Water in cup");
      resolve(boiledWater + " Pour boiled Water in cup");
    }, 100);
  });
}

function addCoffeeToCup(groundcoffee) {
  return new Promise((resolve) => {
    console.log("Add grid coffee in cup");
    setTimeout(() => {
      console.log("Add grid coffee in cup");
      resolve(groundcoffee + " Add grid coffee in cup");
    }, 200);
  });
}

function stirCoffee(coffeeInCup) {
  return new Promise((resolve) => {
    console.log("Stir coffee");
    setTimeout(() => {
      console.log("Stirred coffee");
      resolve(coffeeInCup + " Stirred coffee");
    }, 300);
  });
}

function enjoyCoffee(finalCoffee) {
  return new Promise((resolve) => {
    console.log("Enjoy your coffee! Have a great day. " + finalCoffee);
    resolve("Coffee enjoyed successfully!");
  });
}

// Promise chaining
startCoffeeMachine()
  .then((coffeeMachineStatus) => {
    console.log(coffeeMachineStatus);
    return grindCoffeeBeans();
  })
  .then((groundCoffee) => {
    console.log(groundCoffee);
    return boilWater();
  })
  .then((boiledWater) => {
    console.log(boiledWater);
    return pourBoilingWaterIntoCup(boiledWater);
  })
  .then((waterInCup) => {
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
  })
  .then((coffeeInCup) => {
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
  })
  .then((finalCoffee) => {
    console.log(finalCoffee);
    return enjoyCoffee(finalCoffee);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error, "could not make coffee successfully");
  });
