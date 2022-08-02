"use strict";
//1
function searchString(originalStr, str) {
	return originalStr.indexOf(str) !== -1

}
console.log(searchString("Hello", "llo"));
console.log(searchString("Hello", "www"));

//2
function  capitalizeFirstLetter(str){
	 return `${str[0].toUpperCase()}${str.substr(1)}`;
}
console.log(capitalizeFirstLetter("hello"));
console.log(capitalizeFirstLetter("HELLO"));
console.log(capitalizeFirstLetter("hElLo"));

//3
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(0, maxlength) + "...";
  }
  return str;
}
console.log(truncate("Hello world", 5));
console.log(truncate("Hello world", 25));

//4
const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];
function studAverageMarks(student){
	student.forEach((studentMarks)=>{
	const sumOfMarks=studentMarks.marks.reduce((previousValue, currentValue) =>previousValue + currentValue);
		const averageMark =sumOfMarks / studentMarks.marks.length;
		 studentMarks.averageMark=averageMark;

});
return student;
}
console.log(studAverageMarks(students));

//5
const vehicles = [
	{ make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
	{ make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
	{ make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
	{ make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
	{ make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
	{ make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
	{ make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
	{ make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
	{ make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
	{ make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
 ];
 let newVehicles = vehicles.filter(function(item) {
	return item.type.toUpperCase() === 'SUV';
});
function getMiddlePrice(cars) {
	return cars.reduce((element, index) => element + index.price, 0) / cars.length;
};
console.log('Average SUV price ' + getMiddlePrice(newVehicles));

//6
function getKeysCount(obj){
	return Object.values(obj).length;
}
console.log(getKeysCount({ name: 'John' }));
console.log(getKeysCount({ name: 'John', age: 22 }));
console.log(getKeysCount({ name: 'John', salary: null }));

//7
let arr = [10, 20, 3, 4, 0, 99, 97];

function copySorted(arr) {
  return arr.slice(0).sort((a, b) => a - b);
}
console.log(arr);
console.log(copySorted(arr));
