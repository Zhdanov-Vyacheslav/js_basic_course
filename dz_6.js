// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// 	где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// 	(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function sum(arg1, arg2){
	return arg1 + arg2
}
function multiplication(arg1, arg2){
	return arg1 * arg2
}
function division(arg1, arg2){
	return arg1 / arg2
}
function subtraction(arg1 , arg2){
	return arg1 - arg2
}

function mathOperation(arg1, arg2, operation){
	switch (operation){
		case 'Сложение':
		case '+': return sum(arg1, arg2);
		case 'Умножение':
		case '*': return multiplication(arg1, arg2);
		case 'Деление':
		case '/': return division(arg1, arg2);
		case 'Вычитание':
		case '-': return subtraction(arg1, arg2);
	}
}

console.log(mathOperation(7, 4, '+'));
console.log(mathOperation(7, 4, '*'));
console.log(mathOperation(7, 4, '/'));
console.log(mathOperation(7, 4, '-'));

console.log(mathOperation(7, 4, 'Сложение'));
console.log(mathOperation(7, 4, 'Умножение'));
console.log(mathOperation(7, 4, 'Деление'));
console.log(mathOperation(7, 4, 'Вычитание'));
// Не понял из описания, тут должен быть знак или слово: operation – строка с названием операции. Сделал оба варианта