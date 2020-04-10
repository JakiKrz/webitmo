function createTable(x, y){
	let newTable = document.createElement("table");

	for (let i = 0; i<x; i++){
		let newRow = document.createElement("tr");

		for (let j = 0; j<y; j++){
			let newCol = document.createElement("td");
			newRow.appendChild(newCol);

			let forms = document.createElement("form"); // создаем форму для поля ввода и кнопки
            newCol.appendChild(forms);
            let textForm = document.createElement("textarea"); //поле ввода
            forms.appendChild(textForm);
            let bSave = document.createElement("input"); //кнопка
            bSave.type = "button";
            bSave.value = "Сохранить";
            forms.appendChild(bSave);


            bSave.onclick = function(){
            	forms.innerText = textForm.value;
            }

   		}

		newTable.appendChild(newRow);
	}
	
	document.body.append(newTable);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//-----------------Создание таблицы-----------------------------------------------------------


let newForm = document.createElement("form"); //создаем новую форму
newForm.classList.add("newForm");
document.body.appendChild(newForm);

let par = document.createElement("p");// создаем параграф внутри формы
newForm.appendChild(par);
par.innerText = "Введите количество строк и столбцов";

let input1 = document.createElement("input");
newForm.appendChild(input1);
input1.type = "text";


let input2 = document.createElement("input");
newForm.appendChild(input2);
input2.type = "text";



let buttonSave = document.createElement("input"); // создаем кнопку ввода

buttonSave.type = "button";
buttonSave.value = "Сохранить";
newForm.appendChild(buttonSave);

buttonSave.onclick = function() {
			createTable(input1.value, input2.value);
			newForm.classList.add("d_none");
			functions.classList.remove("d_none");
		}


			


//---------------Функции таблицы-------------------------------------------------------------------------

let functions = document.createElement("div");
functions.classList.add("functions");
functions.classList.add("d_none");
document.body.appendChild(functions);

let h2 = document.createElement("h2");
document.body.appendChild(h2);

 // 1я функция
let div1 = document.createElement("div");
functions.appendChild(div1);

let p1 = document.createElement("p");
p1.innerHTML = "Изменить границы таблицы";
div1.appendChild(p1);

let inputWidth = document.createElement("input"); // создаем поле ввода для ширины
inputWidth.type = "text";
inputWidth.oninput = function () {
    inputWidth.parentNode.querySelector("button").innerHTML = "Применить " + inputWidth.value + " px и рамка " + inputWidth.parentNode.querySelector("select").value;
}
inputWidth.maxLength = 3;
div1.appendChild(inputWidth);

let borders = document.createElement("select"); // создаем поле ввода для рамок
borders.onchange = function () {
    borders.parentNode.querySelector("button").innerHTML = "Применить " + borders.parentNode.querySelector("input").value + " px и рамка " + borders.value;
}
div1.appendChild(borders);

let arrBorders = ["solid", "double", "dotted", "dashed"];
for (let i = 0; i < 4; i++){
	let border = document.createElement("option");
	border.innerHTML = arrBorders[i];
	borders.appendChild(border);
}

let button_1 = document.createElement("button");
button_1.innerHTML = "Применить";
button_1.onclick = function () {
    document.querySelector("table").style.width = button_1.parentNode.querySelector("input").value + "px";
    document.querySelector("table").style.borderStyle = button_1.parentNode.querySelector("select").value;
}
div1.appendChild(button_1);


// 2я функция
let div2 = document.createElement("div"); 
functions.appendChild(div2);

let p2 = document.createElement("p");
p2.innerHTML = "Добавление заголовка";
div2.appendChild(p2);

let inputH2 = document.createElement("input");
inputH2.type = "text";
div2.appendChild(inputH2);

let button_2 = document.createElement("button");
button_2.innerHTML = "Добавить";
button_2.onclick = function () {
    document.querySelector("h2").innerText = button_2.parentNode.querySelector("input").value;
}
div2.appendChild(button_2);


// 3я функция
let div3 = document.createElement("div"); 
functions.appendChild(div3);

let p3 = document.createElement("p");
p3.innerHTML = "Выберите номер строки для удаления";
div3.appendChild(p3);

let inputNum = document.createElement("input");
inputNum.type = "number";
div3.appendChild(inputNum);

let button_3 = document.createElement("button")
button_3.innerHTML = "Удалить"
button_3.onclick = function () {
    if ((button_3.parentNode.querySelector("input").value <= document.getElementsByTagName("tr").length) && (button_3.parentNode.querySelector("input").value > 0)) {
        document.getElementsByTagName("tr")[button_3.parentNode.querySelector("input").value - 1].remove()
    } else {
        alert("Некорректное значение");
    }
}
div3.appendChild(button_3);


// 4ая функция
let div4 = document.createElement("div"); 
functions.appendChild(div4);

let p4 = document.createElement("p");
p4.innerHTML = "Случайное изменение";
div4.appendChild(p4);

let button_4 = document.createElement("button")
button_4.innerHTML = "Magic"
button_4.onclick = function () {
    let magic = document.getElementsByTagName("tr")[getRandomInt(document.getElementsByTagName("tr").length )].getElementsByTagName("td")[getRandomInt(document.getElementsByTagName("tr")[0].getElementsByTagName("td").length)]
    magic.style.backgroundColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
    magic.style.color = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
    magic.style.fontSize = randomInteger(15, 25) + "pt"
    if (getRandomInt(100) > 75) {
        magic.innerText = ""
        
        let forms = document.createElement("form"); // создаем форму для поля ввода и кнопки
        magic.appendChild(forms);
        let textForm = document.createElement("textarea"); //поле ввода
        forms.appendChild(textForm);
        let bSave = document.createElement("input"); //кнопка
        bSave.type = "button";
        bSave.value = "Сохранить";
        forms.appendChild(bSave);


        bSave.onclick = function(){
          	forms.innerText = textForm.value;
        }
    }
}
div4.appendChild(button_4);



//5ая функция
let div5 = document.createElement("div");
functions.appendChild(div5);

let p5 = document.createElement("p");
p5.innerHTML = "Удаление таблицы";
div5.appendChild(p5);

let button_5 = document.createElement("button");
button_5.innerHTML = "Удалить таблицу";
functions.appendChild(button_5);
button_5.onclick = function(){

    newForm.classList.remove("d_none");
    document.querySelector("table").remove();
    let inputs = functions.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    functions.classList.add("d_none");
    h2.innerText = "";
    button_1.innerText = "Применить";
    
    
}
div5.appendChild(button_5);