let password, login;
login = prompt("Введите ваш логин:");
password = prompt("Введите ваш пароль:");
if (login == 'admin' && password == 'qWeRty123'){
    alert ("Доступ к сайту открыт");
}
else {
    alert("Пожалуйста, введите правильные данные")
}