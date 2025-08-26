<script setup lang="ts">
import type { SocialsDataProps } from '../../../types'

const menuProps = defineProps<{
  links: SocialsDataProps[]
}>()
</script>

<template>
  <div class="hover-menu">
    <div class="hover-menu__title">
      <p>Наши ресурсы</p>
      <img
        src="/icons/select.svg"
        alt="Select arrow"
        class="title__image"
      >
      <ul class="hover-menu__links">
        <li
          v-for="link in menuProps.links"
          :key="link.id"
        >
          <a
            :href="link.url"
            class="link"
          >
            <img
              :src="link.icon"
              :alt="link.name"
              class="link__icon"
            >
            <p>{{ link.name }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hover-menu{
  --gap: .25rem;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  &__title{

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    transition: background var(--transition-ease-3ms);

    cursor: pointer;

    &:hover {
      background: var(--link-bg);
    }
    &:hover .title__image{
      transform: rotate(180deg);
    }

  }
  &__links{
    position: absolute;
    top: -100%;
    left: 0;

    width: 100%;

    padding-top: var(--gap);

    display: flex;
    flex-direction: column;
    gap: var(--gap);

    visibility: hidden;
    opacity: 0;

    transition: visibility var(--transition-ease-3ms), opacity var(--transition-ease-3ms);

    li{
      transition: transform var(--transition-ease-3ms);

      opacity: 0;
      transform: translateX(-10%);

      pointer-events: none;

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          transition-delay: ($i - 1) * 0.1s;
        }
      }

      .hover-menu__title:hover & {
        opacity: 1;
        transform: translateX(0);
        pointer-events: all;
      }
    }
  }
}

.link{
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: .5rem .75rem;

  border-radius: .75rem;

  background-color: var(--link-bg);

  &__icon{
    width: 1rem;
  }
}

.title__image{
  width: 1rem;

  transition: transform var(--transition-ease-3ms);
}

.hover-menu__title:hover .hover-menu__links{
  visibility: visible;
  opacity: 1;
  top: 100%;
}
</style>
