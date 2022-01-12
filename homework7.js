/* Урок 6. Обработка событий в JavaScript
Продолжаем реализовывать модуль корзины:
OK!     a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
OK!     b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
ОК!     (*) У товара может быть несколько изображений. Нужно:
ОК!     a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
ОК!     b. Реализовать функционал перехода между картинками внутри модального окна.     
*/

//Функция, преобразующая число в руб/коп
function FloatDisplayPrice (price) {
    return `${Math.floor(price)}руб ${Math.round(Math.abs(price-Math.floor(price)).toFixed(2)*100)}коп.`
}

//Функция подсчета корзины
function countCartPrice() { 
            let i = 0
            cart.price = 0
            if (cart.items.length===0) {
                    return `Твоя корзина еще пуста, скорее за покупками в наш каталог!`
            } else { 
                    for (let i in cart.items) { 
                            cart.price += 0+cart.items[i].price } 
    return `Сейчас в вашей корзине находится ${cart.items.length} товаров на сумму: ${FloatDisplayPrice(cart.price)}`
    }
}

//Функция подсчета каталога
function countCatalogPrice() { 
    let i = 0
    let countCatalogPrice = 0, countInStock = 0
    for (let i in catalog) {  
            countCatalogPrice += catalog[i].price*catalog[i].stock
            countInStock += catalog[i].stock //На будущее добавил, чтобы при покупке товары на складе тоже уменьшались
    }
    if (countCatalogPrice===0) {return 'Каталог пуст!'} else {
    return (`В нашем каталоге доступно ${catalog.length} наименований товаров (из ${countInStock}шт на складе) общей суммой: ${FloatDisplayPrice(countCatalogPrice)}`)
    }
}

//Создадим пустую корзину товаров, будем хранить в ней и общую стоимость
var cart = { 
    items: [], 
    price: 0,
} 

//Каталог с товарами в магазине
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
            units: 'банку'
    },
    {
            id: 17,
            uuid: 'c1649473-b4b1-46d6-836f-ffb5ce70db8c',
            name: 'Зеленый горошек первый и высший сорт',
            price: 36.26,
            group: 'Консервированная продукция',
            stock: 447,
            units: 'банку'
    },
    {
            id: 18,
            uuid: 'fa35d9d3-1eb7-4f75-89d2-a9db68660ea8',
            name: 'Зеленый горошек, высший сорт',
            price: 58.60,
            group: 'Консервированная продукция',
            stock: 5,
            units: 'банку'
    },
    {
            id: 19,
            uuid: '661eb504-932d-41ad-9356-947ae87a94d4',
            name: 'Икра кабачковая',
            price: 31.60,
            group: 'Консервированная продукция',
            stock: 558,
            units: 'банку'
    },
    {
            id: 20,
            uuid: '0f592860-09f7-47f6-ad9a-fc65ad8e21d1',
            name: 'Икра кабачковая',
            price: 44.60,
            group: 'Консервированная продукция',
            stock: 299,
            units: 'банку'
    },
    {
            id: 21,
            uuid: 'd46108aa-ce7d-4cc8-bac3-7da399283f1b',
            name: 'Кукуруза сахарная (сладкая)',
            price: 36.95,
            group: 'Консервированная продукция',
            stock: 280,
            units: 'банку'
    },
    {
            id: 22,
            uuid: '637c85bd-27fd-4d28-91db-a5113734b581',
            name: 'Напиток (нектар) тыквенный',
            price: 76.00,
            group: 'Консервированная продукция',
            stock: 171,
            units: 'банку'
    },
    {
            id: 23,
            uuid: 'cc62b59d-b3d3-489e-84f5-8df190c9b112',
            name: 'Напиток груши-дички',
            price: 60.80,
            group: 'Консервированная продукция',
            stock: 520,
            units: 'банку'
    },
    {
            id: 24,
            uuid: 'fd51ec49-e7c9-4838-bd42-0a4e92caea0b',
            name: 'Напиток шиповника',
            price: 60.80,
            group: 'Консервированная продукция',
            stock: 272,
            units: 'банку'
    },
    {
            id: 25,
            uuid: 'abd79099-ecf6-4b9a-8109-4c37c3bbaefd',
            name: 'Томаты консервированные',
            price: 125.00,
            group: 'Консервированная продукция',
            stock: 217,
            units: 'банку'
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
            name: 'Повидло в банке',
            price: 67.08,
            group: 'Консервированная продукция',
            stock: 807,
            units: 'банку'
    },
    {
            id: 28,
            uuid: '97b1a30d-d9c1-4027-a0af-3fd6685c9c5e',
            name: 'Фруктовый сок в ассорт',
            price: 25.80,
            group: 'Консервированная продукция',
            stock: 781,
            units: 'пакет'
    },
    {
            id: 29,
            uuid: 'bd9b1cda-ba28-45bd-8514-a87f066211b0',
            name: 'Сок томатный',
            price: 89.30,
            group: 'Консервированная продукция',
            stock: 163,
            units: 'пачку 3л'
    },
    {
            id: 30,
            uuid: '93444a49-18e2-428b-84f8-fb1abfe2d4ca',
            name: 'Сок яблочный',
            price: 60.00,
            group: 'Консервированная продукция',
            stock: 398,
            units: 'банку'
    },
]

