function factorial(n) {
  if (n < 1) {
    throw new Error('Solo numeros enteros positivos');
  }

  let accum = 1;
  for (let i = 1; i <= n; i++) {
    accum = accum * i;
  }
  return accum;
}
