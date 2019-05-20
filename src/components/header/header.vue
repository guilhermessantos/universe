<template>
  <header class="un-header un-mb-medium">
    <template v-if="tag">
      <span class="un-header__tag un-text-bold un-mb-small">{{ tag }}</span>
    </template>

    <h2 class="un-header__title un-text-bold un-mb-small">
      {{ title }}
    </h2>

    <div class="un-header__excerpt">
      <p>
        {{ excerpt }}
      </p>
    </div>
  </header>
</template>

<script>
  export default {
    props: [
      'title',
      'excerpt',
      'tag'
    ]
  }
</script>
