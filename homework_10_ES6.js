// Task 1

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


// Task 2

let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let [,name2,,name4] = data.names;
let [,age2,,age4] = data.ages;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// Task 3

function mul(...rest) {
  if (rest.some((x) => typeof x === "number")) {
    let args = [];
    for (let value of rest) {
      if (typeof value === "number") {
        args.push(value);
      }
    }
    return args.reduce((prev, next) => prev * next);
  } else {
    return 0;
  }
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


// Task 5
const keys = [1,2,3,4];
const values = ['div', 'span', 'b', 'i']

function mapBuilder(keys, values) {
   const map = new Map();
   for (let i of keys) {
      map.set(i, values[i-1]);
   }
   return map;
}

const map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
