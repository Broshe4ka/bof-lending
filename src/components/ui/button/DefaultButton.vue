<script setup lang="ts">
const buttonProps = defineProps<{
  link: string
  text: string
}>()
</script>

<template>
  <a :href="buttonProps.link" class="button">
    {{ buttonProps.text }}
  </a>
</template>

<style scoped lang="scss">
.button{
    --button-text: #3D3D3D;
    --button-text-active: #CCCCCC;
    --button-bg: var(--color-white);
    --button-bg-hover: #E2E2E2;
    --button-bg-active: #8B8B8B;

    padding: 0.625rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    font-weight: 600;
    line-height: 100%;
    letter-spacing: -0.64px;
    text-align: center;

    border: 2px solid var(--button-bg);
    border-radius: 0.375rem;

    color: var(--button-text);
    background-color: var(--button-bg);

    transition: background-color var(--transition-ease-3ms);

    z-index: var(--zi-low);

    &:hover{
      background-color: var(--button-bg-hover);
    }

    &:active{
      color: var(--button-text-active);
      background-color: var(--button-bg-active);
    }

  }
</style>
