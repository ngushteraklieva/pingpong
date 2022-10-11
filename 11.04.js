// Objects

const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}


// extract the make and year from the car in one line

// function extract({make,year}) {
	
// 	return `${make}, ${year}`
// }
// console.log(extract(car))

// extract the fuel and hp from the car in one line

// function extraxtFuel(car){
// 	const {engine: {fuel, hp}} = car
// 	return `${fuel}, ${hp}`
// }

// console.log(extraxtFuel(car));


// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values
// const [a,b] = numbers
// console.log(a, b); // 0 1

// Extract all the values but the first one from the array

//console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Strings

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
const copy = [...str]
const toUpperCase = copy.toUpperCase()
const reversed = copy.reverse()
console.log(reversed)
//console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
//console.log('hello');