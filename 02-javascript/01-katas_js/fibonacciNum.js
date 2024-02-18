/* 

    Obtenemos los dos primeros números iniciales de la secuencia de Fibonacci, 0 y 1, y el siguiente número en la secuencia siempre es la suma de los dos números anteriores. Fibonacci la introdujo en 1202, en su libro Liber Abaci.

    Asi que, ¿cuál será nuestra tarea? Deberíamos escribir una función fib(), que toma un parámetro posicion y devuelve un número de la secuencia basado en el parámetro posicion que le damos, que determina la posición del número en la secuencia que quere os que devuelva.

    Por ejemplo, fib(0) devuelve 0, fib(4) devuelve 3, fib(15) devuelve 610.

    ----
    (0), 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, ∞
    */

// 1. Creamos una función que acepte un número posicion como argumento. Este número será el índice/posición de la secuencia de Fibonacci que deseamos calcular.

function fib(posicion) {
    // 2. Comprobamos si posicion es 0 o 1. Si es así, devolvemos posicion, ya que son los dos primeros números de la secuencia y aún no se suman con nadie.
    if (posicion <=  1) {
        return posicion;
    }

    // 3. Defininos dos variables, a y b, y les asignamos lo dos primeros números de la secuencia (por ejemplo, a = 0 y b = 1).
    let a =  0;
    let b =  1;

    // 4. Utilizamos un bucle for que comienza en 2 (porque los dos primeros números de la secuencia ya han sido definidos como 0 y 1) y continúa hasta posicion.  
    for (let i =  2; i <= posicion; i++) {
        console.log("♥");
        console.log(`El valor de i en el bucle es ${i}, el de a es ${a} y el de b es ${b}.`);

        // En cada iteración del bucle, calcula la suma de a y b y almacena el resultado en una variable suma.
        let suma = a + b;
        console.log(`La suma de a y b es ${suma}`);
        

        // Luego, actualiza a y b para la próxima iteración:

        // Ahora a es b, porque el segundo número (b) de la suma de esta iteración pasará a ser el primer número (a) de la suma de la siguiente iteración.
        a = b;
        console.log(`Ahora, a es ${a}.`);

        // Y b pasa a ser suma, que, de acuerdo con esta secuencia numérica, es el siguiente número, pues la suma de los dos números anteriores es el número siguiente.
        b = suma;
        console.log(`Ahora b es ${b}.`);
    }
    // 5. Al final del bucle, b contendrá el número que está en la posición que mandamos como parámetro. Devuelve b como el resultado de la función.
    return b;
}

console.log(fib(9)); 
console.log(fib(10)); 
console.log(fib(15)); 
console.log(fib(3)); 
console.log(fib(20)); 
console.log(fib(5)); 















// Otra forma común de calcular la secuencia de Fibonacci es mediante programación dinámica, que es más eficiente que la recursión para valores grandes de posicion, ya que evita cálculos redundantes.


function fibonacci(posicion) {
  if (posicion <=  1) {
    return posicion;
  }

  // En este enfoque, se crea un array fib (de largo posicion + 1) para almacenar los números de Fibonacci calculados hasta el momento.
  let fib = new Array(posicion +  1);
  // Se inicializan los dos primeros números de la secuencia (0 y 1) en las posiciones correspondientes del array.
  fib[0] =  0;
  fib[1] =  1;

  // Luego, para cada número de la secuencia que aún no se ha calculado, se suman los dos números anteriores en el array y se almacena el resultado en la posición correspondiente.
  for (let i =  2; i <= posicion; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // Al final, se devuelve el número de la posición que buscamos, que se encuentra almacenado en el array.
  return fib[posicion];
}

console.log("Función fibonacci:")
console.log(fibonacci(10)); //  55
console.log(fibonacci(15)); //  610


