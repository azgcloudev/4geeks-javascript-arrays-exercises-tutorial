let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here

const mergeTwoList = (arr) => {
	let odd = [];
	let even = [];
	
	for (let i = 0; i < list_of_numbers.length; i++) list_of_numbers[i] % 2 === 0 ? even.push(list_of_numbers[i]) : odd.push(list_of_numbers[i]);
	odd.push(...even);
	return odd;
}

console.log(mergeTwoList(list_of_numbers))

