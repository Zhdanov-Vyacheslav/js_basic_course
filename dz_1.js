// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// 	мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const objNumber = {
	thousands: 0,
	hundreds: 0,
	tens: 0
};

function convert(number){
	if (number > 999) {
		console.log(number,' > 999 ')
		return objNumber
	}
	while (number != 0){
		if (number < 10) {
			objNumber.tens = number
			number = 0
		} else if (number < 100){
			objNumber.hundreds = (number / 10) | 0;
			number = number % 10;
		} else if (number < 1000){
			objNumber.thousands = (number / 100) | 0;
			number = number % 100;
		}
	}
	return objNumber
}

const n = 132;
console.log(convert(n));
