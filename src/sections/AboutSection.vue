<script>
import { ref } from 'vue'

export default {
  setup() {
    const isInfoOpen = ref(false)
    const isListOpen = ref(false)
    const isPlus = ref(true)

    // NO SE POR QUE NO PUEDO PONERLO EN UNO SOLO NO ME DEJA, AUXILIO, SEGUN YO BASTABA CON PASAR EL REACTIVO COMO PARAMETRO 
    // PERO SOLO PASO EL VALOR DEL BOOLEANO

    // Función que alterna el estado
    function toggleIcon() {
      isPlus.value = !isPlus.value;
    }

    // Funcion que se ejecuta en cuanto se haga click en un elemento del DOM
    function toggleInfo() {
      isInfoOpen.value = !isInfoOpen.value
    }

    // Funcion que muestra la lista
    function toggleList() {
      isListOpen.value = !isListOpen.value
    }

    return {
      isInfoOpen,
      isListOpen,
      isPlus,
      toggleInfo,
      toggleList,
      toggleIcon
    }
  }
}
</script>

<template>
  <div class="about-container" id="aboutMe">
    <div class="title">
      <h1>Acerca de Mi</h1>
      <img @click="toggleInfo" src="/iconos/info.png" class="info-img" alt="info">
    </div>
    <transition name="slide-fade">
      <div class="info-data-box" v-show="isInfoOpen">
        <ul>
          <li>‣ Mi rol actual es Junior/Dev</li>
          <li>‣ Soy Técnica superior en Desarrollo de Aplicaciones Web</li>
          <li>‣ Algunas tecnologías de interés ⌨: java Springboot, AngularJS, Jenkins y Go</li>
        </ul>
      </div>
    </transition>

    <div class="about-me-box">
      <p class="about-content">
        Soy una persona curiosa que se encontró el desarrollo web y terminó enganchada. Suelo aprender rápido,
        pero más allá de eso, me gusta enfocarme en escribir código limpio, legible y con buenas prácticas.
        <br><br>
        Creo que trabajar en equipo es clave. Disfruto mucho compartir ideas, escuchar otros enfoques y ver cómo un
        proyecto cobra vida cuando cada persona aporta su parte.
        <br><br>
        En mi tiempo libre, si no estoy investigando una nueva tecnología o mejorando mis habilidades, probablemente estoy
        jugando a Pokémon o escuchando música ♫ mientras miro uñas o terrarios para mis tortugas ☺.
      </p>

      <div class="to-do-box">
        <h2>Próximos objetivos</h2>
        <p>Siempre tengo algo nuevo que aprender o experimentar. Estas son algunas cosas que me entusiasman ahora
          mismo:</p>

        <ul class="to-do-content">
          <li>✔ Explorar AngularJS y entender bien su enfoque de componentes</li>
          <li>✔ Construir un nuevo proyecto fullstack con AngularJS y Java (Springboot)</li>
          <span @click="toggleList(); toggleIcon()" v-if="isPlus" class="more-item">+</span>
          <span v-else @click="toggleList(); toggleIcon()" class="more-item">&times;</span>
          <transition name="slide-fade-list">
            <div v-show="isListOpen">
              <li>✔ Investigar fundamentos de Jenkins</li>
            </div>
          </transition>
        </ul>

      </div>
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

h2 {
  margin-top: 0;
  margin-bottom: 1em;
}

.about-container {
  display: flex;
  flex-direction: column;
  margin: 2.5em auto;
}

.title {
  display: flex;
  margin: auto;
}

.info-img {
  margin: 0.7em 0.5em;
  width: 3.2em;
  height: 2.8em;
  cursor: pointer;
  animation: pulse 1.5s infinite ease-in-out;
  transition: all 0.5s ease;
}

.info-img:hover {
  filter: brightness(1.7);
}

.info-data-box {
  display: flex;
  margin: auto;
  width: 70%;
}

.info-data-box ul {
  width: 100%;
  justify-content: center;
  padding: 2.3em;
  background: #572e638d;
  border-radius: 1.5em;
  list-style: none;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.27);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.info-data-box li {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.32em;
  line-height: 2.2em;
}

.about-me-box {
  display: flex;
  flex-direction: row;
  padding: 2em;
  max-width: 2240px;
  margin: 1em auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.509);
  border-radius: 2em;
  border: 1px solid rgba(211, 192, 218, 0.2);
  height: auto;
}

