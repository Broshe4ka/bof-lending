<script setup lang="ts">
import { faqData } from '../data'

import Accordion from './ui/Accordion.vue'
</script>

<template>
  <section class="section">
    <h2 class="title">
      У вас остались вопросы?
    </h2>
    <div class="faq container">
      <Accordion
        v-for="item in faqData"
        :key="item.id"
        :question="item.question"
        :answer="item.answer"
      />
    </div>
  </section>
</template>

<style lang="scss">
.faq{
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  border-radius: .5rem;
}
</style>
