<script setup lang="ts">
import FaqSection from './components/FaqSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import StartSection from './components/StartSection.vue'
import SubsSection from './components/SubsSection.vue'
import Footer from './components/ui/layout/Footer.vue'
import Header from './components/ui/layout/Header.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <StartSection />
      <ProjectSection />
      <SubsSection />
      <FaqSection />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

</style>
