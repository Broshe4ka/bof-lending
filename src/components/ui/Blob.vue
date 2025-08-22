<script setup lang="ts">

</script>

<template>
  <div class="blob" />
</template>

<style scoped lang="scss">
  .blob{
    --blob-size: 64rem;
    --blob-bg: radial-gradient(50% 50% at 50% 50%, rgba(255, 128, 0, 0.025) 0%, rgba(255, 128, 0, 0.00) 100%);
    --zi-blobs: -1;

    position: absolute;
    width: var(--blob-size);
    height: var(--blob-size);

    border-radius: var(--blob-size);

    background: var(--blob-bg);

    z-index: var(--zi-blobs);
  }
</style>
