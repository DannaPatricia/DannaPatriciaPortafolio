*{
    color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 2em;
    padding: 0;
    box-sizing: border-box;
    scroll-margin-top: 13em;
}

html {
    scroll-behavior: smooth;
}

body{
    min-height: 100vh;
    width: 100%;
    background-color: #2b0215;
    margin: auto;
}

h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    margin: 2em 0 0;
}

h2{
    text-align: center;
    font-size: 27px;
}

h3{
    text-align: center;
    margin: 0;
}

p{
    line-height: 3;
    font-size: 23px;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
    font-size: 20px;
}

header{
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
    height: 13%;
    background-color: #2b021590;
    box-shadow: 2px 10px 20px #2b021590;
    backdrop-filter: blur(20px);
    z-index: 10;
}

@keyframes movimientoBolitaPar {
    0%{
        transform: translate(0) rotate(0deg);
    }
    20%{
        transform: translate(-50px, 0) rotate(72deg);
    }
    40%{
        transform: translate(-50px, -30px) rotate(144deg);
    }
    60%{
        transform: translate(30px, -30px) rotate(216deg);
    }
    80%{
        transform: translate(30px, 50px) rotate(288deg);
    }
    100%{
        transform: translate(0, 0) rotate(360deg);
    }
}

@keyframes movimientoBolitaImPar {
    0%{
        transform: translate(0) rotate(0deg);
    }
    20%{
        transform: translate(50px, 0) rotate(72deg);
    }
    40%{
        transform: translate(50px, 70px) rotate(144deg);
    }
    60%{
        transform: translate(-20px, 70px) rotate(216deg);
    }
    80%{
        transform: translate(-20px, -30px) rotate(288deg);
    }
    100%{
        transform: translate(0, 0) rotate(360deg);
    }
}

@keyframes movimientoBolitaTercera {
    0%{
        transform: translate(0) rotate(0deg);
    }
    20%{
        transform: translate(0, 30px) rotate(72deg);
    }
    40%{
        transform: translate(50px, 30px) rotate(144deg);
    }
    60%{
        transform: translate(50px, -30px) rotate(216deg);
    }
    80%{
        transform: translate(-50px, -30px) rotate(288deg);
    }
    100%{
        transform: translate(0, 0) rotate(360deg);
    }
}


.bolitas{
    position: absolute;
    border-radius: 500px;
    box-shadow: 1px 1px 30px #870743;
    opacity: 0.4;
    transition: all ease-in-out;
    z-index: -10;
}

.bolitas:nth-child(even){
    width: 20em;
    height: 20em;
    background: radial-gradient(at top left, white 0%, #ed7eb2 20%, #bf085d 50%, #870743 100%);
    top: 10em;
    left: 10em;
    animation: movimientoBolitaPar 20s infinite linear;
}

.bolitas:nth-child(odd){
    width: 27em;
    height: 27em;
    background: radial-gradient(at top right,  white 0%, #ed7eb2 20%, #bf085d 50%, #870743 100%);
    top: 32em;
    right: 10em;
    animation: movimientoBolitaImPar 20s infinite linear;
}

.bolitas:nth-child(3n){
    width: 12em;
    height: 12em;
    background: radial-gradient(at top right,  white 0%, #ed7eb2 20%, #bf085d 50%, #870743 100%);
    top: 47em;
    left: 43em;
    animation: movimientoBolitaTercera 20s infinite linear;
}

#logo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 3em;
}

#logo h1{
    margin: 0;
}

#logo img{
    width: 60px;
}

#menu{
    width: 60%;
    align-content: center;
    margin: auto;
}

#menu ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#menu li{
    position: relative;
    display: flex;
    font-size: 20px;
}

#menu li::after {
    content: '';
    top: 2em;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background-color: #ee2853;
    transition: width 500ms ease-in-out;
}

#menu li:hover::after {
    width: 100%;
}

#menu li:hover {
    cursor: pointer;
    text-shadow: 0 0 30px #fff;
} 

#saludo span{
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    font-size: 35px;
    font-weight: bold;
}

#menuDesplegable{
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 35px;
    width: 10%;
    margin: 0 0 0 2em;
}

#menuDesplegable ul{
    display: none;
}

main{
    flex: 1;
    width: 90%;
    margin: 10em auto;
}

.perfilGitHub, #btnDesplegar, .btnRepositorio{
    margin: auto;
    text-align: center;
    align-content: center;
    width: 8em;
    height: 3em;
    font-size: 18px;
    background-color: #ee2853;
    box-shadow: 0px 0px 4px 6px #af1d3d;
    border-radius: 15px;
    border: none;
    transition: transform 700ms ease-in-out;
}

#btnDesplegar, .btnRepositorio{
    width: 10.5em;
    height: 3em;
    align-content: center;
    background-color: #ff2a3c;
    box-shadow: 0px 0px 8px 3px #ff2a3cc4;
    font-size: 20px;
}

.btnRepositorio{
    background-color: #a2044e;
    box-shadow: none;
    /* box-shadow: 0px 0px 8px 3px #c9c7c9; */
}

.visitarWeb{
    background-color: #c32d73;
}

.perfilGitHub:hover, #btnDesplegar:hover, .btnRepositorio:hover, .visitarWeb:hover{
    cursor: pointer;
    transform: scale(1.1);
}

#acercaDMi{
    display: flex;
    flex-direction: column;
    margin: 4.5em auto;
    width: 75%;
    gap: 3em;
}

