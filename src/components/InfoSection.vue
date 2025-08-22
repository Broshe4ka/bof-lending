<script setup lang="ts">
const infoProps = defineProps<{
  id: number
  icon: string
  title: string
  subtitle: string
  text: Array<string>
  image: string
}>()
</script>

<template>
  <section class="info container">
    <div class="info__content">
      <img :src="infoProps.icon" alt="Section icon" class="content__icon">
      <div class="content__text">
        <h2 class="subsection-title">
          {{ infoProps.title }}
        </h2>
        <h3 class="subsection-subtitle">
          {{ infoProps.subtitle }}
        </h3>
        <ul v-for="item in infoProps.text" :key="item.length" class="info__list">
          <li>
            <p v-html="item" />
          </li>
        </ul>
      </div>
    </div>
    <img :src="infoProps.image" alt="" class="info__img">
  </section>
</template>

<style lang="scss">
.info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 3rem;
  }

   &__img{
    max-width: 24rem;
    width: 100%;
   }

  &__content{
    width: 100%;
    max-width: calc(50% - 0.5rem);

    color: #888;

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }

  &__content{
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  &__list{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.content{

  &__text{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__icon{
    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
