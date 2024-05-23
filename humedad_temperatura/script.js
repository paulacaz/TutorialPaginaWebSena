document.addEventListener('DOMContentLoaded', function() {
    // Obtén el formulario usando su ID
    const quizForm = document.getElementById('quiz-riego');

    // Añade un manejador de eventos para el evento 'submit'
    quizForm.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto de enviar el formulario, que causaría la recarga de la página
        event.preventDefault();

        // Obtiene el valor ingresado por el usuario en el campo de respuesta, lo convierte a minúsculas y elimina espacios blancos innecesarios
        const userAnswer = quizForm.querySelector('input[name="respuesta1"]').value.toLowerCase().trim();

        // Define la respuesta correcta (podrías tener varias respuestas válidas en un array si lo prefieres)
        const correctAnswer = '60%';  // Supongamos que la humedad relativa ideal es del 60%

        // Compara la respuesta del usuario con la respuesta correcta
        if (userAnswer === correctAnswer) {
            alert('¡Correcto! La humedad relativa ideal para la mayoría de las plantas tropicales es del 60%.');
        } else {
            alert('Incorrecto. La humedad relativa ideal para la mayoría de las plantas tropicales es del 60%, esto ayuda a emular su ambiente natural.');
        }
    });
});
