let age;
age = prompt("Скільки вам років ?");
if (age>=10 && age<=20){
alert(`Вам ${age} років`)
} else if (age%10<5) {
alert(`Вам ${age} роки`)
} else if (age%100 >= 5){
    alert(`Вам ${age} років`)
} else if (age%100 == 1){
    alert(`Вам ${age} рік`)
}