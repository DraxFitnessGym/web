document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            e.preventDefault(); // Evita el envío del formulario
        }

        // Validación del campo de mensaje
        if (message.trim() === '') {
            alert('El campo de mensaje no puede estar vacío.');
            e.preventDefault(); // Evita el envío del formulario
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('form').addEventListener('submit', function (e) {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            // Validación de correo electrónico
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Por favor, ingresa una dirección de correo electrónico válida.');
                e.preventDefault(); // Evita el envío del formulario
            }
    
            // Validación del campo de mensaje
            if (message.trim() === '') {
                alert('El campo de mensaje no puede estar vacío.');
                e.preventDefault(); // Evita el envío del formulario
            }
        });
    
    })})
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('caloriasForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Evita el envío del formulario
            const age = parseFloat(document.getElementById('age').value);
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const gender = document.getElementById('gender').value;
            const activityLevel = parseFloat(document.getElementById('activity').value);
    
            let bmr; // Tasa Metabólica Basal (BMR)
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }
    
            const dailyCalories = (bmr * activityLevel).toFixed(2);
    
            document.getElementById('caloriasResult').textContent = `Tu requerimiento calórico diario es de ${dailyCalories} calorías, este valor es aproximado lo mejor que puedes hacer es ir a un experto.`;
        });
    });
    document.getElementById('interesadosForm').addEventListener('submit', function() {
        alert('Formulario enviado. Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
    });
    
