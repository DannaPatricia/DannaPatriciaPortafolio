<script>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import 'devicon/devicon.min.css'

export default {

    setup() {
        // Lista con las clases para iconos para logos
        const skills = [
            { name: 'HTML5', icon: 'devicon-html5-plain colored custom-icon' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored custom-icon' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored custom-icon' },
            { name: 'Java', icon: 'devicon-java-plain colored custom-icon' },
            { name: 'SQL', icon: 'devicon-mysql-plain colored custom-icon' },
            { name: 'PHP', icon: 'devicon-php-plain colored custom-icon' },
            { name: 'Go', icon: 'devicon-go-original-wordmark custom-icon' }
        ]

        const tools = [
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored custom-icon' },
            { name: 'Railway', icon: 'devicon-railway-original custom-icon' },
            { name: 'Eclipse', icon: 'devicon-eclipse-plain colored custom-icon' },
            { name: 'Visual Studio', icon: 'devicon-visualstudio-plain custom-icon' },
            { name: 'Vue.js', icon: 'devicon-vuejs-plain colored custom-icon' },
            { name: 'jQuery', icon: 'devicon-jquery-plain colored custom-icon' },
            { name: 'Git', icon: 'devicon-git-plain colored custom-icon' },
            { name: 'GitHub', icon: 'devicon-github-original colored custom-icon' },
            { name: 'MySQL Workbench', icon: 'devicon-mysql-plain colored custom-icon' },
            { name: 'phpMyAdmin', icon: 'devicon-php-plain colored custom-icon' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored custom-icon' },
        ]


        // Lógica para la muestra de contenedores al hacer scroll
        // En esta ocasion, dado que es la primera vez, he usado querySelectorAll en vez de ref dinamicos porque no lo tenia muy claro
        // en principio tenia dos ref inidividuales pero vi que con el querySelectorAll quedo mas limpio, ahora que tengo mas claro
        // como funcionan los ref dinamicos tengo pendiente aplicarlo en otra seccion

        // Booleano que controla mostrar el contenedor
        const visibleSections = ref([false, false])

        // Variable donde se alamcenara el observador
        let observer

        // funcion que maneja la visibilidad de la seccion
        function handleIntersections(entries) {
            entries.forEach(entry => {
                // Si la seccion entra en el viewport se muestra
                if (entry.isIntersecting) {
                    const index = Array.from(document.querySelectorAll('.observe-section')).indexOf(entry.target)
                    visibleSections.value[index] = entry.isIntersecting
                }
            })
        }

        onMounted(async () => {
            // Espera a que se renderice el dom
            await nextTick()

            // Crear el observer que controlara la visibilidad de las secciones
            observer = new IntersectionObserver(handleIntersections, {
                // Cuando la seccion sea 90% visible se mostrara
                threshold: 0.9,
            })

            const elements = document.querySelectorAll('.observe-section')

            // Se activa el observer en cada seccion
            // Se hace uso del objeto observer y su funcion para observarlo, ejecuta el callback del observer
            elements.forEach((el) => {
                observer.observe(el)
            })
        })

        onUnmounted(() => {
            if (observer) {
                const elements = document.querySelectorAll('.observe-section')
                elements.forEach((el) => {
                    observer.unobserve(el)
                })
            }
        })

        return {
            skills,
            tools,
            visibleSections,
        }
    }

}
</script>
<template>
    <div class="skills-tools-container"  id="skillsTools">
        <!-- Para acceder a los elementos desde el script -->
        <div class="observe-section">
            <transition name="slide-left-fade">
                <div class="skills-box" v-show="visibleSections[0]">
                    <h1><i class="fa-solid fa-desktop icon-decoration"></i>
                        Mis habilidades técnicas</h1>
                    <p>En esta sección te presento las tecnologías que domino, tanto en el desarrollo del lado del
                        cliente
                        (frontend) como en el servidor (backend). He trabajado con estas herramientas en proyectos
                        reales y
                        continúo aprendiendo para mejorar mi dominio.</p>
                    <div class="skills-box-content">
                        <div class="icon-container" v-for="(skill, index) in skills" :key="index">
                            <i :class="skill.icon"></i>
                            <p> {{ skill.name }}</p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Para acceder a los elementos desde el script -->
        <div class="observe-section">
            <transition name="slide-right-fade">
                <div class="tools-box" v-show="visibleSections[1]">
                    <h1>Herramientas de desarrollo <i class="fa-solid fa-gears icon-decoration"></i>
                    </h1>
                    <p>Estas son las herramientas que utilizo en mi día a día para el desarrollo de proyectos. Algunas
                        son
                        esenciales para el desarrollo frontend, mientras que otras son herramientas poderosas para
                        gestionar
                        bases de datos y trabajar en el backend.</p>
                    <div class="tools-box-content">
                        <div class="icon-container" v-for="(tool, index) in tools" :key="index">
                            <i :class="tool.icon"></i>
                            <p> {{ tool.name }}</p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(49, 15, 63);
    margin-bottom: 1em;
}

