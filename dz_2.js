// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

// Шаблон продукта
// const product = {
// 	name : String,
// 	price : Number,
// }

const basket = {
	products : {'length':0},
	basketPrice : 0,

	getBasketPice(){
		for (let i = 0; i != this.products.length; i++){
			this.basketPrice += this.products[i].count * this.products[i].price
		}
		return this.basketPrice
	},

	putProduct(product, count){
		product['count'] = count
		// Повторное добавление имеющегося товара заменит имеющийся
		for (let i = 0; i != this.products.length; i++){
			if (this.products[i].name === product.name) {
				this.products[i] = product;
				return
			};
		};
		this.products[this.products.length++] = product
	},
}

console.log(basket.getBasketPice());
basket.putProduct({'name':'apple', 'price':200}, 3)
basket.putProduct({'name':'orange', 'price':100}, 1)
basket.putProduct({'name':'apple', 'price':200}, 2)
basket.putProduct({'name':'milk', 'price':150.50}, 3)
console.log(basket.getBasketPice());
