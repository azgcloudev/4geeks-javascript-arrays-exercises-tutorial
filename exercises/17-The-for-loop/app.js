var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let counter = 0;
let totalSum = 0;
for (var number of myArray){
	counter++;
	totalSum += number;
}
console.log(totalSum / counter);
