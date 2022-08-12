/* Юзер вводить розмір массиву. Після цього юзер вводить один за одним значення в масив.

Вивести створений масив на екран.

 Знайти мінімальний і максимальний елементи створеного масиву і поміняти їх місцями. Вивести результат: Мінімальний = . Максимальний =. Новий масив =.*/




 var arr = [];
 let x = parseInt(prompt("Введите размер массива"));
 
 for (let i = 0; i < x; i++ ) {
     arr[i] = parseInt(prompt("Введите значение массива:"));
 }   
 /*var mini = Math.min(...arr);
 var maxi = Math.max(...arr);   */ 

 /*var replace1 = arr[maxi - 1];
 arr[maxi - 1] = arr[mini];
 arr[mini] = replace1;
 alert(arr);
*/



let min = arr[0]; 
let max = arr[0];
var minIndex = arr.indexOf(Math.min(...arr));
var maxIndex = arr.indexOf(Math.max(...arr));


for (let i = 0; i < arr.length - 1; i++){
   // min = min > arr[i + 1] ? arr[i + 1] : min;
    if (min > arr[i + 1]){
        min = arr[i + 1];
    }
    //max = max < arr[i + 1] ? arr[i + 1] : max;
    if (max < arr[i + 1]) {
        max = arr[i + 1]
    }

    console.log(arr[i]);
}
alert(`Минимальное значение: ${min}, Максимальное значение: ${max}`)
var replace1 = arrp[minIndex];
arr[minIndex] = arr[maxIndex];
arr[maxIndex] = replace1
console.log(arr)


/* 1. i = 0  4      arr[i+1] = 0
    2. i = 1 0      arr[i+1] = 2        
    3. i = 2 2      arr[i+1] = und

 */


// alert(arr);
     
