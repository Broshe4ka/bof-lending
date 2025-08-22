<script setup lang="ts">
import type { NavDataProps, SocialsDataProps } from '../../../types'
import DefaultButton from '../button/DefaultButton.vue'

const burgerProps = defineProps<{
  state: boolean
  navLinks: NavDataProps[]
  socialLinks: SocialsDataProps[]
  authLink: string
}>()
</script>

<template class="">
  <div class="burger">
    <div
      :class="{ open: burgerProps.state }"
      class="burger__wrapper container"
    >
      <DefaultButton :link="burgerProps.authLink" text="Авторизация" />
      <ul class="links-col">
        <li v-for="link in burgerProps.navLinks" :key="link.id">
          <a :href="link.url" class="links-col__link">{{ link.name }}</a>
        </li>
      </ul>
      <ul class="links-row">
        <li v-for="link in burgerProps.socialLinks" :key="link.id">
          <a :href="link.url" class="links-row__link">
            <img :src="link.icon" :alt="link.name">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .burger{
    display: none;

    width: 100%;

    z-index: var(--zi-burger);

    @media (max-width: 992px) {
      display: flex;
    }

    &__wrapper{
      position: fixed;
      top: 0;
      right: -100%;

      width: 100dvw;
      height: 100dvh;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2rem;

      background-color: var(--bg-main);
      padding-top: 6rem;

      opacity: 0;
      visibility: hidden;

      transition: right var(--transition-ease-3ms), opacity var(--transition-ease-3ms), visibility var(--transition-ease-3ms);

      &.open{
        right: 0;
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .links-col{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .5rem;

    &__link{
      padding: 0.25rem;

      font-weight: 500;
    }
  }
  .links-row {
    display: flex;
    gap: 0.25rem;

    &__link {
      width: 2rem;
    }
  }
</style>
