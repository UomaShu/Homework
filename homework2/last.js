let firstNumber, secondNumber, firtHorseMove, secondHorseMove;
firstNumber = parseInt(prompt("Введите первое число позиции коня в промежутке (1-8)"));
secondNumber = parseInt(prompt("Введите второе число позиции коня в промежутке (1-8)"));
firtHorseMove = parseInt(prompt ("Введите первое  число движения коня в промежутке (1-8)"));
secondHorseMove = parseInt(prompt ("Введите первое  число движения коня в промежутке (1-8)"));

const isHorseMove = Number.isInteger(firtHorseMove);
const isHorseMoveSecond = Number.isInteger(secondHorseMove);
const isFirstNumber = Number.isInteger(firstNumber);
const isSecondNumber = Number.isInteger(secondNumber);
const upRight = firstNumber + 2 === firtHorseMove && secondNumber + 1 === secondHorseMove;
const shortUpRight = firstNumber + 1 === firtHorseMove && secondNumber + 2 === secondHorseMove;
const downRight = firstNumber - 2 === firtHorseMove && secondNumber + 1 === secondHorseMove;
const shortDownRight = firstNumber - 1 === firtHorseMove && secondNumber + 2 === secondHorseMove;
const upLeft = firstNumber + 2 === firtHorseMove && secondNumber - 1 === secondHorseMove;
const shortUpLeft = firstNumber + 1 === firtHorseMove && secondNumber - 2 === secondHorseMove;
const downLeft = firstNumber - 2 === firtHorseMove && secondNumber - 1 === secondHorseMove;
const shortDownLeft = firstNumber - 1 === firtHorseMove && secondNumber - 2 === secondHorseMove;

if (isFirstNumber === true && isSecondNumber === true && isHorseMove === true && isHorseMoveSecond === true){

    if ((firstNumber <=8 && secondNumber <=8) && (firstNumber >=1 && secondNumber >=1) && (firtHorseMove <=8 && secondHorseMove <=8) && (firtHorseMove >=1 && secondHorseMove >=1)){
        if (upRight || shortUpRight || downRight || shortDownRight || upLeft || shortUpLeft || downLeft || shortDownLeft){
            alert(`Вы находитесь на позиции ${firtHorseMove} ${secondHorseMove}`);
         } 
         else {
             alert("Вы ввели позицию на которую не можете встать");
         }

    } else {
        alert("Вы вышли за рамки промежутка, пожалуйста введите число в промежутке (1-8)")
    }
} else {
    alert ("Вы ввели не число, введите пожалуйста число")
}


/*
if (isHorseMove === true && isHorseMoveSecond === true){

    if ((firtHorseMove <=8 && secondHorseMove <=8) && (firtHorseMove >=1 && secondHorseMove >=1)){
        

    }else {
        alert("Вы вышли за рамки промежутка, пожалуйста введите число в промежутке (1-8)")
    }
}else {
    alert ("Вы ввели не число, введите пожалуйста число")
}*/
/*
if (upRight || shortUpRight || downRight || shortDownRight || upLeft || shortUpLeft || downLeft || shortDownLeft){
   alert(`Вы находитесь на позиции ${firtHorseMove} ${secondHorseMove}`);
} 
else {
    alert("Вы ввели позицию на которую не можете встать");
}*/