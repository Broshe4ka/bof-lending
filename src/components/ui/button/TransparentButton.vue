<script setup lang="ts">
const buttonProps = defineProps<{
  onClickFunction: () => void
  text: string
}>()
</script>

<template>
  <button class="button" @click="buttonProps.onClickFunction">
    {{ buttonProps.text }}
  </button>
</template>

<style scoped lang="scss">
.button{
  --button-text: var(--color-white);
  --button-bg: transparent;

  padding: 0.625rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.64px;
  text-align: center;

  border: 2px solid var(--button-text);
  border-radius: 0.375rem;

  color: var(--button-text);
  background-color: var(--button-bg);

  transition: background-color var(--transition-ease-3ms);

  z-index: var(--zi-low);

}
</style>
