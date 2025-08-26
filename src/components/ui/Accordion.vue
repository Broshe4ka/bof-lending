<script setup lang="ts">
import { ref } from 'vue'

const accordionProps = defineProps({
  id: Number,
  question: String,
  answer: String,
})

const isOpen = ref(false)

function toggleAccord() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    class="faq__item"
    :class="{ open: isOpen }"
  >
    <div
      class="faq__header"
      @click="toggleAccord"
    >
      <h3 class="faq__title">
        {{ accordionProps.question }}
      </h3>
      <span class="faq__icon">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <div
      class="faq__body"
      :class="{ open: isOpen }"
    >
      <p v-html="accordionProps.answer" />
    </div>
  </div>
</template>

<style lang="scss">
.faq {
  &__item {
    --faq-bg: #171717;
    --faq-bg-open: #1B1B1B;

    padding: .75rem 1rem;

    display: flex;
    flex-direction: column;
    gap: 0;

    background-color: var(--faq-bg);

    border-radius: .75rem;

    transition: background-color var(--transition-ease-3ms);

    &.open{
      background-color: var(--faq-bg-open);
    }
  }

  &__header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.6px;

    cursor: pointer;

    user-select: none;
  }

  &__title {
    color: #CCC;
  }

  &__icon {
    color: #5C5C5C;
  }

  &__body {
    display: grid;
    grid-template-rows: 0fr;

    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.64px;

    color: #888;

    transition: grid-template-rows var(--transition-ease-3ms);

    p{
      overflow: hidden;
      padding-top: 1rem;
    }

    &.open {
      grid-template-rows: 1fr;
    }
  }
  a{
    text-decoration: underline;
    color: var(--link-color);
  }
}
</style>