.parrafoAcercaDMi{
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 3em;
}

.parrafoAcercaDMi ul {
    display: flex;
    flex-wrap: wrap;
    margin: 2em auto;
    gap: 2.3em;
}

.parrafoAcercaDMi li {
    width: 40%;
    flex-grow: 1;
    flex-basis: 200;
    padding: 1.7em;
    box-shadow: 0px 5px 10px rgb(113, 26, 43);
    border-radius: 10px;

}

.parrafoAcercaDMi:nth-child(odd){
    background: linear-gradient( #d24d6c, #ac4059);
}

.parrafoAcercaDMi:nth-child(even){
    background: linear-gradient( #af2842, #861f34);
}


#desplegable{
    display: none;
    flex-direction: column;
    gap: 3em;
}

#skills{
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-bottom: 2em;
    width: 75%;
    background: linear-gradient( #871f34, rgb(135, 51, 89));
    border-radius: 15px;
}

#skills p, #herramientas p{
    margin: 1em 3em;
}

.contenedorSkills{
    margin: 1em auto;
    padding-bottom: 1.5em;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0px 5px 10px #712847;
}


.tipoSkills, .tiposHerramientas{
    display: flex;
    flex-wrap: wrap;
}

.tipoSkills p{
    width: 5em;
}

.tiposHerramientas p{
    width: 9em;
}

.tipoSkills p, .tiposHerramientas p{
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-basis: 200;
    text-align: center;
    align-content: center;
    background-color: #9d325e;
    border: 3px solid #c33e73cd;
    box-shadow: 0px 0px 10px #c33e74;
    border-radius: 50px;
    color: #ecbdd1;
    transition: transform 500ms ease-in-out;
}

.tipoSkills p:hover, .tiposHerramientas p:hover{
    cursor: pointer;
    transform: scale(1.1);
}

#herramientas{
    display: flex;
    flex-direction: column;
    margin: 4em auto;
    padding-bottom: 2em;
    width: 75%;
    background: linear-gradient(rgb(135, 51, 89), rgb(120, 41, 87));
    border-radius: 15px;
}

.contenedorHerramientas{
    margin: 1em auto;
    padding-bottom: 1.5em;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0px 5px 10px #712847;
}

#proyectos{
    display: flex;
    flex-direction: column;
    margin: 5em auto;
    justify-content: center;
    background: linear-gradient( #871f34, rgb(135, 51, 89));
    border-radius: 20px;
    width: 75%;
    height: 10%;
}

/* AQUIIIIII */
#contenedorProyectos{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 3em;
    margin: 4em auto;
    align-items: center;
    width: 80%;
}

.proyectos{
    display: flex;
    flex-grow: 1;
    flex-basis: 200;
    flex-direction: column;
    gap: 1.5em;
    margin: auto;
    text-align: center;
    height: 29em;
    width: 25em;
    padding: 1.5em;
    border-radius: 15px;
    background-color: #973256;
    /* background:linear-gradient(#c68494, #c68494); */
    box-shadow: 0px 0px 10px #652239;
    transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
}

.proyectos:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0px 10px 20px #973256, 0px 0px 20px #652239;
}

.proyectos img{
    margin: auto;
    height: 16em;
    width: 75%;
    border-radius: 15px;
}

footer{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 14em;
    padding-top: 0.2em;
    background-color: #640531d1;
    box-shadow: 2px 10px 40px #57052b;
}

#imgContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    height: 3em;
}

#imgContainer img {
    filter: drop-shadow(0 0 9px white);
    transition: filter 500ms ease-in-out, transform 500ms ease-in-out;
}

#imgContainer img:hover {
    filter: drop-shadow(0 0 9px rgb(128, 9, 65));
    transform: scale(1.1);
}


@media screen and (max-width: 1200px) {
    main{
        flex: 1; /* Asegura que el contenido principal ocupe el espacio restante */
        padding: 0 2em; /
    }
    header {
        height: 5em;
    }
    footer{
        width: 100%;
        height: 8em;
    }
    #logo {
        margin: 1em;
    }
    #menu {
        width: 100%;
    }
    #menu ul {
        flex-direction: column;
        gap: 1em;
    }
    #imgContainer img {
        height: 3em;
    }
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 1em;
        margin: 1.5em 1em;
    }
    h2 {
        font-size: 1.2em;
    }
    p {
        font-size: 1em;
    }
    .bolitas:nth-child(even), 
    .bolitas:nth-child(odd), 
    .bolitas:nth-child(3n) {
        width: 10em;
        height: 10em;
    }
    #menu li {
        font-size: 18px;
    }
    #contenedorProyectos {
        flex-direction: column;
        gap: 2em;
    }
    .proyectos {
        width: 90%;
        height: auto;
        padding: 1em;
    }
    .proyectos img {
        width: 100%;
        height: auto;
    }
}

@media screen and (max-width: 480px) {
    h1, h2, h3 {
        font-size: 1em;
    }
    p {
        line-height: 1.5;
        font-size: 0.9em;
    }
    #menu {
        display: none;
    }
    #btnDesplegar {
        display: block;
        margin: auto;
    }
    .perfilGitHub, .btnRepositorio {
        width: 100%;
        font-size: 16px;
    }
    #acercaDMi, #skills, #herramientas, #proyectos {
        width: 100%;
    }
    .tipoSkills p, .tiposHerramientas p, .parrafoAcercaDMi li {
        width: 100%;
        font-size: 0.8em;
    }
}
