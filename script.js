//Функция, генерирующая игровую доску
function drawMyChessPlate () { 
    let mainBlock = document.querySelector(".main-block")
    let chessLabel = [[1,2,3,4,5,6,7,8],["A","B","C","D","E","F","G","H"]] //Эти блоки нам понадобятся для правильного присвоения ID созданным div
    var block
    let i, j, blackOrWhite=false; //Флаг для чередования цветов. Если нужно сделать A1 белой, достаточно поменять его на =true
    for (i=0; i<8; i++){
      for (j=0; j<8; j++){
        block = document.createElement("div")
        if (blackOrWhite) {
        block.className = "block black"
        block.id = `${chessLabel[1][j]}${chessLabel[0][chessLabel[0].length-i-1]}` //Нам нужно будет нумеровать доску в обратном порядке, предусмотрим заранее
        } else { 
        block.className = "block white"
        block.id = `${chessLabel[1][j]}${chessLabel[0][chessLabel[0].length-i-1]}` //Нам нужно будет нумеровать доску в обратном порядке, предусмотрим заранее
        }
        blackOrWhite = !blackOrWhite //Меняем флаг
        mainBlock.appendChild(block)
        document.querySelector(".back-block").appendChild(mainBlock) //Добавим этот div к предку
        }
    blackOrWhite = !blackOrWhite //Вуа ля! Хитрость! Чтобы следующий ряд начинался с чередующегося цвета - снова меняем флаг
    }
    
}

//Функция, нумерующая строки и столбцы для подписания игровой доски
function giveMeLabels(){
    var chessLabel = [[1,2,3,4,5,6,7,8],["A","B","C","D","E","F","G","H"]]
    for (let i = 0; i < 8; i++) {
        let colname = document.createElement("li");
            colname.textContent = chessLabel[0][chessLabel[1].length-i-1];
            document.querySelector('.labels').appendChild(colname);
        let colnumber = document.createElement("li")
            colnumber.textContent = chessLabel[1][i];
            document.querySelector('.numbers').appendChild(colnumber);
        let colnameM = document.createElement("li");
            colnameM.textContent = chessLabel[0][chessLabel[1].length-i-1];
            document.querySelector('.labels-mirror').appendChild(colnameM);
        let colnumberM = document.createElement("li")
            colnumberM.textContent = chessLabel[1][i];
            document.querySelector('.numbers-mirror').appendChild(colnumberM);
        }
}

//Функция, рисующая шахматные фигуры. Да, мне было мало просто написать "К","Ф" и т.д. %)
function renderFigures(){
    for (let f = 0; f<figure.length;f++){ //Переменная на каждой итерации будет равна определённой фигуре из коллекции
        for (let i=0; i<64;i++){ //Пробежимся по всему игровому полю. Знаю, можно было document.querySelectorAll(".block").length
        if (document.querySelectorAll(".block")[i].id===figure[f].position){ //Если позиция поля совпадает с фигурой
            var newImg = document.createElement("img") //Создадим новый тег с картинкой
            newImg.src = figure[f].image //Прикрепим нужную ссылку на картинку в массиве
            newImg.title = figure[f].name //Пользователь сможет посмотреть название, подведя курсор
            newImg.className = `figure` //Для стилизации в CSS
            newImg.id = `${figure[f].position}` //Систематизированно внесём правильный ID 
            document.querySelector(`#${figure[f].position}`).appendChild(newImg) //Прицепим этот элемент в наш div по позиции
            }
        }
    }
}

//Коллекция шахматных фигурок
var figure = [ 
    // ЧЕРНЫЕ
    {name: 'Черная пешка', position: 'A7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'B7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'C7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'D7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'E7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'F7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'G7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная пешка', position: 'H7', image: 'http://chess-board.ru/img/pieces/pb.svg'},
    {name: 'Черная ладья', position: 'A8', image: 'http://chess-board.ru/img/pieces/rb.svg'},
    {name: 'Черная ладья', position: 'H8', image: 'http://chess-board.ru/img/pieces/rb.svg'},
    {name: 'Черный конь', position: 'B8', image: 'http://chess-board.ru/img/pieces/nb.svg'},
    {name: 'Черный конь', position: 'G8', image: 'http://chess-board.ru/img/pieces/nb.svg'},
    {name: 'Черный cлон', position: 'C8', image: 'http://chess-board.ru/img/pieces/bb.svg'},
    {name: 'Черный cлон', position: 'F8', image: 'http://chess-board.ru/img/pieces/bb.svg'},
    {name: 'Черный ферзь', position: 'D8', image: 'http://chess-board.ru/img/pieces/qb.svg'},
    {name: 'Черный король', position: 'E8', image: 'http://chess-board.ru/img/pieces/kb.svg'},
    // БЕЛЫЕ
    {name: 'Белая пешка', position: 'A2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'B2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'C2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'D2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'E2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'F2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'G2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая пешка', position: 'H2', image: 'http://chess-board.ru/img/pieces/pw.svg'},
    {name: 'Белая ладья', position: 'A1', image: 'http://chess-board.ru/img/pieces/rw.svg'},
    {name: 'Белая ладья', position: 'H1', image: 'http://chess-board.ru/img/pieces/rw.svg'},
    {name: 'Белый конь', position: 'B1', image: 'http://chess-board.ru/img/pieces/nw.svg'},
    {name: 'Белый конь', position: 'G1', image: 'http://chess-board.ru/img/pieces/nw.svg'},
    {name: 'Белый cлон', position: 'C1', image: 'http://chess-board.ru/img/pieces/bw.svg'},
    {name: 'Белый cлон', position: 'F1', image: 'http://chess-board.ru/img/pieces/bw.svg'},
    {name: 'Белый ферзь', position: 'D1', image: 'http://chess-board.ru/img/pieces/qw.svg'},
    {name: 'Белый король', position: 'E1', image: 'http://chess-board.ru/img/pieces/kw.svg'}
]

//Выведем все функции поочерёдно:
drawMyChessPlate()
giveMeLabels()
renderFigures()