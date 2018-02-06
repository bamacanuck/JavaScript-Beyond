var arguments = process.argv

var numbers = [];

for (var i = 2; i < arguments.length; i++) {

	numbers.push(parseFloat(arguments[i]));
};

var sortedNumbers = numbers.sort(numberSort);

console.log(sortedNumbers);

function numberSort (a, b) {
	return (a-b);
};