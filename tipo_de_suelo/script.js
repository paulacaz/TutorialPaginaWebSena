document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-riego');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userAnswer = quizForm.querySelector('input[name="respuesta1"]').value.toLowerCase().trim();
        const correctAnswers = ['corteza de pino', 'musgo', 'el musgo', 'la perlita', 'perlita']; // Suponiendo respuestas correctas

        // Verifica si la respuesta del usuario está en el array de respuestas correctas
        if (correctAnswers.includes(userAnswer)) {
            alert('¡Correcto! La corteza de pino, el musgo y la perlita son suelos adecuados para orquídeas.');
        } else {
            alert('Incorrecto. Considera investigar más sobre los suelos adecuados para orquídeas.');
        }
    });
});