.about-content {
  width: 50%;
  padding: 1em 2em 1em 1em;
  border-right: 2px solid rgb(36, 5, 50);
  line-height: 2em;
  font-size: 1.25em;
  color: rgb(36, 5, 50);
  text-align: justify;
}

.to-do-box {
  width: 50%;
  padding: 1em 2em;
}

.to-do-box p {
  margin: 1em;
  line-height: 2em;
  font-size: 1.25em;
  color: rgb(36, 5, 50);
  text-align: justify;
}

.to-do-content {
  margin-top: 1.7em;
  list-style: none;
  padding: 0;
}

.to-do-box li {
  margin: 1em;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  border-radius: 1.5em;
  background-color: rgb(73, 32, 89);
  text-align: justify;
}

.more-item {
  display: flex;
  justify-content: center;
  font-size: 3.5em;
  color: rgb(57, 25, 69);
  cursor: pointer;
  transition: transform 0.5s ease;
}

.more-item:active {
  transform: rotate(215deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active,
.slide-fade-list-enter-active,
.slide-fade-list-leave-active {
  overflow: hidden;
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to,
.slide-fade-list-enter-from,
.slide-fade-list-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-1em);
}

.slide-fade-enter-to,
.slide-fade-leave-from,
.slide-fade-list-enter-to,
.slide-fade-list-leave-from {
  max-height: 300px;
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-list-enter-to,
.slide-fade-list-leave-from {
  max-height: 85px;
}

/* Animacion de pulse para el icono que muestra el pequeño perfil */
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.12);
  }

  100% {
    transform: scale(1);
  }
}

/* Responsive para portatiles estandar*/
@media (max-width: 1280px) {
  .info-data-box {
    width: 80%;
    font-size: 0.9em;
  }

  .about-content,
  .to-do-box p {
    font-size: 1.2em;
    line-height: 1.5em;
  }

  .to-do-box li {
    line-height: 1.5em;
    font-size: 1.05em;
  }
}

/* Responsive para tablets o portatiles pequeños */
@media (max-width: 1024px) {
  .info-data-box {
    width: 83%;
    font-size: 0.8em;
  }

  .about-content,
  .to-do-box p {
    font-size: 1.1em;
  }

  .to-do-box li {
    margin: 1em 0;
    font-size: 1em;
  }

   .slide-fade-list-enter-to,
  .slide-fade-list-leave-from {
    max-height: 75px;
  }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 820px) {
  h2 {
    margin-top: 0.5em;
  }

  .about-me-box {
    display: block;
    padding-top: 1.5em;
    padding-bottom: 0;
  }

  .about-content,
  .to-do-box {
    width: 100%;
    font-size: 1.2em;
  }

  .to-do-box p {
    margin: 0 auto;
    font-size: 1.05em;
  }

  .info-data-box {
    width: 85%;
    font-size: 0.9em;
  }

  .about-content {
    margin: 0;
    padding: 1em 1.5em 2em 1.5em;
    border-right: none;
    border-bottom: 2px solid rgb(36, 5, 50);
  }

  .more-item {
    font-size: 2.2em;
  }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
  .info-img {
    width: 3em;
    height: 2.6em;
  }

  .info-data-box {
    font-size: 0.8em;
  }

  .to-do-box {
    padding: 1em 0.5em;
  }

  .to-do-box p {
    font-size: 1em;
  }

  .to-do-content {
    font-size: 0.9em;
  }

  .slide-fade-list-enter-to,
  .slide-fade-list-leave-from {
    max-height: 77px;
  }
}

/* Reponsive para moviles estandar */
@media (max-width: 540px) {
  .info-img {
    width: 2em;
    height: 2em;
  }

  .info-data-box {
    font-size: 0.65em;
  }

  .to-do-box {
    padding: 1em 0;
    font-size: 0.95em;
  }

  .about-content {
    padding: 0.5em 1em 2em 1em;
    font-size: 0.95em;
  }

  .slide-fade-list-enter-to,
  .slide-fade-list-leave-from {
    max-height: 60px;
  }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
  .info-data-box {
    width: 90%;
  }

  .slide-fade-list-enter-to,
  .slide-fade-list-leave-from {
    max-height: 63px;
  }
}
</style>
