<script setup lang="ts">
import CopyButton from './ui/button/CopyButton.vue'
import DefaultButton from './ui/button/DefaultButton.vue'
</script>

<template>
  <section class="home">
    <div class="home__body container">
      <h2 class="title">
        Добро пожаловать на #BoF!
      </h2>
      <p class="home__text">
        Прогрессивный Minecraft RP сервер с эксклюзивными механиками и уникальным геймплеем!
        Присоединяйся к нашему большому и дружному сообществу, где ты можешь пустить в ход всю свою фантазию и поделиться ей со всеми!
      </p>
      <div class="buttons">
        <div class="buttons__group">
          <DefaultButton
            link="#"
            text="Подробнее"
          />
          <CopyButton
            text="Копировать IP"
            clip-text="192.108.101.1"
          />
        </div>
        <p class="buttons__description">
          Версия игры: Java Edition 1.21.4
        </p>
      </div>
    </div>
    <img
      src="/images/bg.webp"
      alt=""
      class="home__image"
    >
    <div class="home__gradient" />
  </section>
</template>

<style lang="scss">
.home{
  position: relative;

  height: 100svh;

  &__body{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #CCC;
  }

  &__text{
    max-width: 50%;
    text-align: center;
    font-size: 1.25rem;
    line-height: 140%;
    letter-spacing: -0.4px;
    margin: 1.5rem 0 1.25rem 0;

    @media (max-width: 992px) {
      max-width: 100%;
    }
  }

  &__image{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: -2;
  }
  &__gradient{
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: -1;

    background: linear-gradient(180deg, #0e0e0e00, #0E0E0E 100%);
  }
}

.buttons{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 767px) {
    width: 100%;
  }

  &__group{
    display: flex;
    gap: 1.5rem;

    @media (max-width: 767px) {
      width: 100%;
      flex-direction: column;
      gap: .5rem;
    }

    & > a, button{
      min-width: 11rem;
    }

  }
  &__description{
    text-align: center;
    line-height: 140%;
    letter-spacing: -0.64px;
  }

}
</style>
