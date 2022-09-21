function power(a) {
    return function (b){
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;  
    }
  }
  console.log(power(5)(2))