// Interactividad del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulación de envío
    document.getElementById('formMessage').textContent = `Gracias, ${name}. Tu mensaje ha sido enviado.`;

    document.getElementById('contact-form').reset(); // Asegúrate de que el ID sea correcto
});
    

    