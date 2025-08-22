<script setup lang="ts">
import { infoData, sliderData } from '../data'
import InfoSection from './InfoSection.vue'
import Slider from './Slider.vue'
</script>

<template>
  <section class="section">
    <h2 class="title title--section container">
      Давайте знакомиться!
    </h2>
    <div class="about__wrapper">
      <Slider
        v-for="data in sliderData"
        :id="data.id"
        :key="data.id"
        :icon="data.icon"
        :title="data.title"
        :description="data.description"
        :images="data.images"
      />
      <InfoSection
        v-for="data in infoData"
        :id="data.id"
        :key="data.id"
        :icon="data.icon"
        :title="data.title"
        :subtitle="data.subtitle"
        :text="data.text"
        :image="data.image"
      />
    </div>
    <!--    <Blob style="left: calc(var(&#45;&#45;blob-size) / -2); top: 5%" /> -->
    <!--    <Blob style="right: calc(var(&#45;&#45;blob-size) / -2); bottom: 0" /> -->
  </section>
</template>

<style lang="scss">
.about__wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  section:nth-child(odd) {
    order: -2;
  }
}
</style>
