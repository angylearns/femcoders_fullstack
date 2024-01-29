




































function firstUnique(str) {

    // incializamos un objeto vacío
    let counts = {};
    // convertimos el string a minúsculas
    str = str.toLowerCase();
    
    // recorremos el string pasado por parámetro
    for (let i = 0; i < str.length; i++) {
        // si el caracter del string no existe en el objeto...
       if (!counts[str[i]]) {
        // ...le asignamos un 1, de que está 1 vez.
         counts[str[i]] = 1;
       // ...si ya existe...
       } else {
        // ...incrementamos en 1 las veces que está.
         counts[str[i]]++;
       }
    }

    // mostramos el objeto para ver qué está cociéndose por acá
    console.log(`↓ El objeto que muestra las letras y cuánto se repiten de ${str}`);
    console.log(counts);
    
    // volvemos a recorrer el string...
    for (let i = 0; i < str.length; i++) {
        // ...para encontrar el primer caracter que aparece una vez...
        if (counts[str[i]] === 1) {
            // ...y lo devolvemos.
            return str[i];
        }
    }

    // si no se encuentra el primer caracter que aparece una vez, devolvemos null. Porque todos los caracteres aparecen 2 o más veces
    return null;
    
}
   
console.log(firstUnique("analepsis"));
console.log(firstUnique("desdar"));
console.log(firstUnique("PAPA"));




/* Esta línea de código define una función llamada firstUnique que toma una cadena de texto como argumento (s) y devuelve el primer carácter que no se repite en la cadena. Aquí te explico cada parte:

    [...s]: Esto convierte la cadena de texto en un array. El operador ... es conocido como el operador de propagación (spread operator), y cuando se usa con un array, crea una copia superficial del array.

    .find(i => s.indexOf(i) == s.lastIndexOf(i)): Esto utiliza el método find del array, que devuelve el primer elemento que cumple con la condición especificada en la función de flecha. En este caso, la condición es que el índice del primer aparición del carácter en la cadena sea igual al índice de la última aparición. Si un carácter solo aparece una vez en la cadena, entonces estos dos índices serán iguales, lo que significa que el carácter no se repite.

    || null: Si la función find no encuentra ningún carácter que cumpla con la condición (es decir, si todos los caracteres se repiten), entonces devuelve null.

Por lo tanto, esta línea de código devuelve el primer carácter que no se repite en la cadena, o null si todos los caracteres se repiten.*/

// const firstUnique = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null