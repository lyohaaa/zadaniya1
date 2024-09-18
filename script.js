// 1
//alert("Я JavaScript!");
// 2
//let name = "Иван";
//let admin = name;
//alert(admin);

// 3
//let name = "Ilya"; 
//alert (`hello ${1}`); hello 1
//alert (`hello ${"name"}`); hello name
//alert (`hello ${name}`); ничего

//4
//let userName = prompt("Введите ваше имя: ")
//alert(`Ваше имя: ${userName}`)

// 5
//let a = 1, b = 1;
//let c = ++a; // 2
//let d = b++; // 1

//6
//let a = 2;
//let x = 1 + (a *= 2);
// a = 4, b = 5

//7
//let a = prompt("Первое число?", 1);
//let b = prompt("Второе число?", 2);
//alert(Number(a) + Number(b));

//8
//7 > 5 - true
//"стол" > "стул" - false
//"4" > "52" - true 
//undefined == null - true
//undefined === null - false
//null == "\n0\n" - false
//null === +"\n0\n" - false

//9
//if ("0") {
//    alert('Привет');
//} - Да

// 10
//let answer = prompt("Какое официальное название JavaScript?");
//if (answer === "ECMAScript") {
//    alert("Верно!")
//} else {
//    alert("Не знаете? ECMAScript!");
//}

//11
//let number = prompt("Введите число:");
//if (number > 0) {
//    alert(1);
//} else if (number < 0) {
//    alert(-1);
//} else {
//    alert(0);
//}

//12
//let result = (a + b < 4) ? 'Мало' : 'Много';

//13
//let message = (login == 'Сотрудник') ? 'Привет':
//(login == 'Директор') ? 'Здравствуйте':
//(login == '') ? 'Нет логина': '';

//14
//alert(null || 4 || undefined); // сначала 1, потом 2

//15
//alert(alert(1) || 2 || alert(3));

//16 - выведет null
//alert(1 && null && 2);

//17 - выведет 1 и undefined
//alert(alert(1) && alert(2));

//18 - выведет 3
//alert(null || 2 && 3 || 4);

//19 - выведет 30
//let value = NaN;

//value &&= 10;
//value ||= 20;
//value &&= 30;
//value ||= 40;

//alert(value);

//20
//let age = prompt("Введите возраст: ")
//if (age >= 14 && age <= 90) {
//    alert("Возраст находится в диапазоне от 14 до 90 включительно")
//}

//21
//let age = prompt("Введите возраст: ")
//if (age < 17 || age > 99) {
//    alert("Возраст не находится в диапазоне от 17 до 99")
//}

//22 
//if (-1 || 0) alert('first');
//if (-1 && 0) alert('second');
//if (null || -1 && 1) alert('third');

//23
let login = prompt("Введите логин: ");

if (login === "Админ") {
    let password = prompt("Введите пароль:");

    if (password === "Я главный") {
        alert("Здравствуйте!");
    } else if (password === null || password === "") {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (login === null || login === "") {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}