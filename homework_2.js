// task 2a
let b = prompt("Please enter a number", false);
console.log(b > 0 && (b%2) == 0);

// task 2b
let b = prompt("Please enter a number", false);
console.log(b%7 == 0);

//what is better here "===" or "==" ?


//task 3
let newArray = [];
newArray.push("Nikki")
newArray.push(70);
newArray.push(true);
newArray.push(null);

console.log(newArray);

newArray.push(prompt("Gimme a number", 0));

console.log(newArray[4]);

newArray.shift();

console.log(newArray);

//task 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join("*"));

//task 5 first option
let isAdult = prompt("Please enter your age", "0");
if (isAdult >= 18) {
	console.log("You are adult!");
} else if (isAdult >= 65) {
	console.log("Man, i would think twice before jumping with parachoute");
} else {
	console.log("Sorry, you are too young")
}

// task 5 another 
let isAdult = prompt("Please enter your age", "0");

switch (true) {
	case isAdult < 0:
		console.log("You are in plans mate)");
		break;
	case isAdult == 0:
		console.log("Hello, World!");
		break;
	case isAdult < 18:
		console.log("Sorry, you are too young");
		break;
	case isAdult > 34: 
		console,log("I would ask you to think about the cildren if you have none");
		break;
	case isAdult >= 65:
		console.log("Man, i would think twice before jumping with parachoute");
		break;
	case isAdult >= 130:
		console.log("Have you tested yourself for beeing a vampire?");
		break;
	default:
    	console.log("You must have entered NaN");
}

// Task 6

let sideA = Number(prompt ("Please Enter first side of triangular", 0));
let sideB = Number(prompt ("Please Enter second side of triangular", 0));
let sideC = Number(prompt ("Please Enter third side of triangular", 0));
const halfPerimetr = (sideA + sideB + sideC)/2;
const incorrectData = (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)
	|| sideA <= 0 || sideB <= 0 || sideC <= 0
	|| halfPerimetr <= sideA || halfPerimetr <= sideB || halfPerimetr <= sideC);

if (incorrectData === true) {
	console.log ("Incorrect Data");
}
else {
	const area = Math.sqrt(halfPerimetr * (halfPerimetr - sideA) * (halfPerimetr - sideB) * (halfPerimetr - sideC));
	console.log(Math.round(area*1000)/1000);
	const isNinety = (sideA ** 2 == sideB ** 2 + sideC ** 2) || (sideB ** 2 == sideA ** 2 + sideC ** 2) || (sideC ** 2 == sideA ** 2 + sideB ** 2);
	console.log (isNinety);
}

// Task 7

let now = new Date() - (1 Ja);
let seconds = 


