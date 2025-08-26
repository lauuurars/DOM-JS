//console.log(document); document es una palabra reservada que nos sirve para mostrar los logs en la consola del navegador.

const content = document.getElementById('content'); //nos permite hacer cualquier operación llamando el id de un elemento en html.Muestra el primer nodo hijo del contenedor al que estamos llamando. retorna null si no hay ningún elemento con el id solicitado. 

console.log(content);

// Usamos const para guardar el elemento dentro de la nueva varianble. En const se pueden modificar las propiedades que componen a la variable, más no se modifica su valor.

const URL = document.URL
console.log(URL);

const titlesWithSpan = document.querySelectorAll('.title > span'); //llama por medio de clases
console.log(titlesWithSpan); 
// al mostrar los elementos en consola los guarda en una node list (array) que muestra clave y valor.}

//('.title > span') obtenemos el span dentro del elemento title.

const description = document.querySelector('.description');
const changeTextBtn = document.getElementById('changeText');
const addElementBtn = document.getElementById('addElement');
const toggleClassBtn = document.getElementById('toggleClass');
const lista = document.getElementById('itemList');
const form = document.getElementById('myForm');
const textForm = document.getElementById('inputField');
const checkboxForm = document.getElementById('myCheckbox');
const submitForm = document.getElementById('submitForm');

console.dir({
    description,
    changeTextBtn,
    addElementBtn,
    toggleClassBtn,
    lista,
    form,
    textForm,
    checkboxForm,
    submitForm
});