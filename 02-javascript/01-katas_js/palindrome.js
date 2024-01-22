/* 
Ejercicio: Palíndromo
Escribe una función llamada esPalindromo que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra, frase o secuencia que se lee igual de izquierda a derecha que de derecha a izquierda, sin tener en cuenta los espacios, puntuaciones ni mayúsculas y minúsculas.

Paso 1: Definir la función
    Crear una función llamada esPalindromo que acepte un parámetro de texto.
Paso 2: Limpiar el texto
    Eliminar los espacios, puntuaciones y convertir todas las letras a minúsculas. Esto es para asegurarnos de que las comparaciones sean consistentes.
Paso 3: Obtener la versión invertida del texto
    Crear una copia del texto y revertir su orden. Puedes utilizar algún método o enfoque para invertir la cadena.
Paso 4: Comparar el texto original con la versión invertida
    Comparar el texto original con la versión invertida para determinar si son iguales.
Paso 5: Devolver el resultado
    Devolver true si el texto es un palíndromo y false si no lo es. 
*/


let text1 = "Anita lava la tina";
let text2 = "Hola, mundo!"

function isPalindrome(txt) {
    // Pasamos a minúscula todo
    let lower = txt.toLowerCase();
    // Buscamos y reemplazamos todos los caracteres especiales (signo de exclamación, coma, punto, punto y coma, dos puntos y espacios ). La "g" al final de la expresión regular indica que la operación de reemplazo debe realizarse globalmente, es decir, que debe buscar y reemplazar todos los caracteres especiales en la cadena, no solo el primero que encuentre. Las comillas vacías detrás de la coma indica con lo que queremos reemplazar los caracteres de delante de la coma; es decir, queremos reemplazarlos por nada.
    let noSpecialCharacters = lower.replace(/[!,.;:\s]/g, "");
    // Convertimos el string sin espacios (noSpecialCharacters) en un array (split) y lo volvemos a unir y convertir en un string (join) ← Texto del derecho; de izquierda a derecha.
    let strLtR = noSpecialCharacters.split().join();
    // Convertimos el string escrito de izquierda a derecha en un array (split), le damos la vuelta (reverse) y lo volvemos a unir y convertir en un string (join) ← Texto del revés; de derecha a izquierda.
    let strRtL = strLtR.split().reverse().join();

    // Comparamos si ambas cadenas son iguales y devolvemos el resultado (que es un booleano, true o false)
    return strLtR === strRtL;
}

console.log(isPalindrome(text1));