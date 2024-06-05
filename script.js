function fibonacci(num) {
// your code here//0 1 1 2 3 5 8 13....so on
	if(num===0 || num===1)
	{
		return 0;
	}
	if(num===2)
	{
		return 1;
	}                             //  1  2  3  4  5  6  7  8
	let fistTerm =1 ;//fibonocci--> 0  1  1  2  3  5  8  13 .....
	let secondTerm = 2;
     let numthTerm;//let num=3
	for (let i = 3; i <=num; i++) //f=0;s=1
	{
		numthTerm = fistTerm+secondTerm;//num=1,
		firstTerm = secondTerm;//f=1,
		secondTerm=numthTerm;//s=1,
	}                            
	return numthTerm;
}
module.exports = fibonacci;
