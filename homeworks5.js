/*      Урок 4. Объекты в JavaScript
OK      1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
        Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
OK      2. Продолжить работу с интернет-магазином:
        В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
OK      Реализуйте такие объекты.
OK      Перенести функционал подсчета корзины на объектно-ориентированную базу.

~OK     3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. 
        Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/

function numbericator(nowNumber) { //По фану решил сделать функцию, которая при вызове выведет число текстом (Мэйби в сценариях озвучки допустим, или как в счетах прописывают)
    switch (nowNumber) {
        case 0: return 'ноль'
        case 1: return 'один'
        case 2: return 'два'
        case 3: return 'три'
        case 4: return 'четыре'
        case 5: return 'пять'
        case 6: return 'шесть'
        case 7: return 'семь'
        case 8: return 'восемь'
        case 9: return 'девять'
        default: return 'это не число'
    }
}

function numberToClass(userNumber) { //Функция, преобразующая число в объект. Я ее ограничил от 0-999 по заданию. А вообще хотел расширить и до тысяч и десяток тысяч (у меня огромная корзина)
        let nowNumberClass = {
                number: 0, //Нынешнее число
                units: 0, //Единицы в числе
                tens: 0, //Десятки в числе
                hundreds: 0, //Сотни в числе
                }
        nowNumberClass.number = userNumber
                if (nowNumberClass.number <= 9 && nowNumberClass.number >= 0) {
                        nowNumberClass.units = `Единицы в числе: ${nowNumberClass.number} (${numbericator(nowNumberClass.number)})`
                } else if (nowNumberClass.number <= 999) {
                        nowNumberClass.units = `Единицы в числе: ${Math.floor(nowNumberClass.number % 10)} (${numbericator(Math.floor(nowNumberClass.number % 10))})`
                        nowNumberClass.tens = `Десятки в числе: ${Math.floor(nowNumberClass.number / 10 % 10)} (${numbericator(Math.floor(nowNumberClass.number / 10 % 10))})`
                        nowNumberClass.hundreds = `Сотни в числе: ${Math.floor(Math.floor(nowNumberClass.number / 100 % 10))} (${numbericator(Math.floor(nowNumberClass.number / 100 % 10))})`
                } else {
                        nowNumberClass.number = 0;
                        return console.log('Вы ввели число за диапазоном 0 - 999');
                }
        return nowNumberClass //Вернуть заполненный объект
} 

function countCartPrice() { //Функция подсчета корзины
        let i = 0
        let countCartPrice = 0
        for (let i in cart) { 
                countCartPrice += cart[i].price
        }
        if (countCartPrice===0) {return 'Корзина пуста! (Пропиши в консоль: cart.push(catalog(i)) или Object.assign(cart,catalog) чтобы добавить товар, а затем renderMyCart(). Скоро появятся кнопки и пользовательский интерфейс!)'} else {
        return `Сейчас в вашей корзине находится ${cart.length} товаров общей суммой: ${countCartPrice.toFixed(0)}руб ${Math.round(Math.abs(Math.floor(countCartPrice)-countCartPrice).toFixed(2)*100)}коп.`
        }
}

function countCatalogPrice() { //Функция подсчета каталога
        let i = 0
        let countCatalogPrice = 0, countInStock = 0
        for (let i in catalog) {  
                countCatalogPrice += catalog[i].price*catalog[i].stock
                countInStock += catalog[i].stock
        }
        if (countCatalogPrice===0) {return 'Каталог пуст!'} else {
        return (`В нашем каталоге доступно ${catalog.length} наименований товаров (из ${countInStock}шт) общей суммой: ${countCatalogPrice.toFixed(0)}руб ${Math.round(Math.abs(Math.floor(countCatalogPrice)-countCatalogPrice)*100)}коп.`)
        }
}

var cart = [] //Создадим пустую корзину товаров

var catalog = [
        {
                id: 1,
                uuid: '5cdd8ce6-b4b1-4985-b259-6b7ef00b8685',
                name: 'Баклажаны',
                price: 69.00,
                group: 'Овощи свежие',
                stock: 283,
                units: 'кг'
        },
        {
                id: 2,
                uuid: 'ca2082c3-3ed4-47ba-adf6-4a77bd7f9100',
                name: 'Зелень (петрушка)',
                price: 157.50,
                group: 'Овощи свежие',
                stock: 187,
                units: 'кг'
        },
        {
                id: 3,
                uuid: 'c1fd9ccd-66cf-4f13-929c-bdb072e3fbe3',
                name: 'Зелень (укроп)',
                price: 157.50,
                group: 'Овощи свежие',
                stock: 721,
                units: 'кг'
        },
        {
                id: 4,
                uuid: '54116d08-9e93-4630-b45c-a93d4b581c76',
                name: 'Кабачки',
                price: 80.00,
                group: 'Овощи свежие',
                stock: 519,
                units: 'кг'
        },
        {
                id: 5,
                uuid: '379f70b0-4fb4-4e14-8a3b-9c9c8919448b',
                name: 'Капуста белокочанная',
                price: 25.00,
                group: 'Овощи свежие',
                stock: 92,
                units: 'кг'
        },
        {
                id: 6,
                uuid: '80f512e4-cb79-4e39-bf68-9992cf384b12',
                name: 'Картофель',
                price: 22.00,
                group: 'Овощи свежие',
                stock: 258,
                units: 'кг'
        },
        {
                id: 7,
                uuid: '2c9865ff-5057-437e-971e-8cfd52768c0e',
                name: 'Лук зеленый',
                price: 180.00,
                group: 'Овощи свежие',
                stock: 63,
                units: 'кг'
        },
        {
                id: 8,
                uuid: '63c72fd9-952f-49db-98a7-942ee5809a1e',
                name: 'Лук репчатый',
                price: 18.00,
                group: 'Овощи свежие',
                stock: 219,
                units: 'кг'
        },
        {
                id: 9,
                uuid: '07b4f445-95e8-48ed-87bb-abca4b339533',
                name: 'Морковь',
                price: 21.00,
                group: 'Овощи свежие',
                stock: 144,
                units: 'кг'
        },
        {
                id: 10,
                uuid: '2a76f022-7e95-4dd8-8981-cd310bf4d813',
                name: 'Огурцы',
                price: 45.00,
                group: 'Овощи свежие',
                stock: 555,
                units: 'кг'
        },
        {
                id: 11,
                uuid: 'bc5351e9-5823-468e-b564-9c78714125d0',
                name: 'Перец сладкий',
                price: 50.00,
                group: 'Овощи свежие',
                stock: 804,
                units: 'кг'
        },
        {
                id: 12,
                uuid: 'bd466c8a-0ec6-41a4-8f50-ed90701ce8e4',
                name: 'Помидоры',
                price: 50.00,
                group: 'Овощи свежие',
                stock: 858,
                units: 'кг'
        },
        {
                id: 13,
                uuid: 'f58b4bb8-db7b-41de-904b-a8c7be6c5ba4',
                name: 'Редька',
                price: 20.00,
                group: 'Овощи свежие',
                stock: 79,
                units: 'кг'
        },
        {
                id: 14,
                uuid: 'c2b28f00-43d7-4250-a0a0-440160393630',
                name: 'Свёкла',
                price: 17.50,
                group: 'Овощи свежие',
                stock: 230,
                units: 'кг'
        },
        {
                id: 15,
                uuid: '04a6d805-a1f7-4a60-bf08-5258fd2470de',
                name: 'Чеснок',
                price: 145.00,
                group: 'Овощи свежие',
                stock: 645,
                units: 'кг'
        },
        
        {
                id: 16,
                uuid: '3b22bd75-7dec-4203-a176-8c62279b106a',
                name: 'Джем, с/б, 450г',
                price: 76.50,
                group: 'Консервированная продукция',
                stock: 582,
                units: 'банка'
        },
        {
                id: 17,
                uuid: 'c1649473-b4b1-46d6-836f-ffb5ce70db8c',
                name: 'Зеленый горошек первый и высший сорт, ж/б, 360г',
                price: 36.26,
                group: 'Консервированная продукция',
                stock: 447,
                units: 'банка'
        },
        {
                id: 18,
                uuid: 'fa35d9d3-1eb7-4f75-89d2-a9db68660ea8',
                name: 'Зеленый горошек, высший сорт, с/б, 650-680г',
                price: 58.60,
                group: 'Консервированная продукция',
                stock: 5,
                units: 'банка'
        },
        {
                id: 19,
                uuid: '661eb504-932d-41ad-9356-947ae87a94d4',
                name: 'Икра кабачковая, ж/б 360г',
                price: 31.60,
                group: 'Консервированная продукция',
                stock: 558,
                units: 'банка'
        },
        {
                id: 20,
                uuid: '0f592860-09f7-47f6-ad9a-fc65ad8e21d1',
                name: 'Икра кабачковая, с/б 650г',
                price: 44.60,
                group: 'Консервированная продукция',
                stock: 299,
                units: 'банка'
        },
        {
                id: 21,
                uuid: 'd46108aa-ce7d-4cc8-bac3-7da399283f1b',
                name: 'Кукуруза сахарная, ж/б 340г/425мл (сладкая)',
                price: 36.95,
                group: 'Консервированная продукция',
                stock: 280,
                units: 'банка'
        },
        {
                id: 22,
                uuid: '637c85bd-27fd-4d28-91db-a5113734b581',
                name: 'Напиток (нектар) тыквенный, с/б,3л',
                price: 76.00,
                group: 'Консервированная продукция',
                stock: 171,
                units: 'банка'
        },
        {
                id: 23,
                uuid: 'cc62b59d-b3d3-489e-84f5-8df190c9b112',
                name: 'Напиток груши-дички, с/б, 3л',
                price: 60.80,
                group: 'Консервированная продукция',
                stock: 520,
                units: 'банка'
        },
        {
                id: 24,
                uuid: 'fd51ec49-e7c9-4838-bd42-0a4e92caea0b',
                name: 'Напиток шиповника, с/б, 3л',
                price: 60.80,
                group: 'Консервированная продукция',
                stock: 272,
                units: 'банка'
        },
        {
                id: 25,
                uuid: 'abd79099-ecf6-4b9a-8109-4c37c3bbaefd',
                name: 'Огурцы или томаты консервированные, целые, с/б, Зл',
                price: 125.00,
                group: 'Консервированная продукция',
                stock: 217,
                units: 'банка'
        },
        {
                id: 26,
                uuid: 'a0aaf744-f0ea-4904-a354-d17261d51326',
                name: 'Повидло весовое (ябл.)',
                price: 58.00,
                group: 'Консервированная продукция',
                stock: 800,
                units: 'кг'
        },
        {
                id: 27,
                uuid: '28fa6b73-9eea-4782-8f64-e6d58f525aca',
                name: 'Повидло, с/б, 615-650г',
                price: 67.08,
                group: 'Консервированная продукция',
                stock: 807,
                units: 'банка'
        },
        {
                id: 28,
                uuid: '97b1a30d-d9c1-4027-a0af-3fd6685c9c5e',
                name: 'Сок томатный или фруктовый (яблочный) в ассорт., тетра-пак, 1л',
                price: 25.80,
                group: 'Консервированная продукция',
                stock: 781,
                units: 'пакет'
        },
        {
                id: 29,
                uuid: 'bd9b1cda-ba28-45bd-8514-a87f066211b0',
                name: 'Сок томатный, с/б, 3л',
                price: 89.30,
                group: 'Консервированная продукция',
                stock: 163,
                units: 'банка'
        },
        {
                id: 30,
                uuid: '93444a49-18e2-428b-84f8-fb1abfe2d4ca',
                name: 'Сок яблочный',
                price: 60.00,
                group: 'Консервированная продукция',
                stock: 398,
                units: 'банка'
        },
]

countCatalogPrice()
//countCartPrice()
//console.log('Вы добавили в корзину весь наш каталог!')
//Object.assign(cart,catalog)
//countCartPrice()

function renderMyCatalog(){
    for (let i = 0; i < catalog.length; i++) {
        let catalogProducts = document.createElement("p");
            catalogProducts.textContent = catalog[i].name;
            document.querySelector('.catalog').appendChild(catalogProducts);
        }
                catalogProducts = document.createElement("p");
                catalogProducts.textContent = countCatalogPrice();
                catalogProducts.id = "sum"
                document.querySelector('.catalog').appendChild(catalogProducts);
        countCatalogPrice()
}

function renderMyCart(){
        
    for (let i = 0; i < cart.length; i++) {
        let cartProducts = document.createElement("p");
            cartProducts.textContent = cart[i].name;
            document.querySelector('.cart').appendChild(cartProducts);
        }
                cartProducts = document.createElement("p");
                cartProducts.textContent = countCartPrice();
                cartProducts.id = "sum"
                document.querySelector('.cart').appendChild(cartProducts);
        countCartPrice()
}

renderMyCatalog()
renderMyCart();