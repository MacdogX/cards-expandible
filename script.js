const panels = document.querySelectorAll('.panel'); /* Selecciona todos los elementos con la clase 'panel' y los almacena en la variable panels */

panels.forEach(panel => { /* Para cada panel seleccionado */
    panel.addEventListener('click', () => { /* Agrega un evento 'click' */
        removeActiveClasses(); /* Llama a la función removeActiveClasses() para eliminar todas las clases 'active' */
        panel.classList.add('active'); /* Agrega la clase 'active' al panel clicado */
    });
});

function removeActiveClasses() { /* Función para eliminar la clase 'active' de todos los paneles */
    panels.forEach(panel => { /* Para cada panel */
        panel.classList.remove('active'); /* Elimina la clase 'active' */
    });
}