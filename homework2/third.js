let first, second, third, four, firstNumber, secondNumber, result;
first = prompt("Введите число");
second = prompt("Введите число");
third = prompt("Введите число");//
four = prompt("Введите число");//
firstNumber = Math.min (first, second, third, four);
secondNumber = Math.max (first, second, third, four);
result = firstNumber*secondNumber;
alert(result);