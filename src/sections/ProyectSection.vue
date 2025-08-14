<script>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Project from '@/components/Project.vue'

export default {
    components:{
        Project
    },

    setup() {

        const projectsData = ref([
            { title: 'Soporte Técnico', img: '/imgProjects/soporteApp.png', description: 'Pequeña aplicación de soporte técnico en el que puedes iniciar sesión como cliente o soporte.', tecnologies:['VueJS', 'JS', 'Go', 'PostgreSQL'] , type: 'secondProjects', link: 'https://dannapatricia.github.io/Soporte-Tecnico-App/', repoLink: 'https://github.com/DannaPatricia/Soporte-Tecnico-App' },
            { title: 'AnimaNatura', img: '/imgProjects/animaNatura.png',  description: 'Página realizada para la FCT, se trata de un medio informativo de diferentes animales domésticos. (Versión escritorio)', tecnologies:['VueJS', 'CSS3', 'HTML5', 'JS'], type: 'secondProjects', link: 'https://dannapatricia.github.io/AnimaNatura/', repoLink: 'https://github.com/DannaPatricia/AnimaNatura' },
            { title: 'PokeApp', img: '/imgProjects/pokeApp.png', description: 'Consulta Pokémon por nombre, explora sus tipos, estadísticas, movimientos y evoluciones. (Versión escritorio)', tecnologies:['VueJS', 'HTML5', 'CSS3', 'JS'] , type: 'secondProjects', link: 'https://dannapatricia.github.io/PokeApp/', repoLink: 'https://github.com/DannaPatricia/PokeApp' },
            
            { title: 'GestiónFct', img: '/imgProjects/gestionFct.png', description: 'Permite la gestión fácil y rápida de las etapas fct de los alumnos. Permite un contacto más cercano con todos los actores de las fct.', tecnologies:['NodeJS', 'HTML5', 'CSS3', 'JS', 'SQL'] ,type: 'secondProjects', repoLink: 'https://github.com/DannaPatricia/appFct' },
            { title: 'GameCenter', img: '/imgProjects/gameCenter.png', description: 'Tienda que Incluye funcionalidades para usuarios (comprar, ver productos) y administradores (gestionar inventario).',  tecnologies:['Java', 'HTML5', 'CSS3', 'SQL'] ,type: 'secondProjects', repoLink: 'https://github.com/DannaPatricia/game-center' },
            { title: 'Gestiona Cursos', img: '/imgProjects/gestionaCursos.png', description: 'Aplicación que permite a profesores iniciar sesión, acumular puntos automáticamente y quedar pendientes de la baremación del administrador.',  tecnologies:['PHP', 'SQL', 'CSS3'] ,type: 'secondProjects', repoLink: 'https://github.com/DannaPatricia/gestion-cursos' },
            { title: 'Hundir la flota', img: '/imgProjects/pcFlota.png',  description: 'Mítico juego de Hundir la Flota, donde el jugador compite en un tablero 10x10 por consola, disparando para hundir los barcos rivales hasta ganar.',  tecnologies:['Java'] ,type: 'firstProjects', repoLink: 'https://github.com/DannaPatricia/Hundir-la-flota' },
            // { title: 'Calculadora', img: '/imgProjects/pcCalc.png', description: 'Permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.',  tecnologies:['HTML5', 'CSS3', 'JS'] ,type: 'firstProjects', link: 'https://dannapatricia.github.io/calculadora/', repoLink: 'https://github.com/DannaPatricia/calculadora' },
            // { title: 'Conecta', img: '/imgProjects/pcConecta.png',  description: 'Incluye un tablero interactivo, detección de jugadas ganadoras y toda la lógica para disfrutar de este divertido juego.',  tecnologies:['HTML5', 'CSS3', 'JS'] ,type: 'firstProjects', link: 'https://dannapatricia.github.io/conecta-4/', repoLink: 'https://github.com/DannaPatricia/conecta-4' },
            // { title: 'Cronómetro', img: '/imgProjects/pcCron.png',  description: 'Permite medir el tiempo con precisión, cuenta con controles sencillos para iniciar, detener y reiniciar el cronómetro.',  tecnologies:['HTML5', 'CSS3', 'JS'] ,type: 'firstProjects', link: 'https://dannapatricia.github.io/cronometro/', repoLink: 'https://github.com/DannaPatricia/cronometro' },
            // { title: 'Busca parejas', img: '/imgProjects/pcPar.png',  description: 'Incluye mecánicas interactivas para voltear cartas, detección automática de parejas encontradas.',  tecnologies:['HTML5', 'CSS3', 'JS'] ,type: 'firstProjects', link: 'https://dannapatricia.github.io/encuentra-parejas/', repoLink: 'https://github.com/DannaPatricia/encuentra-parejas' },
        ])
        
        // Lista donde se almacenaran la referencia a los contenedores
        const sectionRefs = ref([])

        // Lista donde se almacenan los datos de cada contenedor que se generara de manera dinamica, ademas del 
        // booleano que manejara la visibilidad
        const sectionsData = ref([
            { title: 'Soporte Técnico', type: 'secondProjects', visible: false },
            { title: 'AnimaNatura', type: 'secondProjects', visible: false },
            { title: 'PokeApp', type: 'secondProjects', visible: false },

            { title: 'GestiónFct', type: 'firstProjects', visible: false },
            { title: 'GameCenter', type: 'firstProjects', visible: false },
            { title: 'Gestiona Cursos', type: 'firstProjects', visible: false },
            { title: 'Hundir la flota', type: 'firstProjects', visible: false },
            // { title: 'Calculadora', type: 'firstProjects', visible: false },
            // { title: 'Conecta', type: 'firstProjects', visible: false },
            // { title: 'Cronómetro', type: 'firstProjects', visible: false },
            // { title: 'Busca parejas', type: 'firstProjects', visible: false },
        ])

        let observer

        // Funcion que ejecutara el observador por cada elemento, se encarga de detectar que elemento a entrado en el 
        // viewport
        function handleIntersections(entries) {
            entries.forEach(entry => {
                // Si el elemento entra en e viewport
                if (entry.isIntersecting) {
                    // Se selecciona el index del elemento que esta intersectando y se cambia el booleano a true
                    const index = sectionRefs.value.findIndex(el => el === entry.target)
                    sectionsData.value[index].visible = true
                }
            })
        }

        onMounted(async () => {
            await nextTick()
            observer = new IntersectionObserver(handleIntersections, {
                // Cuando la seccion sea 90% visible se mostrara
                threshold: 0.9,
            })

            // Se declara que elementos debe observar el observer
            sectionRefs.value.forEach((sectionRef) => {
                // Se pasa de entrada la seccion a observar y se ejecuta el handleIntersections para ese elemento
                observer.observe(sectionRef)
            })
        })

        onUnmounted(() => {
            if (observer) {
                sectionRefs.value.forEach((sectionRef) => {
                    observer.unobserve(sectionRef)
                })
            }
        })

        return {
            sectionRefs,
            sectionsData,
            projectsData
        }
    }
}
</script>

