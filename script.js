function makeid(l) {
  // write your code here
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabodefghijklmnopqrstuvwxyz0123456789";
	let result = '';
	for (let i = 0; i < 1; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
