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



let arr1 = [1,2,3]

function popSecond (array) {
    var array = [];
    array = arr1 - 1;
    var i = array.length;
    return array[i] - 1;
}
console.log(popSecond(arr1))


