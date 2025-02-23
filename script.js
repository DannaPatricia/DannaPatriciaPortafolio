
let contador = 0;
let numeroBolas = 18;
window.onload = function () {
    saludar();
    generaBolas(numeroBolas);
}

$(document).ready(function(){
    $("#btnDesplegar").on({
        click: function(){
            $("#desplegable").slideToggle(900);
            $("#desplegable").css('display', 'flex');
            let texto = (contador % 2 != 0 ? 'Conócememe mejor' : ' Dejar de conocerme');
            numeroBolas = (contador % 2 != 0 ? 14 : 26);
            $(this).text(texto);
            contador++;
            $("#bolitasContainer .bolitas").fadeOut(500, function() {
                $("#bolitasContainer").empty();
                generaBolas(numeroBolas);
            });
        }        
    })
})

function generaBolas(numeroBolas){
    let style = 5;
    const main = document.querySelector("#bolitasContainer");
    for (let i = 1; i <= numeroBolas; i++) {
        console.log(numeroBolas);
        const bolita = document.createElement("div");
        bolita.setAttribute("id", i);
        bolita.classList.add("bolitas");
        bolita.style.top = `${style}em`;
        main.appendChild(bolita);
        style = style + 20; 
    }
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


