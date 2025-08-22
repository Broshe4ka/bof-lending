<script setup lang="ts">
import { subData } from '../data'
import Subscription from './Subscription.vue'
</script>

<template>
  <section class="section container">
    <h2 class="title">
      Выберите свой вариант подписки!
    </h2>
    <div class="subs">
      <Subscription
        v-for="sub in subData"
        :id="sub.id"
        :key="sub.id"
        :period="sub.period"
        :price="sub.price"
        :feature-list="sub.featureList"
        :url="sub.url"
        :image="sub.image"
        :bg="sub.bg"
      />
    </div>
  </section>
</template>

<style lang="scss">
.subs{
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1.25rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}
</style>
