<template>
  <section
    class="un-section"
    :class="full ? 'un-full' : 'un-flex'"
  >
    <div class="un-section__sidebar">
      <Header
        :title="title"
        :excerpt="excerpt"
        :tag="tag"
      ></Header>
      <Prefix
        :prefix="prefix"
        :prefixProps="prefixProps"
      ></Prefix>
      <Table
        :information="variable"
        :informationProps="informationProps"
      ></Table>
    </div>

    <div class="un-section__content">
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
      'variable',
      'information',
      'informationProps',
      'title',
      'excerpt',
      'tag',
      'full'
    ],
    components: {
      Header,
      Prefix,
      Table
    }
  }
</script>
