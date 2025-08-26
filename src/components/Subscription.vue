<script setup lang="ts">
import DefaultButton from './ui/button/DefaultButton.vue'

const subProps = defineProps<{
  id: number
  period: string
  price: number
  featureList: Array<string>
  url: string
  image: string
  bg: string
}>()
</script>

<template>
  <div class="sub" :style="{ background: subProps.bg }">
    <div class="sub__inner">
      <div class="sub__info">
        <h3 class="sub__title">
          Подписка на {{ subProps.period }}
        </h3>
        <div class="sub__text">
          <h4 class="sub__subtitle">
            {{ subProps.price }} ₽ / сезон
          </h4>
          <ul class="sub__list">
            <li v-for="(feature, index) in featureList" :key="index">
              <p>{{ feature }}</p>
            </li>
          </ul>
        </div>
      </div>
      <DefaultButton :link="subProps.url" text="Приобрести" />
      <img :src="subProps.image" alt="Sniffa" class="sub__image">
    </div>
  </div>
</template>

<style lang="scss">
.sub{
  position: relative;

  border-radius: .5rem;

  &::before{
    content: "";

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background: inherit;

    border-radius: inherit;

    filter: blur(4px);

    z-index: -1;
  }

  &__inner{
    position: relative;
    padding: 1.5rem 6rem 1.5rem 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    overflow: hidden;

    @media (max-width: 767px) {
      padding: 1.5rem;

    }
  }

  &__info{
    display: flex;
    flex-direction: column;
    gap: .375rem;
    align-items: flex-start;

    z-index: var(--zi-low);
  }

  &__list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    line-height: 140%;
    letter-spacing: -0.64px;
  }

  &__title{
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.96px;
  }

  &__text{
    display: flex;
    flex-direction: column;
    gap: .375rem;
    align-items: flex-start;
  }

  &__subtitle{
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.8px;
  }

  &__image{
    position: absolute;
    bottom: 0;
    right: -5%;

    max-width: 11rem;
    height: auto;
  }
}
</style>
