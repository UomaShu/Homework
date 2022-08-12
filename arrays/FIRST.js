/*1. Юзер вводить 2 цілих числа x та y. Вивести на екран всі числа від x до y включно.*/
var str = prompt("Введите строку:");
var regular1 = new RegExp(/[^a-zа-яё]/gi);
var regular2 = new RegExp(/(.)(?=.*\1)/g);
var str2, str3;
str2 = str.replace(regular1, "");
  alert(str2);

str3 = str2.replace(regular1,"");

alert(str3);





