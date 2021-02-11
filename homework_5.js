//Task 1 - works

function propsCount(currentObject) {
  let count = 0;
  for (let i in currentObject) {
    count += 1;
  }
  return count;
}
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
console.log(propsCount(mentor)); // 3

// Task 2 - works

function showParametrs(currentObject) {
  const parametrsArray = [];
  for (let parametr in currentObject) {
    parametrsArray.push(parametr);
  }
  return parametrsArray;
}
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
console.log(showParametrs(mentor));

// Task 3 - works

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.surname + " " + this.name;
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(secondName) {
    return this.surname + " " + this.name + " " + secondName;
  }
  showCourse() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6

// Task 4 - need to work with

// !!!!!!!!!   Attention Dont start all tasks together
class Worker {
	constructor (fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
		this._setExp = 1;
	}
	showSalary() {
		return this.fullName + ': ' + this.dayRate * this.workingDays;
	}
	showSalaryWithExperience() {
		return this.dayRate * this.workingDays * this._setExp;
	}
	set setExp(setExp){
		this._setExp = setExp;
	}
	get showExp() {
		return this.setExp;
	}
}


// Stage 1
let worker1 = new Worker("John Johnson", 20, 23); 
console.log(worker1.fullName); // John Johnson                 
worker1.showSalary(); // John Johnson salary: 460
// Stage 2
worker1.setExp = 1.2; 
console.log("New experience: " + worker1.showExp); // New experience: 1.2
worker1.showSalaryWithExperience(); // John Johnson salary: 552
// Stage 3
worker1.setExp = 1.5; 
console.log("New experience: " + worker1.showExp); // New experience: 1.5
worker1.showSalaryWithExperience(); // John Johnson salary: 690
// Stage 4
let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5;
let worker3 = new Worker("Andy Ander", 29, 23);
worker1.setExp = 1.5;
sortSalary();

// Task 5 - works

class GeometricFigure {
  constructor(sideA) {
    this.sideA = sideA;
  }
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure {
  constructor(sideA, sideB) {
    super(sideA);
    this.sideB = sideB;
  }
  getArea() {
    return (this.sideA * this.sideB) / 2;
  }
}
class Square extends GeometricFigure {
  constructor(sideA) {
    super(sideA);
  }
  getArea() {
    return this.sideA ** 2;
  }
}
class Circle extends GeometricFigure {
  constructor(sideA) {
    super(sideA);
  }
  getArea() {
    return Math.PI * this.sideA ** 2;
  }
}
function handleFigures(figures) {
  var string = "";
  var totalArea = 0;
  for (let i = 0; i < figures.length; i++) {
    let name = figures[i].toString();
    let area = figures[i].getArea();
    totalArea = totalArea + area;
    string = string + "Geometric figure: " + name + " - area: " + area + "\n";
  }
  return string + "Total Area: " + totalArea;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

console.log(handleFigures(figures));

// Приклад результату:
// Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area


// Task 4 with sort
class Worker {
	constructor (fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
		this._setExp = 1;
	}
	showSalary() {
		return this.fullName + ': ' + this.dayRate * this.workingDays;
	}
	showSalaryWithExperience() {
		return this.dayRate * this.workingDays * this._setExp;
	}
	set setExp(setExp){
		this._setExp = setExp;
	}
	get showExp() {
		return this.setExp;
	}
}

let worker1 = new Worker("John Johnson", 20, 23); 
worker1.setExp = 1.5; 
let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5; 
let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5; 

const workers = [worker1, worker2, worker3];
let sortedWorkers = workers.sort(function (a, b) {
  return a.showSalaryWithExperience() - b.showSalaryWithExperience();
});

function sortedListString(arr) {
	let resultString = `Sorted salary:\n`
	for (let i = 0; i < arr.length; i++) {
		resultString += `${arr[i].fullName}: ${arr[i].showSalaryWithExperience()}\n`
	}
	alert(resultString);
}
sortedListString(workers);
