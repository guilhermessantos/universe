<template>
  <header class="un-header un-mb-medium">
    <h2 class="un-header__title un-text-bold un-mb-small">
      {{ title }}
    </h2>

    <div class="un-header__excerpt">
      <slot></slot>
    </div>
  </header>
</template>

<script>
  export default {
    props: [ 'title' ]
  }
</script>
