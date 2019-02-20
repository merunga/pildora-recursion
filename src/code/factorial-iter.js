function factorial(n) {
  if (n < 1) {
    throw new Error('Solo números enteros positivos');
  } else if (n === 1) {
    return 1;
  } else {
    let result = n;
    for (let i = n - 1; i >= 1; i = i - 1) {
      result = result * i;
    }
    return result;
  }
}