<template>
    <div class="proyects-container" id="projects">
        <h1 class="title">Mis proyectos</h1>
        <div v-for="(section, i) in sectionsData" :key="i" :ref="el => sectionRefs[i] = el" class="project-box"
            :class="i % 2 != 0 ? 'right-container-project' : 'left-container-project'">
            <transition :name="i % 2 === 0 ? 'slide-left-fade' : 'slide-right-fade'" >
                <Project v-show="section.visible" :project="projectsData[i]" :index="i"></Project>
            </transition>
        </div>
    </div>
</template>

<style scoped>
h1,
h2 {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(49, 15, 63);
}

.proyects-container {
    display: flex;
    flex-direction: column;
    margin: 2.5em auto;
    gap: 1.5em;
}

.right-container-project, .left-container-project{
    display: flex;
}

.left-container-project{
    justify-content: flex-start;
}

.right-container-project{
    justify-content: flex-end;
}

.slide-left-fade-enter-active,
.slide-left-fade-leave-active,
.slide-right-fade-enter-active,
.slide-right-fade-leave-active {
    overflow: hidden;
    transition: all 2.5s ease;
}

.slide-left-fade-enter-from,
.slide-left-fade-leave-to {
    opacity: 0;
    transform: translateX(-25em);
}

.slide-right-fade-enter-from,
.slide-right-fade-leave-to {
    opacity: 0;
    transform: translateX(25em);
}

.slide-left-fade-enter-to,
.slide-left-fade-leave-from,
.slide-right-fade-enter-to,
.slide-right-fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>