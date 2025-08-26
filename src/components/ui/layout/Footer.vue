<script setup lang="ts">
import { licenseData } from '../../../data'
import Logo from '../Logo.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__body container">
      <div class="footer__links">
        <Logo />
        <ul class="links">
          <li v-for="data in licenseData" :key="data.id">
            <a
              :href="data.url"
              class="link"
            >
              {{ data.name }}
            </a>
          </li>
        </ul>
        <ul class="socials">
          <li>
            <a href="" class="socials__link">
              <img src="/icons/tg.svg" alt="Telegram Link Icon" class="link__img">
            </a>
          </li>
          <li>
            <a href="" class="socials__link">
              <img src="/icons/vk.svg" alt="VK Link Icon" class="link__img">
            </a>
          </li>
          <li>
            <a href="" class="socials__link">
              <img src="/icons/yt.svg" alt="YouTube Link Icon" class="link__img">
            </a>
          </li>
          <li>
            <a href="" class="socials__link">
              <img src="/icons/ds.svg" alt="Discord Link Icon" class="link__img">
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__description">
        Not an official Minecraft product. We are in no way affiliated with or endorsed by Mojang Synergies AB, Microsoft Corporation or other rightsholders.
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer{
    position: relative;

    &::after{
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 1px;

      background: #242424;
    }

  &__body{
    display: flex;
    flex-direction: column;

    color: #7D7D7D;
  }

  &__links{
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    padding: .5rem 0;

    @media (max-width: 992px) {
      flex-direction: column;
    }

    @media (max-width: 767px) {
      padding-block: 2rem;
    }

    &::after{
      content: "";

      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 1px;

      background: #242424;
    }

  }

  &__description{
    text-align: center;
    padding: .5rem 0;

    font-size: 0.75rem;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.48px;

    color: #505050;
  }

}

.links{
  display: flex;
  align-items: center;
  gap: 1rem;

  text-align: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
}

.link {
  transition: color var(--transition-ease-3ms);

  &:hover{
    color: var(--color-white);
  }

  &__img{
    transition: filter var(--transition-ease-3ms);

    &:hover{
      filter: brightness(2);
    }
  }
}

.socials{
  display: flex;
  gap: 0.75rem;
}
</style>
