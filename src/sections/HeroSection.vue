<template>
  <div class="hero-container">
    <div class="welcome-box" id="greeting">
      <div class="greeting">¡Hola soy Danna Patricia!</div>
      <div class="mobile-profile-box">
        <img src="/personal/yoConMarco2.png" alt="principal">
      </div>
      <p class="hero-content">
        Soy desarrolladora web, siempre dispuesta a participar en proyectos que me permitan aprender nuevas tecnologías
        y crecer como profesional.
        <br><br>
        En este rincón digital te comparto un poco sobre mí, mis habilidades, los proyectos que han impulsado mi
        desarrollo y cómo disfruto escribir un buen código, funcional y bien pensado.
      </p>
      <div class="personal-img-container">
        <a href="https://www.linkedin.com/in/dannapatricia/"><img src="/iconos/linkedIn.png"
            alt="logo-linkedin"></a>
        <a href="https://github.com/DannaPatricia"><img src="/iconos/gitHub.png" alt="logo-gitHub"></a>
        <a href="https://drive.google.com/file/d/1qa1G2-CXxUFlOAaIdHFq6w54nmFPPWM8/view?usp=drive_link"><img
            src="/iconos/cv.png" alt="logo-cv"></a>
      </div>
    </div>
    <div class="profile-box">
      <img src="/personal/yoConMarco2.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: row;
  padding-bottom: 5em;
  max-width: 2240px;
  margin: 0 auto;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.509);
  border-radius: 2em;
  border: 1px solid rgba(211, 192, 218, 0.2);
}

.welcome-box {
  display: flex;
  flex-direction: column;
  margin-left: 10em;
}

.greeting {
  margin-top: 3em;
  font-size: 2.8em;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: rgb(49, 15, 63);
}

.mobile-profile-box {
  display: none;
}

.hero-content {
  font-family: 'Montserrat', sans-serif;
  width: 65%;
  font-size: 1.45em;
  line-height: 1.55em;
  color: rgb(36, 5, 50);
  text-align: justify;
}

.personal-img-container {
  display: flex;
  margin-top: 1.45em;
  gap: 3em;
  width: 100%;
}

.personal-img-container img {
  padding: 0.5em;
  border-radius: 30%;
  background-color: #5b326c;
  transition: all 0.5s ease;
}

.personal-img-container img:hover {
  transform: scale(1.1);
}

.profile-box {
  margin-right: 10em;
}

.profile-box img {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.377));
  margin-top: 6em;
  width: 35em;
}

/* Responsive para moitores grandes de max 1440px */
@media (max-width: 1440px) {
  .welcome-box {
    margin-left: 7em;
  }

  .profile-box {
    margin-right: 7em;
  }

  .profile-box img {
    margin-top: 7em;
    width: 32em;
  }
}

/* Responsive para portatiles estandar*/
@media (max-width: 1280px) {
  .welcome-box {
    margin-left: 5em;
  }

  .greeting {
    margin-top: 2em;
    font-size: 2.2em;
  }

  .hero-content {
    justify-content: center;
    width: 82%;
    font-size: 1.2em;
  }

  .profile-box {
    margin-right: 4em;
  }

  .profile-box img {
    margin-top: 3em;
    width: 27em;
  }

  .personal-img-container img {
    width: 3.5em;
  }

  .main-container {
    padding-bottom: 3.5em;
  }
}

/* Responsive para tablets o portatiles pequeños */
@media (max-width: 1024px) {
  .profile-box {
    display: none;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-bottom: 2.5em;
    width: 100%;
  }

  .hero-container {
    padding: 1.7em;
  }

  .welcome-box {
    margin: 0;
  }

  .greeting {
    text-align: center;
    margin-top: 1.1em;
    font-size: 2.3em;
  }

  .mobile-profile-box {
    display: flex;
  }

  .mobile-profile-box img {
    filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.377));
    margin: 1em auto;
    width: 25em;
  }

  .hero-content {
    justify-content: center;
    margin: 1em auto 1.2em auto;
    width: 80%;
    font-size: 1.4em;
    line-height: 1.9em;
  }

  .personal-img-container {
    margin: 1em auto;
    width: 70%;
    justify-content: space-evenly;
  }

  .personal-img-container img {
    width: 4.2em;
  }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 820px) {
  .greeting {
    margin-top: 0.5em;
    font-size: 2em;
  }

  .mobile-profile-box img {
    width: 20em;
  }

  .personal-img-container img {
    width: 4em;
  }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
  .main-container {
    padding-bottom: 2em;
  }

  .greeting {
    margin-top: 1em;
    font-size: 2em;
  }

  .hero-content {
    margin: 0.8em 0 1.2em 2em;
    width: 90%;
    font-size: 1.23em;
    line-height: 1.6em;
  }

  .personal-img-container {
    margin-top: 0.8em;
    width: 100%;
  }
}

/* Reponsive para moviles estandar */
@media (max-width: 540px) {
  .greeting {
    font-size: 1.5em;
  }

  .mobile-profile-box img {
    width: 15em;
  }

  .hero-content {
    margin: 1em auto;
    width: 85%;
    justify-content: center;
    font-size: 1.1em;
  }

  .personal-img-container {
    gap: 0;
    margin-top: 0.7em;
  }

  .personal-img-container img {
    width: 3em;
  }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
  .main-container {
    padding-bottom: 1em;
  }

  .greeting {
    font-size: 1.5em;
  }

  .mobile-profile-box img {
    width: 11em;
  }

  .hero-content {
    font-size: 1.08em;
    line-height: 1.65em;
  }

  .personal-img-container {
    margin-top: 0.5em;
    gap: 1em;
  }

  .personal-img-container img {
    width: 3em;
  }
}
</style>
