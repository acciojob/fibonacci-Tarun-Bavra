function fibonacci(num) {
// your code here//0 1 1 2 3 5 8 13....so on
	if(num===0)
	{
		return 0;
	}
	if(num===1)
	{
		return 0;
	}                             //   1  2  3  4  5  6  7  8
	let firstTerm =0;//fibonocci-->  0  1  1  2  3  5  8  13 .....
	let secondTerm = 1;
     let numthTerm;//let num=5
	for (let i = 2; i <=num; i++) //f=0;s=1
	{
		numthTerm = firstTerm+secondTerm;//num=0+1=1, 1+1=2, 1+2=3
		firstTerm = secondTerm;//f=1, 1, 2
		secondTerm=numthTerm;//s=1, 2, 3
	}                            
	return secondTerm;
}
module.exports = fibonacci;