const galleryPictureCatalogCount = 6

//Функция отрисовки каталога товаров
function renderMyCatalog(){
    //Очистим предыдущий каталог, чтобы зарендерить новый
    document.querySelectorAll('.products').forEach(div => div.remove()); 
for (let i = 0; i < catalog.length; i++) {
    let createNewProduct = document.createElement("p");
    let createNewGallery = document.createElement("div");
    let createBuyButton = document.createElement("button");
    let createNewDivByID = document.createElement("div");
    let createStockCount = document.createElement("li")
        createNewDivByID.className = `product${catalog[i].id} products`
        createNewProduct.textContent = `Название: ${catalog[i].name}; цена за 1${catalog[i].units}: ${FloatDisplayPrice(catalog[i].price)}`;
        createNewGallery.className = `galleryProduct${i+1} gallery`
        createBuyButton.textContent = `${catalog[i].price.toFixed(2)}руб | добавить в корзину`;
        createBuyButton.id = `button${catalog[i].id}`
        createBuyButton.name = `${i+1}`
        createStockCount.className = `instock${i+1} stock`
        createStockCount.textContent = `В наличии: ${catalog[i].stock} шт.`
        document.querySelector('.catalog').appendChild(createNewDivByID);
        document.querySelector(`.product${i+1}`).appendChild(createNewProduct);
        document.querySelector(`.product${i+1}`).appendChild(createNewGallery);
        document.querySelector(`.product${i+1}`).appendChild(createBuyButton);
        document.querySelector(`.product${i+1}`).appendChild(createStockCount);
        let button = document.getElementById(`button${i+1}`)
        button.addEventListener('click',onButtonClickCatalog)

        //Я пытался сделать в этом блоке так, чтобы при ошибке загрузки картинки ее src URL поменялся на существующий, но не получилось..
        //При этом функция errorLoadingImage действительно выводит сообщения об ошибках в консоль
        for (let j = 1; j<galleryPictureCatalogCount+1; j++){
            let createNewImage = document.createElement("img");
        //while(createNewImage.onload){
        createNewImage.id = `${Math.floor(Math.random()*1000)}`
        createNewImage.src = `https://picsum.photos/id/${createNewImage.id}/180/180`
        createNewImage.dataset.path = `img180px`
        createNewImage.onerror = errorLoadingImage
        if (errorLoadingImage) {
               // debugger 
                createNewImage.id = `${Math.floor(Math.random()*1000)}`
                createNewImage.src = `https://picsum.photos/id/${createNewImage.id}/180/180`
        } 
        //}
        createNewImage.alt = `Рандомная картинка`
        createNewImage.className = `smallImg${i+1}-${j}`
        document.querySelector(`.galleryProduct${i+1}`).appendChild(createNewImage);
        }
        
        if (i==catalog.length-1) {
            let createLastDIV = document.createElement("div");
            createNewProduct = document.createElement("h2");
            createNewProduct.textContent = countCatalogPrice();
            createNewProduct.id = "sum"
            createLastDIV.className = "sumcatalog products"
            document.querySelector('.catalog').appendChild(createLastDIV)
            document.querySelector('.sumcatalog').appendChild(createNewProduct);
            countCatalogPrice()
        }
    }              
}

function errorLoadingImage(){console.log("изображение не прогрузилось")}

