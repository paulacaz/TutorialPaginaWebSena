document.addEventListener('DOMContentLoaded', function() {

   
    // Manejo de los botones "Mostrar más/Mostrar menos"
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const content = button.previousElementSibling;
        if (button.type !== 'submit') {  // Asegurarse de no afectar el botón de enviar en el formulario
            content.style.display = 'none';
            button.textContent = 'Mostrar más';

            button.addEventListener('click', function() {
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    button.textContent = 'Mostrar menos';
                } else {
                    content.style.display = 'none';
                    button.textContent = 'Mostrar más';
                }
            });
        }
    });

    // Animación para botones de redes sociales
    const socialLinks = document.querySelectorAll('#redes-sociales a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Manejo del envío del formulario de contacto
    const contactForm = document.querySelector('#contacto form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Previene el envío del formulario para demostración
        alert('Mensaje enviado! Gracias por contactarnos.');
        contactForm.reset();  // Resetea el formulario después del envío (simulado)
    });
});

articles.forEach(article => {
    const button = document.createElement('button');
    button.textContent = 'Mostrar más';
    article.appendChild(button);
    const p = article.querySelector('p');
    p.style.display = 'none';

    button.addEventListener('click', () => {
        if (p.style.display === 'none') {
            p.style.display = 'block';
            button.textContent = 'Mostrar menos';
        } else {
            p.style.display = 'none';
            button.textContent = 'Mostrar más';
        }
    });
});

