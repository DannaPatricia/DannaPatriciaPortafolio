<template>
    <footer>
        <p>¿Quieres trabajar conmigo? Contáctame</p>
        <div id="imgContainer">
            <a href="https://www.linkedin.com/in/dannapatricia/"><img src="/iconos/linkedIn.png"
                    alt="logo-linkedin"></a>
            <a href="https://github.com/DannaPatricia"><img src="/iconos/gitHub.png" alt="logo-gitHub"></a>
            <a href="mailto:dannapatriciacm@gmail.com"><img src="/iconos/mail.png" alt="logo-mail"></a>
            <a href="https://drive.google.com/file/d/1qa1G2-CXxUFlOAaIdHFq6w54nmFPPWM8/view?usp=drive_link"><img
                    src="/iconos/cv.png" alt="logo-cv"></a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 2em;
    padding-top: 0.5em;
    background-color: rgba(59, 15, 79, 0.92);
    box-shadow: 0 0 30px 10px #29022b90;
    backdrop-filter: blur(20px);
    z-index: 1;
}

p {
    margin-bottom: 2.3em;
    font-size: 1.2em;
}

#imgContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    height: 0em;
    padding-bottom: 0.3em;
}

#imgContainer img {
    filter: drop-shadow(0 0 9px white);
    transition: filter 500ms ease-in-out, transform 500ms ease-in-out;
}

#imgContainer img:hover {
    filter: drop-shadow(0 0 9px rgb(183, 14, 255));
    transform: scale(1.1);
}

/* Responsive para portatiles estandar*/
@media (max-width: 1280px) {
    footer {
        padding-top: 0.2em;
        font-size: 0.8em;
    }

    #imgContainer {
        height: 0.5em;
    }

    #imgContainer img {
        height: 2.9em;
    }
}

/* Responsive para dispositivos de max 1024px */
@media (max-width: 1254px) {
    footer {
        padding: 0.6em;
    }

    p {
        margin-bottom: 2.3em;
        font-size: 1.2em;
    }

    #imgContainer {
        margin-bottom: 0.6em;
    }

    #imgContainer img {
        height: 2.5em;
    }
}

/* Responsive para moviles grandes o tablets */
@media (max-width: 768px) {
    footer {
        padding: 1em;
        padding-top: 0.1em;
    }

    #imgContainer {
        margin-bottom: 0.5em;
    }
}

/* Reponsive para moviles pequeños */
@media (max-width: 540px) {
    footer {
        padding: 0.2em;
        padding-top: 0.3em;
        padding-bottom: 0.4em;
    }

    p {
        margin-bottom: 2.5em;
        font-size: 1em;
    }

    #imgContainer {
        padding-bottom: 1em;
        height: 0.5em;
    }

    #imgContainer img {
        height: 2.5em;
    }
}

/* Reponsive para moviles pequeños */
@media (max-width: 480px) {
    footer {
        padding-top: 0.2em;
    }

    p {
        margin-bottom: 2.2em;
        font-size: 0.95em;
    }

    #imgContainer img {
        height: 2.2em;
    }
}
</style>