// Task 1

function calcRectangleArea() {
  const width = prompt("Please enter first side of rectanguar", 0);
  const height = prompt("Please enter second side of rectanguar", 0);
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Sorry, you have entered not a number ");
  } else if (width <= 0 || height <= 0) {
    throw new Error("Sorry, you have entered invalid number");
  } else return width * height;
}
try {
  let result = calcRectangleArea();
  console.log(result);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}

// Task 2

function checkAge() {
  const isAdult = prompt("Please enter your age", "");
  switch (true) {
    case isNaN(isAdult) === true:
      throw new Error("Sorry, you have entered not a number");
      break;
    case isAdult == "":
      throw new Error("Sorry, you have entered nothing");
      break;
    case isAdult > 0 && isAdult < 14:
      throw new Error("Sorry, you are underaged");
      break;
    case isAdult <= 0:
      throw new Error("Sorry, you have entered invalid number");
      break;
    default:
      alert("Get your popcorn, you are welcome to watch the movie");
  }
}
try {
  checkAge();
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
}

// Task 3

const MonthException = {
  name: "MonthException",
  message: "Sorry, you have entered invalid number",
};

function showMonthName(monthNumber) {
  switch (true) {
    case monthNumber == 1:
      return "January";
      break;
    case monthNumber == 2:
      return "February";
      break;
    case monthNumber == 3:
      return "March";
      break;
    case monthNumber == 4:
      return "April";
      break;
    case monthNumber == 5:
      return "May";
      break;
    case monthNumber == 6:
      return "June";
      break;
    case monthNumber == 7:
      return "July";
      break;
    case monthNumber == 8:
      return "August";
      break;
    case monthNumber == 9:
      return "September";
      break;
    case monthNumber == 10:
      return "October";
      break;
    case monthNumber == 11:
      return "November";
      break;
    case monthNumber == 12:
      return "December";
      break;
    case monthNumber > 12 || monthNumber <= 0:
      throw MonthException;
      break;
    default:
      throw new Error("Unknown Error");
  }
}
try {
  console.log(showMonthName(5));
} catch (MonthException) {
  console.log(MonthException.name);
  console.log(MonthException.message);
}
try {
  console.log(showMonthName(-14));
} catch (exception) {
  console.log(MonthException.name);
  console.log(MonthException.message);
}

// Task 4 without showUser function

function showUsers(ids) {
  var err;
  let wrightIds = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] > 0) {
      wrightIds.push(ids[i]);
    } else {
      err = 1;
    }
  }
  console.log(wrightIds);
  if (err === 1) {
    throw new Error("Sorry, you have entered invalid number");
  }
}
try {
  showUsers([7, -12, 44, 22]);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
}
