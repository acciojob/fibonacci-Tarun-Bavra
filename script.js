function fibonacci(num) {
// your code here
	let fistTerm = 0;
	let secondTerm = 1;
     let numthTerm;//let num=3
	for (let i = 0; i < num; i++) {//f=1;s=1
		numthTerm = fistTerm+secondTerm;//num=1,f=1,s=1--1st loop
		firstTerm = secondTerm;//num=2,f=1,s=2--2nd lopp
		secondTerm=numthTerm;//num=3,f=2,s=3--3rd loop
	}                            // num=5,f=3,s=5---4th loop
	retun numthTerm;
	
}

module.exports = fibonacci;
