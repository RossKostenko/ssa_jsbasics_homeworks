// Task 1 works

function upperCase(str) {
  return /^[A-Z]/.test(str);
}

upperCase("a");
upperCase("Aa");
upperCase("aA");

// Task 2 works

function checkMail(str) {
  let mailPattern = /^[\w-\.]+@[\w-]+\.\w{2,4}/;
  return mailPattern.test(str);
}
checkMail("iamhere@gmail.com");

// Task 3 works

function findD(str) {
  let resultOne = str.match(/db+d/gi)[0];
  let resultTwo = resultOne.match(/b+d/gi)[0];
  let resultThree = resultTwo.match(/d/i)[0];
  return [resultOne, resultTwo, resultThree];
}
findD("cdbBdbsbz");

;

// Task 3 readable

function findD(str) {
  resultOne = str.match(/db+d/gi)[0];
  resultTwo = str.match(/(?<=d)b+d/gi)[0];
  resultThree = str.match(/(?<=db+)d/gi)[0];
  return [resultOne, resultTwo, resultThree];
}
findD("cdbBdbsbz");

// Task 3 short

function findD(str) {
  return [
    str.match(/db+d/gi)[0],
    str.match(/(?<=d)b+d/gi)[0],
    str.match(/(?<=db+)d/gi)[0],
  ];
}
findD("cdbBdbsbz");

// Task 4 split and match

function switchPlaces(str) {
  let strToArray = str.split(" ");
  let newStrArray = [strToArray[1], strToArray[0]];
  return newStrArray.join(",");
}
switchPlaces("Java Script");

function switchPlaces(str) {
  return `${str.split(" ")[1]},${str.split(" ")[0]}`;
}
switchPlaces("Java Script");

function switchPlaces(str) {
  return `${str.match(/\w+/gi)[1]},${str.match(/\w+/gi)[0]}`;
}
switchPlaces("Java Script");

function switchPlaces(str) {
	 return str.replace(/(\w+)\s(\w+)/, '$2, $1');
}
switchPlaces("Java Script");

// Task 5 works

function validateCreditCard(card) {
  return /(\d{4}-){3}\d{4}/.test(card);
}
validateCreditCard("9999-9999-9999-9999");

// Task 6 works
function secondMailPattern(str) {
  let regExp = /^[0-9A-Za-z]+[-{1}]?[0-9A-Za-z_]+@[\w-]+\.\w{2,4}/;
  return regExp.test(str) ? "Email is correct" : "Email is not correct";
}
secondMailPattern("my_mail@gmail.com");

// Task 7 having issues
function checkLogin(str) {
  let regExp = /[a-z0-9\.](! \*){2,10}/gi;
  let number = /[0-9]+\.?[0-9]*/g;
  return [regExp.test(str), str.match(number)];
}

checkLogin("ee1.10ret3");
checkLogin("ee1*1ret3");
