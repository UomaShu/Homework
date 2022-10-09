function unique(arr) {
    let mySet = new Set();

    for (let i = 0; i < arr.length; i++){
        mySet.add(arr[i]);
    }
    return mySet;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); 