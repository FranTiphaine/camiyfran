/* Ejercicio 1 */

function cambiarFondo(color) {
    document.querySelector('body').style.background = color;
}

/* Ejercicio 2 */

let text = document.getElementById('text');
let count = document.getElementById('count');

text.addEventListener('keyup', function () {
    count.innerText = text.value.length;
})

];