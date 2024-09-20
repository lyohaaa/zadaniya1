//1
function changeText() {
    document.getElementById("paragraph").innerText = "Изменённый текст";
}

//2
function addClass() {
    document.getElementById("mainDiv").classList.add("newClass");
}

//3
function changeColor() {
    document.getElementById("color").style.color = "blue";
}

//4
function changeContent() {
    document.getElementById("content").innerText = "Содержимое has changed";
}

//5
function addListElement() {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.innerText = "Новый элемент";
    ul.appendChild(li);
}