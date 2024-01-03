function sum(x, y, z=1) {
    return x + y + z;
  }
  
  const number1 = [1, 2, 3];
  
  console.log(sum(...number1));

  const number2 = [1,2];

  console.log(sum(...number2));