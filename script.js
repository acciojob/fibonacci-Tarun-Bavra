function fibonacci(num) {
// your code here
	let fistTerm = 0;
	let secondTerm = 1;
	let x = fistTerm+secondTerm;//1
	for (let i = 0; i < num; i++) {
		x = fistTerm+secondTerm;//1
		firstTerm = secondTerm;
		secondTerm=x;
	}
	console.log(x);
	
}

module.exports = fibonacci;
