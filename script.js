

window.onload = function () {
    saludar();
}

function saludar() {
    let frase = "¡Hola, soy Danna Patricia!";
    const saludo = document.getElementById("saludo");
    for (let caracter = 0; caracter < frase.length; caracter++) {
        let caracterActual = frase.charAt(caracter);
        const letra = document.createElement("span");
        saludo.appendChild(letra);
        letra.textContent = caracterActual;
        setTimeout(() => {
            letra.style.opacity = "1";
            letra.style.visibility = "visible";
        }, 200 * caracter);
    }
}
