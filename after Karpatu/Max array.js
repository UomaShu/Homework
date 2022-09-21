function max(arr) {  
    if (arr[0] < arr[1]) {
      arr.splice(0, 1)
      max(arr)
    } else if (arr[0] > arr[1]) {
      arr.splice(1, 1)
      max(arr)
    }
    return arr[0]
   }
  console.log(max([8]), 'one element test, must return 8');
  
  console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
  
  console.log(max([8, 17]), '2 elements test, must return 17');
  