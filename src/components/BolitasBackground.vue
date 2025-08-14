<script>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import debounce from 'lodash/debounce'
import Bolita from '@/components/Bolita.vue'

export default {
    components: { Bolita },
    setup() {
        // Se declaran reactivos
        const windowHeight = ref(window.innerHeight)
        const positionTop = ref()
        const numberBolitas = ref()

        // Se hace uso de la funcion debounce, que permite modificar la altura de la ventana de manera no inmediata para 
        // ofrecer un buen rendiemiento
        const updateWindowHeight = debounce(() => {
            windowHeight.value = window.innerHeight
        }, 200)

        onMounted(() => {
            window.addEventListener('resize', updateWindowHeight)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', updateWindowHeight)
        })

        watchEffect(() => {
            // Se calcula el numero de bolitas que apareceran en pantalla, obteniendo el alto de esta y dividiendo entre
            // lo que se estima que ocupa la bolita en pixeles
            numberBolitas.value = Math.floor(windowHeight.value / 120)

            // Se crea un array de longitud el numero de bolitas estimado, y mientras se itera se va calculando el top de estos
            positionTop.value = Array.from({ length: numberBolitas.value }, (_, i) => {
                const top = i % 2 === 0 ? 10.1 : 14
                return i * top + 'em'
            })
        })

        return {
            numberBolitas,
            positionTop,
        }
    }
}
</script>

<template>
    <div class="bolitas-fondo">
        <!-- Crea una bolita y para cada una un top diferente, para evitar que se sobrepongan, se pasa por prop -->
        <Bolita v-for="(top, index) in positionTop" :key="index" class="bolitas" :top="top" />
    </div>
</template>

<style scoped>
/* Estilo del contenedor de las bolitas que se usara de fondo */
.bolitas-fondo {
    position: fixed;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    max-width: 2210px;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
}

/* Estilos de las bolitas */
.bolitas:nth-child(even) {
    width: 22em;
    height: 22em;
    background: radial-gradient(at top left, white 0%, #83d3dc 20%, #12c3c9 50%, #067272 100%);
    box-shadow: 1px 1px 30px #06605d;
    left: 10em;
    animation: movimientoBolitaPar 20s infinite linear;
}

.bolitas:nth-child(odd) {
    width: 27em;
    height: 27em;
    background: radial-gradient(at top right, white 0%, #ebe892 20%, #ab9b08 50%, #5f5906 100%);
    box-shadow: 1px 1px 30px #474603;
    right: 15em;
    animation: movimientoBolitaImPar 20s infinite linear;
}

.bolitas:nth-child(3n) {
    width: 17em;
    height: 17em;
    background: radial-gradient(at top right, white 0%, #ed7eb2 20%, #bf085d 50%, #78063b 100%);
    box-shadow: 1px 1px 30px #4d0426;
    left: 45em;
    animation: movimientoBolitaTercera 20s infinite linear;
}

.bolitas:nth-child(5n) {
    width: 19em;
    height: 19em;
    background: radial-gradient(at top left, white 0%, #83d3dc 20%, #12c3c9 50%, #067272 100%);
    box-shadow: 1px 1px 30px #06605d;
    right: 27em;
    animation: movimientoBolitaPar 20s infinite linear;
}

/* Animaciones de las bolitas */
@keyframes movimientoBolitaPar {
    0% {
        transform: translate(0) rotate(0deg);
    }

    20% {
        transform: translate(-50px, 0) rotate(72deg);
    }

    40% {
        transform: translate(-50px, -30px) rotate(144deg);
    }

    60% {
        transform: translate(30px, -30px) rotate(216deg);
    }

    80% {
        transform: translate(30px, 50px) rotate(288deg);
    }

    100% {
        transform: translate(0, 0) rotate(360deg);
    }
}

@keyframes movimientoBolitaImPar {
    0% {
        transform: translate(0) rotate(0deg);
    }

    20% {
        transform: translate(50px, 0) rotate(72deg);
    }

    40% {
        transform: translate(50px, 70px) rotate(144deg);
    }

    60% {
        transform: translate(-20px, 70px) rotate(216deg);
    }

    80% {
        transform: translate(-20px, -30px) rotate(288deg);
    }

    100% {
        transform: translate(0, 0) rotate(360deg);
    }
}

@keyframes movimientoBolitaTercera {
    0% {
        transform: translate(0) rotate(0deg);
    }

    20% {
        transform: translate(0, 30px) rotate(72deg);
    }

    40% {
        transform: translate(50px, 30px) rotate(144deg);
    }

    60% {
        transform: translate(50px, -30px) rotate(216deg);
    }

    80% {
        transform: translate(-50px, -30px) rotate(288deg);
    }

    100% {
        transform: translate(0, 0) rotate(360deg);
    }
}


/* Responsive para tablets o portatiles pequeños */
@media (max-width: 1024px) {
    .bolitas:nth-child(even) {
        left: 1em;
    }

    .bolitas:nth-child(odd) {
        width: 23em;
        height: 23em;
        right: 1em;
    }

    .bolitas:nth-child(3n) {
        width: 14em;
        height: 14em;
        left: 30%;
    }

    .bolitas:nth-child(5n) {
        background: radial-gradient(at top right, white 0%, #b832a8 20%, #931784 50%, #870a79 100%);
        box-shadow: 1px 1px 30px #42044d;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 920px) {
    .bolitas:nth-child(even) {
        width: 20em;
        height: 20em;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
    .bolitas:nth-child(even) {
        left: 1em;
    }
}

/* Reponsive para moviles estandar */
@media (max-width: 540px) {
    .bolitas:nth-child(even) {
        width: 15em;
        height: 15em;
    }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
    .bolitas:nth-child(even) {
        width: 7em;
        left: 2em;
    }

    .bolitas:nth-child(odd) {
        right: 2em;
    }

    .bolitas:nth-child(3n) {
        width: 12em;
        height: 12em;
        left: 45%;
    }
}
</style>