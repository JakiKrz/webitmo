"use strict";

let bodyWrite = document.write("Ya Javascript"); //1.1
let text=document.body.innerText;
document.write("<br>");
document.write(text.split(" ").length," ", text.split(" ").join("").length); //1.2
document.write("<br>");

let hrefLocal= document.location.href;
document.write(hrefLocal); //1.5
document.write("<br>");

let hrefProtocol = document.location.protocol;
document.write(hrefProtocol);
document.write("<br>");

let fileFullName = document.location.pathname.split("/").pop();
document.write(fileFullName);
document.write("<br>");          

let fileName = fileFullName.split(".")[0];
let fileExtension = fileFullName.split(".")[1];
document.write(fileName);
document.write("<br>");        
document.write(fileExtension);
document.write("<br>");

let obj = {};
let raw = document.location.search.substring(1).split("&");
for (let i = 0; i < raw.length; i++) {
    let key = raw[i].split("=")[0]
    let value = raw[i].split("=")[1]
    obj.key = value
    document.write(key, ": ", value, "<br>")
}

//2.1
let hrefs = ["google.com","yandex.ru","yahoo.com","tesla.com"];
for (let i = 0; i < 4; i++) {
	let anch = document.createElement("a");
	anch.href = "https://" + hrefs[i];
	anch.innerHTML = "Сайт " + (i+1) + "<br>";
	document.body.appendChild(anch);
}

//2.2
for (let i = 1; i < 3; i++) {
	let ref = document.createElement("link");
	ref.rel = "stylesheet";
	ref.href = "style" + i + ".css";
	document.body.appendChild(ref);
}

//2.3
let imagesrc = [
    "https://torrentgamer.net/uploads/posts/2017-07/1499361801_the-witcher-3-blood-and-wine-torrent.jpg",
    "https://i.pinimg.com/236x/f6/68/34/f668346964a746c1baa1d9ce35bf94fe--fantasy-characters-gothic.jpg",
    "https://steamuserimages-a.akamaihd.net/ugc/834703110756849100/AE76EAAB9CA12B0F308410CEEFD69E0B71710D38/?imw=724&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"   
]
for (let i = 0; i < 3; i++) {
    let image = document.createElement("img")
    image.id = "id" + i
    image.src = imagesrc[i]
    document.body.appendChild(image)
}
document.body.appendChild(document.createElement("br"));

//2.4-2.5
document.write("Количество анкоров: ", document.getElementsByTagName("a").length, "<br>");
document.write("Количество ссылок: ", document.getElementsByTagName("link").length, "<br>");

//2.6
document.write("Содержимое первого анкора: ", document.getElementsByTagName("a")[0].innerHTML);

//2.7
document.write("Количество картинок: ", document.getElementsByTagName("img").length);

//2.8
let widthText = document.createElement("p");
document.body.appendChild(widthText);
function widthImage(){
    widthText.innerText = "Ширина первой картинки: " + document.getElementsByTagName("img")[0].width + "px";
  }  
setTimeout(widthImage, 50);

//2.9
let mostWidthText = document.createElement("p");
document.body.appendChild(mostWidthText);
let images = document.getElementsByTagName("img");
function maxWidthImage(){
   let maxWidth = 0;
   for (let i=0; i < images.length; i++){
       if (maxWidth < images[i].width){
           maxWidth = images[i].width;
       }
   }
   mostWidthText.innerText = "Ширина самой широкой картинки: " + maxWidth + "px";
} 
setTimeout(maxWidthImage, 50);

//2.10
let sumHeightText = document.createElement("p");
document.body.appendChild(sumHeightText);
function sumAllHeights(){
   let sumHeight = 0;
   for (let i=0; i < images.length; i++){
      sumHeight += images[i].height;
   }
   sumHeightText.innerText = "Сумма высот всех картинок: " + sumHeight + "px";
}
setTimeout(sumAllHeights, 50);

//3.1
let forms=[]
for (let i = 0; i < 10; i++) {
    let form = document.createElement("form")
    form.id = "form" + (i + 1)
    form.name = "form" + (i + 1)
    forms.push(form);
    document.body.appendChild(form)
}
//3.2
let evenforms = []
for (let i = 0; i < 10; i++){
    if (i % 2 == 0) {
    evenforms.push(forms[i+1].name)
};
}   
document.write("Все четные формы: ", evenforms.join(", "))

//3.3
let types = ["checkbox","date","color", "password","submit"]
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 3; j++){
        let field = document.createElement("input")
        field.type = types[Math.round(Math.random() * 4)]
        forms[i].appendChild(field)
    }
}

//3.4
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class1")
    but.onclick = function(){
        alert(but.innerText);
        return false;
    }
    but.innerText = "Показать имя формы"
    forms[i].appendChild(but)
}

//3.5
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class2")
    but.onclick = function(){
        alert(but.parentNode.id);
        return false;
    }
    but.innerText = "Принадлежность"
    forms[i].appendChild(but)
}

//3.6
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class3");
    but.onclick = function(){
        but.parentNode.reset();
        return false;
    }
    but.innerText = "Сбросить"
    forms[i].appendChild(but)
}

//3.7
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class4")
    but.onclick = function(){
        alert(but.parentNode.getElementsByTagName("input").length);
        return false;
    }
    but.innerText = "Показать количество полей"
    forms[i].appendChild(but)
}