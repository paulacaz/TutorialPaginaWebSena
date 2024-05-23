document.getElementById('quiz-luz').addEventListener('submit', function(event) {
    event.preventDefault();
    let respuesta = this.respuesta1.value.toLowerCase();
    if (respuesta === 'ficus') {
        alert('¡Correcto! El Ficus prefiere la luz indirecta.');
    } else {
        alert('Intenta nuevamente, recuerda investigar sobre la luz que necesitan diferentes plantas.');
    }
});
