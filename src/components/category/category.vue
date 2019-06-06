<template>
  <div>
    <div class="un-section-header">
      <h2 class="un-section-header__title un-section">
        {{ title }}
      </h2>
    </div>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>
