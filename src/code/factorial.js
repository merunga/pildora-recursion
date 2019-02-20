function factorial(n) {
  if (n < 1) {
    throw new Error('Solo números enteros positivos');
  }

  if (n === 1) {
    return 1;
  }
  return (n * factorial(n - 1));
}
