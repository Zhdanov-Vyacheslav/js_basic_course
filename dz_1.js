// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let n = 0
while (n != 100){
	if (n === 2) console.log(n);
	for (let i = 2; i < n; i++){
		if ((n % i) | 0){
			console.log(n)
			break
		}else break
	}
	n++;
}