.skills-tools-container {
    display: flex;
    flex-direction: column;
    margin: 2.5em auto;
    gap: 1.5em;
}

.skills-box,
.tools-box {
    margin: auto;
    background-color: rgba(255, 255, 255, 0.318);
    border-radius: 1.5em;
    padding: 1.5em;
    padding-bottom: 3.2em;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    width: 70%;
    text-align: justify;
}

.icon-decoration {
    font-size: 1.3em;
    color: rgb(49, 15, 63);
    text-align: center;
}

.skills-box p,
.tools-box p {
    margin: auto 2.3em;
    line-height: 2em;
    font-size: 1.25em;
    color: rgb(36, 5, 50);
}

.skills-box-content,
.tools-box-content {
    display: grid;
    margin: auto;
    width: 85%;
    margin-top: 2em;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
}

.icon-container {
    margin: auto;
    text-align: center;
}


.custom-icon {
    display: inline-block;
    font-size: 5em;
    color: rgb(91, 50, 108);
    transition: all 0.3s ease;
}

.custom-icon:hover {
    transform: translateY(-5px);
    filter: brightness(1.5);
}

.icon-container p {
    margin: 0 0.5em;
    font-size: 1em;
}

.slide-left-fade-enter-active,
.slide-left-fade-leave-active,
.slide-right-fade-enter-active,
.slide-right-fade-leave-active {
    overflow: hidden;
    transition: all 2.2s ease;
}

.slide-left-fade-enter-from,
.slide-left-fade-leave-to {
    opacity: 0;
    transform: translateX(-19em);
}

.slide-right-fade-enter-from,
.slide-right-fade-leave-to {
    opacity: 0;
    transform: translateX(19em);
}

.slide-left-fade-enter-to,
.slide-left-fade-leave-from,
.slide-right-fade-enter-to,
.slide-right-fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}

/* Responsive para portatiles estandar*/
@media (max-width: 1295px) {
    h1 {
        margin-bottom: 0.8em;
    }

    .skills-box,
    .tools-box {
        padding-top: 1.5em;
    }

    .skills-box p,
    .tools-box p {
        font-size: 1.2em;
        line-height: 1.8em;
    }

    .skills-box-content,
    .tools-box-content {
        grid-template-columns: repeat(3, 1fr);
        margin: 2em auto;
        gap: 1.5em;
    }

    .custom-icon {
        font-size: 4em;
    }

    .icon-container p {
        margin-top: 0.5em;
        font-size: 1em;
    }
}

/* Responsive para tablets o portatiles pequeños */
@media (max-width: 1024px) {

    .skills-box,
    .tools-box {
        width: 80%;
        padding-bottom: 2em;
    }

    .skills-box p,
    .tools-box p {
        font-size: 1.1em;
    }

    .skills-box-content,
    .tools-box-content {
        width: 90%;
        grid-template-columns: repeat(3, 1fr);
        margin: 2em auto;
        gap: 1.6em;
    }

    .custom-icon {
        font-size: 3.5em;
    }

    .icon-container p {
        font-size: 1em;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 820px) {

    .skills-box,
    .tools-box {
        padding-bottom: 1.5em;
        width: 85%;
    }

    .skills-box p,
    .tools-box p {
        margin: auto 1.5em;
    }

    .custom-icon {
        font-size: 3.8em;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
    h1 {
        font-size: 1.7em;
    }

    .skills-box,
    .tools-box {
        padding-bottom: 1.2em;
        width: 90%;
    }

    .skills-box p,
    .tools-box p {
        margin: auto 1.3em;
    }

    .icon-container p {
        font-size: 0.9em;
    }

    .custom-icon {
        font-size: 3.7em;
    }
}

/* Reponsive para moviles estandar */
@media (max-width: 540px) {
    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.3em;
    }

    .skills-box,
    .tools-box {
        padding-bottom: 1.1em;
        width: 90%;
    }

    .skills-box p,
    .tools-box p {
        font-size: 0.95em;
        margin: auto 1em;
    }

    .custom-icon {
        font-size: 3.2em;
    }

    .icon-container p {
        font-size: 0.9em;
    }

    .tools-box-content {
        margin: 2em 1em;
    }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
    h1 {
        font-size: 1.4em;
    }

    .tools-box-content {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 473px) {
    h1 {
        font-size: 1.3em;
    }

    .skills-box p,
    .tools-box p {
        font-size: 0.95em;
        margin: auto 0;
    }

    .skills-box-content {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>