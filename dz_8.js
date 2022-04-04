// *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.
	
function exponentiate(val, pow, result = val) {
	if (pow === 1) return result;
	return exponentiate (val, pow - 1, result*val);
}

const val = 14, pow = 3
console.log(val, 'в', pow, 'степени = ', exponentiate(val, pow));
// Не смог придумать логику с двумя аргументами функции, только с 3-мя