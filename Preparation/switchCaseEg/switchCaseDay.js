function getDay(daynumber) {
  const today = new Date();
  const day = today.getDay();
  console.log("s" + day);

  switch (daynumber) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
  }
}

console.log(getDay(2));
