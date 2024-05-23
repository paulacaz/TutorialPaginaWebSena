// Espera a que el documento esté completamente cargado para asegurar que todos los elementos HTML estén disponibles
document.addEventListener('DOMContentLoaded', function() {
    // Accede al formulario usando su ID
    const quizForm = document.getElementById('quiz-riego');

    // Añade un manejador de eventos para el evento 'submit'
    quizForm.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del formulario, que es enviar los datos y recargar la página
        event.preventDefault();

        // Obtén la respuesta del usuario del campo de entrada y normalízala (minúsculas y sin espacios adicionales)
        const userAnswer = quizForm.querySelector('input[name="respuesta1"]').value.toLowerCase().trim();

        // Define la respuesta correcta para la pregunta del quiz
        const correctAnswer = ['una vez', '1 vez', 'una vez por semana'];

        // Comprueba si la respuesta del usuario es correcta y muestra un mensaje adecuado
        if (correctAnswer.includes(userAnswer)) {
            alert('¡Correcto! Un cactus generalmente necesita ser regado una vez a la semana en verano.');
        } else {
            alert('Intenta nuevamente, recuerda investigar sobre el riego de un cactus en verano.');
        }
    });
});
