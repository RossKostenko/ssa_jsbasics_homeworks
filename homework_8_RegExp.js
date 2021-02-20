// Task 1 works

function upperCase(str) {
	return /^[A-Z]/.test(str)
}

upperCase('a');
upperCase('Aa');
upperCase('aA');

// Task 2 works

function checkMail(str) {
	let mailPattern = /^[\w-\.]+@+[\w-]+\.+\w{2,4}/;
	return mailPattern.test(str);
}
checkMail('iamhere@gmail.com');

// Task 3 works
