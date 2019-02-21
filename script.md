# Recursión

## Intro

Hola! Hoy vamos a hablar de recursión, pero antes de ir a definiciones teóricas
comencemos con un ejemplo.

El ejemplo más común y simple es el de la función ***factorial***.

En la matemática, la función factorial de un número entero positivo ***n*** se define
como el producto (multiplicación) de todos los números enteros positivos
menores o iguales que ***n***, y se denota de la siguiente manera: ***n!***.

```
n! = 

Por ejemplo:
```
factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
```

Ahora, si la expresión anterior, podemos ver que:

```
factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 // Solo está definida para números enteros positivos
```

Si reemplazamos progresivamente todo lo anterior, volvemos al comienzo:
```
factorial(5) =
= 5 * factorial(4) = 
= 5 * (4 * factorial(3)) =
= 5 * (4 * (3 * factorial(2))) =
= 5 * (4 * (3 * (2 * factorial(1)))) =
= 5 * (4 * (3 * (2 * (1)))) =
= 5 * 4 * 3 * 2 * 1 =
= 120
```

### Implementación

Bien, entonces implementemos nuestra función `factorial`
en `javascript`:

```
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

factorial(5); // retorna 120

```

Si analizamos la implementación anterior, podemos ver que poco tiene que ver
con la definición matemática del problema.

Entonces ahora realicemos una segunda implementación, pero inspirándonos
en la definición original:

```
function factorial(n) {
  if (n < 1) {
    throw new Error('Solo números enteros positivos');
  }

  if (n === 1) {
    return 1;
  }
  return (n * factorial(n - 1));
}

factorial(5); // retorna 120

```

Mas elegante, no? Ahora la implementación de `factorial(n)`,
está expresada en función de `factorial(n-1)`.


Y esa es la definición de una función recursiva:
*una función que se llama a sí misma*.

Y en general podemos hablar de **recursión** cómo un método para resolver
problemas, donde la solución global depende de la solución de instancias
más pequeñas del mismo problema.

Algo muy importante de recordar:
> Toda función recursiva cuenta con un caso base, que es un paso donde
> la función retorna un resultado, sin incurrir en recursión.

Ten en cuenta que si tus funciones recursivas no cuentan con un caso base,
No terminarían nunca de ejecutarse... en realidad terminan de ejecutarse,
cuando agotan los recursos asignados.

```
function olvideMiCasoBase() {
  olvideMiCasoBase();
}

olvideMiCasoBase();

// InternalError: too much recursion

```

Fibonacci
El numero de fibonacci asociado a un numero n se define de la siguiente manera

Fibonacci de 0 es cero
Fibonacci de 1 es uno
Y fibonacci de n, para n > 1, es igual al fib(n - 1) + fib(n - 2)
 

# Estructuras recursivas
ASi como existen las funciones recursivas, tb existen los tipos de datos recursivos.
Estos se caracterizan por estar compuestos por instancias mas pequeñas con la misma estructura.
Al tener esta caracteristica
muchas de las operaciones que se pueden realizar sobre ellos, son a su vez recursivas.

Veamos un ejemplo que ya seguro conoces: el DOM

Los arboles (como el DOM) son estructuras jerarquica con forma, donde todos los nodos exceptuando el nodo raiz, tienen
un solo padre, y pueden tener 0, 1 o mas hijos. Estos hijos tienen a su vez la misma caracteristica: tienen un solo padre y pueden tener 0, 1 o mas hijos, que a su vez tienen la misma caracteritica: tienen un solo padre y pueden tener 0, 1 o mas hijos... etc, etc, etc.

Ahora bien, veamos un ejemplo de como recorrer todos los elementos del DOM con una funcion recursiva

