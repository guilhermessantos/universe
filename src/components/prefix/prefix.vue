<template>
  <div class="un-prefix un-mb-medium un-text-bold">
    <strong class="un-prefix__label">Prefix</strong>
    <span class="un-prefix__text">{{ prefix }}{{ prefixProps }}</span>
  </div>
</template>

<script>
  export default {
    props: ['prefix', 'prefixProps']
  }
</script>
