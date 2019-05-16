<template>
  <section class="un-section">
    <header class="un-section__header">
      <h2 class="un-section__title">
        {{ title }}
      </h2>

      <p>{{ excerpt }}</p>
    </header>

    <div class="un-section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['title', 'excerpt']
  }
</script>

<style lang="scss">
  .un-section {
    border-bottom: 1px solid #e0e0e0;
    margin-left: auto;
    margin-right: auto;;
    padding: 80px 250px;
  }

  .un-section__header {
    margin-bottom: 10px;
  }

  .un-section__title {
    font-size: 40px;
    margin-bottom: 10px;
  }
</style>
