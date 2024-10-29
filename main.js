// alert(`working`);
('use strict');
let logo = document.getElementById('logo');
logo.innerHTML = 'Calculator';
///////////////////////////////////////////////////////////////////////
let value = document.querySelector('#conversionBox').value;
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
///////////////////////////////////////////////////////////////////////
const deleteButton = document.getElementById('7del');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
///////////////////////////////////////////////////////////////////////
const equalsButton = document.getElementById('equals');
///////////////////////////////////////////////////////////////////////
// RESET
const resetButton = document.querySelector('#reset');
function reload() {
	reload = location.reload();
}
resetButton.addEventListener('click', reload, false);

function calculate() {
	value = document.querySelector('#conversionBox').value;
	one.addEventListener('click', () => {
		console.log('1');
	});
	two.addEventListener('click', () => {
		console.log('2');
	});
	three.addEventListener('click', () => {
		console.log('3');
	});
	four.addEventListener('click', () => {
		console.log('4');
	});
	five.addEventListener('click', () => {
		console.log('5');
	});
	six.addEventListener('click', () => {
		console.log('6');
	});
	seven.addEventListener('click', () => {
		console.log('7');
	});
	eight.addEventListener('click', () => {
		console.log('8');
	});
	nine.addEventListener('click', () => {
		console.log('9');
	});
	zero.addEventListener('click', () => {
		console.log('0');
	});
}