//Функция отрисовки корзины
function renderMyCart(){
    //Очистим корзину, чтобы зарендерить пересчитанную новую
    document.querySelectorAll('.cartproducts').forEach(div => div.remove());      
    if (cart.items.length===0) { //Проверка на условие пустой корзины
            createFoolDIV = document.createElement("div")
            createNewProduct = document.createElement("h2");
            createNewProduct.textContent = countCartPrice();
            createNewProduct.id = "sumcart"
            createFoolDIV.className = "sumcart cartproducts"
            document.querySelector('.structure').appendChild(createFoolDIV)
            document.querySelector('.sumcart').appendChild(createNewProduct); 
    } else {
            for (let i = 0; i < cart.items.length; i++) {
            let createNewProduct = document.createElement("p");
            let createBuyButton = document.createElement("button");
                    createNewProduct.className = `cartbutton${i+1}`
                    createNewProduct.textContent = `Название: ${cart.items[i].name}; цена за 1${cart.items[i].units}: ${FloatDisplayPrice(cart.items[i].price)}`;
                    createBuyButton.textContent = `${cart.items[i].price.toFixed(2)}руб | удалить`;
                    createBuyButton.id = `cartbutton${i+1}`
                    createBuyButton.className = `cartbutton${i+1}`
                    createBuyButton.name = `${i+1}`
                    let createNewDivByID = document.createElement("div");
                    createNewDivByID.className = `cartproduct${cart.items[i].id} cartproducts`
                    document.querySelector('.structure').appendChild(createNewDivByID);
                    document.querySelector(`.cartproduct${cart.items[i].id}`).appendChild(createNewProduct);
                    document.querySelector(`.cartproduct${cart.items[i].id}`).appendChild(createBuyButton);
                    let button = document.getElementById(`cartbutton${i+1}`)
                    button.addEventListener('click',onButtonDeleteCart)
                            //Для удаления пустых блоков div при обновлении корзины, в случае, если пользователь добавил такой же товар
                            for (let j=0; j<document.getElementsByClassName(`cartproducts`).length; j++){
                            if (document.getElementsByClassName(`cartproducts`)[j].childElementCount == 0) {
                                    document.getElementsByClassName(`cartproducts`)[j].remove()}}
                    //Для поиска последнего блока div, чтобы отрисовывать там сумму и кннопку очистки
                    if (i==cart.items.length-1) {
                    let createLastDIV = document.createElement("div");
                    createNewProduct = document.createElement("h2");
                    createNewProduct.textContent = countCartPrice();
                    createNewProduct.id = "sumcart"
                    createLastDIV.className = "sumcart cartproducts"
                    document.querySelector('.structure').appendChild(createLastDIV)
                    document.querySelector('.sumcart').appendChild(createNewProduct);
                    let createButtonClearCart = document.createElement("button")
                    createButtonClearCart.textContent = "Очистить корзину!"
                    createButtonClearCart.id = "cartClearButton"
                    document.querySelector('.sumcart').appendChild(createButtonClearCart)
                    button = document.getElementById("cartClearButton")
                    button.addEventListener('click',onButtonClearCartClick)
                    createButtonClearCart = document.createElement("button")
                    createButtonClearCart.textContent = "Далее"
                    createButtonClearCart.id = "cartBuyButton"
                    createButtonClearCart.className = "btnnext"
                    document.querySelector('.sumcart').appendChild(createButtonClearCart)
                    createButtonClearCart = document.getElementById("cartBuyButton")
                    createButtonClearCart.addEventListener('click',onButtonBuyClick)
                    }
            }
    }
}

//Функция нажатия на кнопку из HTML документа в каталоге
function onButtonClickCatalog(event) {
    let i = +`${event.target.name}`
    cart.items.push(catalog[i-1])
    renderMyCart()
    console.log(`Через кнопку ${event.target.id} товар был добавлен в корзину!`)
}

//Функция нажатия на кнопку из HTML документа в корзине
function onButtonDeleteCart(event) {
    let i = +`${event.target.name}`
    cart.items.splice(i-1,1)
    renderMyCart()
    console.log(`Через кнопку ${event.target.id} вы удалили товар номер ${i} из корзины!`)
}

//Функция нажатия на кнопку "далее" из каждого блока страницы
function onButtonBuyClick () {
        const collapseBlock = document.querySelectorAll(".carts")
        const button = document.querySelectorAll(".btnnext")
        for (let i = 0; i < collapseBlock.length; i++) {
                button[i].onclick = () => {
                collapseBlock[i].classList.toggle("--active");
                if (i== collapseBlock.length-1) {
                        cart.items.splice(0,cart.items.length)
                        renderMyCart()
                        collapseBlock[0].classList.toggle("--active")
                } else {collapseBlock[i+1].classList.toggle("--active");}
                };
        }
}

//Функция нажатия на кнопку очистки корзины из HTML документа
function onButtonClearCartClick(event) {
    cart.items.splice(0,cart.items.length)
    renderMyCart()
    console.log(`Через кнопку ${event.target.id} вы полностью очистили корзину!`)
}

//Функция для отладки взаимодействия с картинками
function onOpenMiniatureImage(event){
    console.log(event)
}

function init(){
        //debugger
    const images = document.querySelectorAll('.gallery > img')
        const modalOverlay = document.querySelector('.modal-overlay');
        const modals = document.querySelectorAll('.modal');

        images.forEach((element) => {
                element.addEventListener('click', (e) => {
                        let path = e.currentTarget.getAttribute('data-path');
                        let pathimg = e.currentTarget.getAttribute('id')
                        modals.forEach((el) => {
                                el.classList.remove('modal--visible');
                        });
        
                        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
                        document.querySelector(`.fullImg`).src = `https://picsum.photos/id/${pathimg}/800/800`
                        modalOverlay.classList.add('modal-overlay--visible');
                });
        });
        
        modalOverlay.addEventListener('click', (e) => {
                //console.log(e.target);
                if (e.target == modalOverlay) {
                        modalOverlay.classList.remove('modal-overlay--visible');
                        modals.forEach((el) => {
                                el.classList.remove('modal--visible');
                        });
                }
        });

    for (let picture of images){
        picture.addEventListener('click',onOpenMiniatureImage)
    }
}

//Функция, которая при нажатии на кнопку закрепит корзину наверху экрана
function togglesticky () {
        let sticky = document.querySelector('.cartpos')
        let stInh = sticky.style.position
        stInh == 'inherit' ? sticky.style.position = 'sticky' : sticky.style.position = 'inherit'
        console.log(`Элемент корзина теперь имеет свойство ${sticky.style.position}`)

}

renderMyCatalog()
renderMyCart();

window.addEventListener('load', init)