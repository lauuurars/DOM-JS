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

function activarMensaje() {
    console.log('Botón presionado!!')
}

changeTextBtn.addEventListener('click', () => {
    const textElement = document.querySelector('.text')
    textElement.textContent = 'Holi mundo cruel'
    textElement.setAttribute('style', 'color: red')
}); //tenemos 2 propiedades, el evento que escucha y la función que debe de ejecutar cuando el evento ocurra. 

addElementBtn.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.className = 'item'
    console.dir(itemList.children.length)
    newItem.textContent = `Item ${itemList.children.length + 1}`
    itemList.appendChild(newItem);
    itemList.scrollTo(0, itemList.scrollHeight) //mantiene el scroll siempre en la parte de abajo:p
})

//toggle class

let darkMode = true

toggleClassBtn.addEventListener('click', () => {
    content.classList.toggle('highlight') //sirve para poner o quitar un estilo cuando presionamos un btn.
    const container = document.getElementById('container')
    container.style = `background-color: ${darkMode ? 'black' : 'white'}`;
    darkMode = !darkMode
})

form.addEventListener('submit', (e) => {
    e.preventDefault(); //previene de hacer la actualización de la pagina 
    console.log('Formulario enviado')
    const inputText = inputField.value
    const  isChecked = myCheckbox.value
    alert(`Mensaje ingresado: ${inputText} Verificó? ${isChecked ? 'Si' : 'No'}`);
    form.reset(); // limpia los campos del formulario
})