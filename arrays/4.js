/*let arr1 = [1,2,3]

function pushSecond (array, value) {
    let i = array.length;
    array[i] = value;
    return array;
}
console.log(pushSecond(arr1, 3))*/


//Добавить новый элемент масива в начало
/*let array1 = [2, 4, 11, 7];

function unshiftSecond(array,value) {
    var array = [];
    array[0] = value;
    for (let i = 0; i < array1.length; i++) {
        array[array.length] = array1[i];
    }
    array1 = array;
    return console.log(array1)
}
unshiftSecond(array1, 1)*/



/*let arr1 = [1,2,3]

function popSecond (array) {   
    let save = array[array.length - 1];
    array.length = array.length - 1;
    
    return save;
}
console.log(popSecond(arr1))*/

let arr1 = [1,2,3]

function shiftSecond (array) {
    let save = array[0];
    let arr = [];
    for (let i = 0; i < array.length; i++){
             arr[i] = array[i + 1];
    }   
    return save;
}   console.log(shiftSecond(arr1))

// изменить оригинальный массив!
// Например сравнить / без доп массива 
