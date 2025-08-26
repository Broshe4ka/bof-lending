<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const sliderProps = defineProps<{
  id: number
  icon: string
  title: string
  description: string
  images: Array<string>
}>()

const [emblaRef] = emblaCarouselVue({ loop: true })

// onMounted(() => {
//   if (emblaApi.value) {
//     console.log(emblaApi.value.slideNodes())
//   }
// })
</script>

<template>
  <section class="slider container">
    <div class="slider__info">
      <img :src="sliderProps.icon" alt="Slider icon" class="content__icon">
      <div class="info__title">
        <h3 class="subsection-title">
          {{ sliderProps.title }}
        </h3>
        <p class="info__text">
          {{ sliderProps.description }}
        </p>
      </div>
    </div>
    <div ref="emblaRef" class="embla slider__body">
      <div class="embla__container">
        <img
          v-for="(image, index) in sliderProps.images"
          :key="index"
          :src="image"
          alt=""
          class="embla__slide"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 calc(33% - 1rem * 4 / 5);
  min-width: 0;
  margin-inline: .5rem;

  border-radius: .75rem;

  user-select: none;

  @media (max-width: 992px) {
    flex: 0 0 calc(50% - 1rem * 4 / 5);
  }

  @media (max-width: 767px) {
    flex: 0 0 90%;
  }
}

.slider{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__info{
    display: flex;
    align-items: flex-start;
    gap: 1rem;

  }
  &__body{
    position: relative;

    &::before, &::after{
      content: '';

      position: absolute;
      top: 0;
      bottom: 0;

      z-index: 2;

      width: 3rem;
      height: 100%;

      background: linear-gradient(90deg, #10100E 0%, rgba(16, 16, 14, 0.00) 100%);

      @media (max-width: 767px) {
        display: none;
      }
    }

    &::before{
      left: 0;
    }

    &::after{
      right: 0;
      transform: rotate(180deg);
    }
  }

}

.info{

  &__title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

  }
  &__text{
    color: #888;
    line-height: 140%;
    letter-spacing: -0.64px;
  }
}

.title{
  &__icon{

  }
  &__text{

  }
}
.marqee__img{

}
</style>
