// Task 2

for (let i = 0; i<=15; i++) {
	if (i === 0) {
		console.log(i + " is zero");
	} else if (i%2 === 0) { 
		console.log(i + " is even");
	} else {
		console.log(i + " is odd");
	}
}

// Task 3

let k = [];

function randarray(a) {
	for (let i = 0; i < a; i++) {
		k.push(Math.floor(Math.random()*500));
	}
}

randarray(5);

console.log(k);

//Task 4;

const a = + prompt("Please enter an integer", 0);
const b = + prompt("Please enter an integer", 0);

if (Number.isInteger(a) && Number.isInteger(b)) {
	function raiseToDegree(a, b) {
		let c = a ** b;
		console.log(c);
	}
	raiseToDegree(a, b);
} else {
	console.log("Sorry, you have entered not an Integer");
}

//Task 5a

function findMin() {
	let minimum = arguments[0]; 
	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < minimum) {
			minimum = arguments[i];
		}
	}
    console.log(minimum);
}


findMin(12, 14, 4, -4, 0.2);

// Task 6 - не працює

function findUnique(arr) {
	for (count = 0; count < arr.length - 1 ; count++) {
		let argument = arr[count];
		for (let i = 1; i < arr.length;  i++) {
			if (argument === arr[i]) {
				console.log(false);
				break;
			} else {
				console.log(true);
			}
		}
	}
}

findUnique([1, 2, 3, 5, 3]);  
findUnique([1 2, 3, 5, 11]);

// Task 7 

function lastElem(array, iterration) {
	let result = [];
	if (iterration === undefined ) {
        iterration = 1;
    }
	if (iterration >= array.length) {
		result = array;
	} else {
		for (let i = array.length - iterration; i < array.length; i++) {
			result.push(array[i]);
		} 
	} return result
	
} 
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5],2));  
console.log(lastElem([3, 4, 10, -5],8));

// Task 8 

const string = prompt("Enter a sentance please", "you should have entered a sentanse");
console.log(string[0].toUpperCase() + string.slice(1));

