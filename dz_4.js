// *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// 	только у вашей пирамиды должно быть 20 рядов, а не 5:
function star(count) {
	let strStar = ''
	for (let i = 1; i <= count; i++, strStar += '*'){}
	return strStar
}
for (let i = 1; i <= 20; console.log(star(i++))){}
