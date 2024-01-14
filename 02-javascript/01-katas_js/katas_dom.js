// Generar una pantalla en la que: || Generate a screen that:

// 1) Haya texto y un botón que permita modificar ese texto. || Has a text and a button that allows you to modify that text.
function changeText() {
    document.querySelector('#k1 p').innerHTML = "Mi <em>modificado</em> texto.";
}

// 2) Haya texto y un botón que permita cambiar el color del texto. || Has a text and a button that allows you to change the color of the text.
function changeColor() {
    document.querySelector('#k2 p').style.color = 'red';
}

// 3) Haya texto y un botón que permita subrayar el texto. || Has a text and a button that allows you to underline the text.
function underline() {
    document.querySelector('#k3 p').style.textDecoration = 'underline';
}
// 4) Haya texto y un botón que permita ocultar el texto. || Has a text and a button that allows you to hide the text.
function hide() {
    document.querySelector('#k4 p').style.display = 'none';
}
// 5) Haya texto y un mismo botón que haga alternar el texto entre subrayado y no subrayado. || Has a text and a button that allows you to alternate the text between underlined and not underlined.
function changeUnderline() {
    let paragraph = document.querySelector('#k5 p');

    if (paragraph.style.textDecoration === "") {
        paragraph.style.textDecoration = 'underline';
    } else if (paragraph.style.textDecoration === 'underline') {
        paragraph.style.textDecoration = '';
    }
}


// 6) Haya texto y un mismo botón que permita alternar el texto entre oculto y no oculto. || Has a text and a button that allows you to alternate the text between hidden and not hidden.
function hideAndSeek() {
    let paragraph = document.querySelector('#k6 p');

    if (paragraph.style.display === '') {
        paragraph.style.display = 'none';
    } else if (paragraph.style.display === 'none') {
        paragraph.style.display = '';
    }
}

// 7) Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro una vez. || Has a box and a button that allows you to create a box inside of that box once.
function createBox() {
    let sectionK7 = document.getElementById("k7");
    let div = document.querySelector('div');
    
    if (!sectionK7.contains(div)) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("divK7");
        let btn = document.querySelector("#k7 button");
        sectionK7.insertBefore(newDiv, btn);
    }
}


// 8) Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro tantas veces como se quiera. || Has a box and a button that allows you to create a box inside of that box as many times as you want.
// 9) Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro hasta cinco veces máximo. || Has a box and a button that allows you to create a box inside of that box up to five times.
// 10) Haya un recuadro, un botón que permita crear cajas dentro de ese recuadro y otro botón que permita eliminarlas, de una en una. || Has a box, a button that allows you to create boxes inside of that box and another button that allows you to delete them one by one.
// 11) Haya un formulario con un campo, una caja y un botón. El botón deberá crear el contenido del formulario dentro de la caja. || Has a form with a field, a box and a button. The button should create the content of the form inside the box.
// 12) Haya un formulario con tres campos, una caja y un botón. El botón deberá crear el contenido de los tres campos dentro de la caja, a la vez. || Has a form with three fields, a box and a button. The button should create the content of the three fields inside the box, at the same time.
// 13) Haya un formulario con tres campos, una caja y un botón. El botón deberá crear el contenido de los tres campos dentro de la caja, a la vez y rodeados por un borde o marco. || Has a form with three fields, a box and a button. The button should create the content of the three fields inside the box, at the same time and surrounded by a border or frame.
// 14) Ídem 13. El formulario deberá poder ser utilizado varias veces, creando cada vez el contenido enmarcado correspondiente. || Same as 13. The form should be able to be used multiple times, creating the content in the corresponding frame.
// 15) Ídem 14) con el añadido de que tras usar cada vez el botón, el formulario debe resetearse. || Same as 14) with the addition of that the button should reset the form.
// 16) Haya un formulario con un campo, una tabla y un botón. El botón deberá permitir ingresar números como registros de la tabla. || Has a form with a field, a table and a button. The button should allow you to enter numbers as records of the table.
// 17) Haya un formulario con dos campos, una tabla y un botón. El botón ingresará dos números y la suma de ambos en cada registro de la tabla. || Has a form with two fields, a table and a button. The button should enter two numbers and the sum of both in each record of the table.
// 18) Haya un formulario con dos campos, una tabla y un botón. El botón deberá ingresar los dos campos en cada registro de la tabla y también un id incremental. || Has a form with two fields, a table and a button. The button should enter the two fields in each record of the table and have an incremental id.
// 19) Ídem ejercicio 18) con el añadido de que deberá haber un botón para eliminar registros. || Same as 18) with the addition of that the button should be able to delete records.
// 20) Ídem ejercicio 19) con el añadido de que deberá haber un botón para modificar registros. || Same as 19) with the addition of that the button should be able to modify records.
// 21) Un formulario con tres campos, nombre, apellido y color favorito por string (entre tres opciones pre determinadas) y un botón. El botón deberá ingresar en una caja el nombre, el apellido y el color favorito correspondientes. El color favorito debe estar ingresado en la caja como imagen (un cuadrado rojo, por ejemplo). El botón debe poder ser reutilizado varias veces para reemplazar el contenido de la caja. || A form with three fields, name, surname, and favorite color by string (among three predefined options) and a button. The button should enter the corresponding name, surname, and favorite color into a box. The favorite color should be entered into the box as an image (for example, a red square). The button should be able to be reused several times to replace the content of the box.