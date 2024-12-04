// Este código controlará la barra de carga y mostrará el mensaje cuando termine

// Obtenemos los elementos necesarios
const progressBar = document.getElementById("progress-bar");
const messageContainer = document.getElementById("message-container");
const captchaContainer = document.getElementById("captcha-container");

// Animamos la barra de progreso (16.7 segundos)
let progress = 0;
const interval = setInterval(() => {
    progress += 100 / 16.7;  // 100% dividido entre 16.7 segundos
    progressBar.style.width = `${progress}%`;

    // Cuando la barra de progreso alcanza el 100%
    if (progress >= 100) {
        clearInterval(interval);  // Detenemos la animación de la barra de progreso
        messageContainer.style.display = "block";  // Mostramos el mensaje
        captchaContainer.style.display = "block";  // Mostramos el captcha
    }
}, 100);
