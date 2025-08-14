<script>
import BolitasBackground from './components/BolitasBackground.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import SkillSection from './sections/SkillSection.vue'
import ProyectSection from './sections/ProyectSection.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    BolitasBackground,
    Header,
    Footer,
    HeroSection,
    AboutSection,
    SkillSection,
    ProyectSection,
  }
}
</script>

<template>
  <Header></Header>
  <main>
    <HeroSection/>
    <AboutSection/>
    <SkillSection/>
    <ProyectSection/>
  </main>
  <Footer></Footer>
  <BolitasBackground></BolitasBackground>
</template>

