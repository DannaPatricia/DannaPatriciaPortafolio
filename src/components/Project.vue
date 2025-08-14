<script setup>
// Iconos
const tools = {
  HTML5: { icon: 'devicon-html5-plain colored custom-icon' },
  CSS3: { icon: 'devicon-css3-plain colored custom-icon' },
  JS: { icon: 'devicon-javascript-plain colored custom-icon' },
  Java: { icon: 'devicon-java-plain colored custom-icon' },
  SQL: { icon: 'devicon-mysql-plain colored custom-icon' },
  PHP: { icon: 'devicon-php-plain colored custom-icon' },
  Go: { icon: 'devicon-go-original-wordmark custom-icon' },
  PostgreSQL: { icon: 'devicon-postgresql-plain colored custom-icon' },
  VueJS: { icon: 'devicon-vuejs-plain colored custom-icon' },
  NodeJS: { icon: 'devicon-nodejs-plain-wordmark' },
}

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <div class="project-container">
    <div class="mobile-div">
      <h2 class="mobile-title">{{ project.title }}</h2>
    </div>
    <img :src="project.img" alt="">
    <div class="project-content">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="tecnologies-box">
        <h3>Tecnologías usadas</h3>
        <div class="tecnologies-content">
          <i v-for="tecnology in project.tecnologies" :key="tecnology" :class="tools[tecnology].icon"></i>
        </div>
      </div>
      <div class="links-box">
        <a :href="project.repoLink">Repositorio<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        <a :href="project.link" v-if="project.link">Probar ahora<i
            class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
h3 {
  margin-top: 0.5em;
  margin-bottom: 1em;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: rgb(49, 15, 63);
}

h3 {
  margin-bottom: 1.3em;
  margin-top: 0;
  text-align: left;
}

p {
  text-align: justify;
  line-height: 2em;
  font-size: 1.2em;
  color: rgb(36, 5, 50);
  margin: 0 1em 1em 0;
}

.mobile-div {
  display: none;
}

.project-container {
  display: flex;
  background-color: rgba(255, 255, 255, 0.318);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  border-radius: 2em;
  width: clamp(1140px, 80%, 1600px);
  height: auto;
  margin-bottom: 2em;
  padding: 2em 2em 2em 0;
}

.project-container img {
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.296));
  border-radius: 2em;
  margin: auto 2em;
  height: 20em;
}

.project-content {
  margin: 0.5em 1.3em;
}

.tecnologies-content {
  display: flex;
  gap: 0.5em;
  width: 60%;
}

.tecnologies-content i {
  font-size: 2em;
  color: rgb(91, 50, 108);
  text-align: center;
  border-radius: 1em;
  margin: 0;
}

.links-box {
  display: flex;
  margin-top: 1em;
  gap: 1em;
  width: 20em;
}

.links-box a {
  text-align: center;
  align-content: center;
  text-decoration: none;
  background: radial-gradient(circle at top left, #552374, #492059, #3a1447);
  border-radius: 0.5em;
  padding: 0.5em 0.4em 0.5em 1.1em;
  margin: 1em 0;
  overflow: hidden;
  transition: width 0.4s ease;
  width: 9em;
}

.links-box i {
  margin-left: 0.5em;
  opacity: 0;
  transform: translateX(-2em);
  transition: all 0.5s ease;
}

.links-box a:hover i {
  opacity: 1;
  transform: translateX(0);
}

.links-box a:hover {
  width: 10em;
}


/* Responsive para portatiles estandar*/
@media (max-width: 1024px) {
  p {
    font-size: 1.1em;
    margin-right: 2em;
    line-height: 1.5em;
  }

  .project-container {
    padding: 1.3em 1.3em 1.3em 0;
    width: 95%;
    margin-bottom: 1.5em;
  }

  .project-content {
    margin-left: 0;
  }

  .project-container img {
    height: 16em;
  }
}


/* Responsive para moviles grandes o tablets */
@media (max-width: 930px) {
  p {
    font-size: 1.1em;
  }

  .mobile-div {
    display: flex;
    justify-content: center;
  }

  .project-content h2 {
    display: none;
  }

  .mobile-title {
    margin: 0.5em auto 1em auto;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 45em;
    margin-bottom: 2em;
    padding: 1.5em 0;
  }

  .project-container img {
    margin: 1em auto;
    height: 45%;
  }

  .project-content {
    margin: 0;
    margin: 1em 2.5em;
  }

  .links-box a {
    height: 2.2em;
  }
}


/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
  .project-container {
    height: 42em;
  }

  .project-container img {
    height: 42%;
  }
}

/* Reponsive para moviles estandar */
@media (max-width: 540px) {
  p {
    font-size: 1em;
  }

  .project-container {
    height: 40em;
  }

  .project-container img {
    border-radius: 1em;
    height: 35%;
  }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
  .mobile-title {
    margin: 0.3em auto 0.5em auto;
  }

  .project-container {
    height: 39em;
    margin-bottom: 2em;
    padding: 1.5em 0;
    padding-bottom: 2em;
  }

  .project-container img {
    margin-top: 0.5em;
    border-radius: 1em;
    height: 30%;
  }
}

/* Reponsive para moviles pequeños */
@media (max-width: 420px) {
  p {
    text-align: left;
    margin: 0;
    margin-bottom: 1em;
    font-size: 0.95em;
  }

  .mobile-title {
    margin: 0em auto 0.5em auto;
  }

  .project-container {
    width: 100%;
    height: 34em;
    margin-bottom: 2em;
    padding: 1.5em 0;
  }

  .project-container img {
    margin: 0.5em auto;
    height: 27%;
  }

  .project-content{
    margin: auto 1.7em;
  }

  .links-box a {
    padding: 0.3em 0 0.5em 0.5em;
    margin: 1em 0;
    width: 9em;
    height: 2em;
  }

}
</style>