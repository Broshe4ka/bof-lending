<script setup lang="ts">
import FaqSection from './components/FaqSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import StartSection from './components/StartSection.vue'
import SubsSection from './components/SubsSection.vue'
import Blob from './components/ui/Blob.vue'
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
    <Blob style="left: calc(var(--blob-size) / -2); top: 20%" />
    <Blob style="right: calc(var(--blob-size) / -2); top: 40%" />
    <Blob style="left: calc(var(--blob-size) / -2); top: 60%" />
    <Blob style="right: calc(var(--blob-size) / -2); bottom: 0" />
  </div>
</template>

<style scoped lang="scss">

</style>
