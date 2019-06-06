<template>
  <section class="un-section un-section-full">
    <div class="un-section__full">
      <Header
        :title="title"
        :excerpt="excerpt"
      ></Header>
      <Prefix
        v-if="prefix"
        :prefix="prefix"
        :prefixProps="prefixProps"
      ></Prefix>
    </div>

    <div class="un-section__full">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import Header from '../header/header.vue'
  import Prefix from '../prefix/prefix.vue'
  import Table from '../table/table.vue'

  export default {
    props: [
      'prefix',
      'prefixProps',
      'title',
      'excerpt'
    ],
    components: {
      Header,
      Prefix,
      Table
    }
  }
</script>
