<script setup lang="ts">
import { ref } from 'vue'

const buttonProps = defineProps<{
  text: string
  clipText: string
}>()

const isCopied = ref(false)

async function copyFunction() {
  try {
    await navigator.clipboard.writeText(buttonProps.clipText)
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 3000)
  } catch (err) {
    console.error('Ошибка при копировании:', err)
  }
}
</script>

<template>
  <button
    :disabled="isCopied"
    class="button"
    :class="{ copied: isCopied }"
    @click="copyFunction"
  >
    <img v-if="!isCopied" class="button__icon" src="/icons/copy.svg" alt="">
    {{ isCopied ? "Скопировано!" : buttonProps.text }}
  </button>
</template>

<style scoped lang="scss">
.button{
  --button-text: var(--color-white);
  --button-text-copyed: #3D3D3D;
  --button-bg: transparent;

  --button-bg-hover: #ffffff1A;
  --button-bg-active: #FFFFFF40;

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

  &.copied{
    background-color: var(--button-text);
    color: var(--button-text-copyed);
  }

  &__icon{
    width: 1rem;
    aspect-ratio: 1;
  }

  &:hover{
    background-color: var(--button-bg-hover);
  }

  &:active{
    color: var(--button-text-active);
    background-color: var(--button-bg-active);
  }

  &:disabled{
    cursor: wait;
  }

  &:disabled:hover{
    background-color: var(--button-text);
    color: var(--button-text-copyed);
  }
}
</style>
