<script setup lang="ts">
import { ref } from 'vue'
import { linksData, navData, socialsData } from '../../../data'
import DefaultButton from '../button/DefaultButton.vue'
import Logo from '../Logo.vue'
import BurgerMenu from './BurgerMenu.vue'
import HoverMenu from './HoverMenu.vue'

const isBurgerOpen = ref(false)

function toggleBurger() {
  isBurgerOpen.value = !isBurgerOpen.value
  isBurgerOpen.value
    ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll')
  // Classname in global.scss
}
</script>

<template>
  <header class="header">
    <div class="header__body container">
      <Logo />
      <ul class="links">
        <li v-for="data in navData" :key="data.id">
          <a :href="data.url" class="link">{{ data.name }}</a>
        </li>
        <li>
          <HoverMenu
            :links="socialsData"
          />
        </li>
      </ul>
      <DefaultButton
        :link="linksData.authClear"
        text="Авторизация"
        class="button"
      />
      <button
        class="burger-button"
        :class="{ open: isBurgerOpen }"
        @click="toggleBurger"
      >
        <span class="burger-button__row" />
        <span class="burger-button__row" />
        <span class="burger-button__row" />
      </button>
    </div>
  </header>
  <BurgerMenu
    :state="isBurgerOpen"
    :nav-links="navData"
    :social-links="socialsData"
    :auth-link="linksData.authClear"
  />
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  padding: 1rem 0;

  background: var(--bg-gradient);

  z-index: var(--zi-header);

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

}

.links {
  display: flex;
  align-items: center;
  gap: 1rem;

  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.32px;
  text-align: center;

  @media (max-width: 992px) {
    display: none;
  }
}

.link {
  padding: .5rem 0.75rem;

  border-radius: .75rem;

  transition: background var(--transition-ease-3ms);

  &:hover {
    background: var(--link-bg);
  }

}

.burger-button{
  width: 2.5rem;
  height: 2.5rem;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.45rem;

  background-color: transparent;

  @media (max-width: 992px){
    display: flex;
  }

  &__row{
    width: 2.5rem;
    height: 4px;

    border-radius: .25rem;

    background-color: var(--color-white);

    transition: rotate var(--transition-ease-3ms), opacity var(--transition-ease-3ms);
  }

  &.open{
    .burger-button__row{
      &:nth-child(1){
        rotate: 45deg;
        position: absolute;
      }

      &:nth-child(2){
        opacity: 0;
      }

      &:nth-child(3){
        rotate: -45deg;
        position: absolute;
      }
    }
  }
}

.button{
  @media (max-width: 992px){
    display: none;
  }
}
</style>
