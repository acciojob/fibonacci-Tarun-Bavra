function fibonacci(num) {
// your code here
	let fistTerm = 0;
	let secondTerm = 1;
     let numthTerm;
	for (let i = 0; i < num; i++) {
		numthTerm = fistTerm+secondTerm;
		firstTerm = secondTerm;
		secondTerm=numthTerm;
	}
	retun numthTerm;
	
}

module.exports = fibonacci;
