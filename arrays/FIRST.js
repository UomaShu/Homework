/*Юзер вводить довільну строку, це може бути і числа і літери, і додаткові символи.
Очисти строку і залиши тільки літери в нижньому регістрі, дублікати букв, в нижньому регістрі прибрати.

Приклад :
Юзер ввів - Фоьв34*%(а)завж  
Результат - оьвазж*/









var str = prompt("Введите строку:");
var regular1 = new RegExp(/[^a-zа-яё]/gi);
var regular2 = new RegExp(/(.)(?=.*\1)/g);
let str2, str3;
let result = "";
str2 = str.replace(regular1, "");
  alert(str2);

str3 = str2.replace(regular2,"");

alert(str3);

for(let i = 0; i < str3.length; i++){
  if (str3[i].toLowerCase() === str[i]){
    result += str3[i];
  }
}
alert(result);

/*
i = 0   i = 1
[0] = Ф [1] = л
false   true
буква в аппер кейсе с оригинальной буквой
Ф === Ф true
Л === л false
К === К true
*/

