<script>
import { ref } from 'vue'

export default {
    setup() {
        // Se ceclara reactivo en false para el menu desplegable
        const isSubmenuOpen = ref(false)
        // Funcion que se ejecuta en cuanto se haga click en un elemento del DOM
        function toggleSubMenu() {
            isSubmenuOpen.value = !isSubmenuOpen.value
        }

        return {
            isSubmenuOpen,
            toggleSubMenu
        }
    }
}
</script>

<template>
    <header>
        <div id="logo">
            <a href="#greeting"> <img src="/personal/logo2.png" alt="logo"></a>
        </div>
        <nav id="menu">
            <ul>
                <li><a href="#aboutMe">Acerca de mi</a></li>
                <li><a href="#skillsTools">Skills y herramientas</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#imgContainer">Contacto</a></li>
            </ul>
        </nav>
        <!-- Menu desplegable -->
        <nav id="menuDesplegable">
            <p class="icon" @click="toggleSubMenu">☰</p>
            <transition name="slide-fade">
                <div class="subMenuContainer" v-show="isSubmenuOpen">
                    <ul @click="isSubmenuOpen = false">
                        <li><a href="#aboutMe">Acerca de mi</a></li>
                        <li><a href="#skillsTools">Skills y herramientas</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#imgContainer">Contacto</a></li>
                    </ul>
                    <div @click="isSubmenuOpen = false" class="exit-icon">&times;</div>
                </div>
            </transition>
        </nav>

    </header>
</template>

<style scoped>
/* Estilos principales del header, logo y menu para pantallas grandes */
header {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
    height: 6.5em;
    background-color: #370d4ba8;
    box-shadow: 2px 10px 20px #29022b90;
    backdrop-filter: blur(20px);
    z-index: 10;
}

#logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 3em;
}

#logo img {
    width: 6em;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
    font-size: 20px;
}

/* Estilos del menu para pantallas grandes */
#menu {
    width: 55%;
    align-content: center;
    margin-left: 3.3em;
}

#menu ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    gap: 1em;
}

#menu li {
    font-family: 'Lato', sans-serif;
    position: relative;
    display: flex;
    font-size: 20px;
}

#menu li::after {
    content: '';
    position: absolute;
    top: 2em;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background-color: #ffffff;
    transition: width 500ms ease-in-out;
}

#menu li:hover::after {
    width: 100%;
}

#menu li:hover {
    cursor: pointer;
    text-shadow: 0 0 30px #fff;
}

/* Estilos para el menu desplegable para pantallas pequeñas */
#menuDesplegable {
    display: none;
}

#menuDesplegable ul li {
    font-family: 'Lato', sans-serif;
    transition: all 0.5s ease;
}

#menuDesplegable ul li:active {
    background-color: #a74bac;
}


/* Transicion del menu desplegable */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-1em);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive para monitores grandes*/
@media (max-width: 1440px) {
    #menu {
        max-width: 70%;
        margin-left: 1em;
    }
}


/* Responsive para portatiles estandar*/
@media (max-width: 1280px) {
    header {
        height: 5.3em;
    }

    #logo img {
        width: 5em;
    }

    #menu {
        margin-left: 1em;
    }

    #menu li {
        font-size: 0.9em;
    }
}

/* Responsive para dispositivos de max 1024px */
@media (max-width: 1024px) {
    #menu {
        width: 75%;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 814px) {
    header {
        justify-content: space-between;
    }

    #logo {
        margin-left: 2em;
    }

    #menu {
        display: none;
    }

    #menuDesplegable {
        display: flex;
        align-items: center;
        font-size: 2em;
        width: 10%;
    }

    .icon {
        position: relative;
        bottom: 0.1em;
    }

    .subMenuContainer {
        position: absolute;
        padding: 0;
        top: 2.25em;
        left: 0;
        width: 100%;
        margin: auto;
        background: linear-gradient(to bottom, #492059, #30103b);
        box-shadow: 2px 5px 25px #47024a90;
        backdrop-filter: blur(15px);
        border-left: 0.5em solid #2601278f;
        border-right: 0.5em solid #2601278f;
        text-align: center;
    }

    #menuDesplegable ul {
        padding: 0;
        margin: 0;
    }

    #menuDesplegable ul li {
        line-height: 3em;
        padding-bottom: 0.3em;
        font-size: 1em;
    }

    .exit-icon {
        position: absolute;
        text-align: center;
        top: 7.5em;
        left: 48.2%;
        border-radius: 15em;
        font-size: 1.35em;
        margin: 0;
        padding: 0;
        font-weight: bold;
        color: #3e224a;
        text-shadow: 2px 2px 8px #ffffff;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
    #menuDesplegable ul li {
        line-height: 3em;
        padding-bottom: 0.3em;
        font-size: 0.9em;
    }

    .exit-icon {
        top: 5.3em;
    }
}

/* Reponsive para moviles pequeños */
@media (max-width: 540px) {
    header {
        height: 3.5em;
    }

    #logo {
        margin-left: 1em;
    }

    #logo img {
        height: 3.4em;
        width: 3.4em;
    }

    #menuDesplegable {
        font-size: 1.5em;
        margin-right: 0.5em;
    }

    #menuDesplegable ul li {
        font-size: 0.65em;
    }

    .exit-icon {
        top: 5em;
        left: 47.5%;
        font-size: 1.45em;
    }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
    .exit-icon {
        top: 4.7em;
        left: 46.5%;
        font-size: 1.5em;
    }
}
</style>