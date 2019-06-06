<template>
  <section class="un-section un-section-info un-flex">
    <div class="un-section__small">
      <Table :information="variable" :informationProps="informationProps"></Table>
    </div>

    <div class="un-section__full">
      <Header :title="title"></Header>

      <div class="un-section__excerpt">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  import Header from '../header/header.vue'
  import Table from '../table/table.vue'

  export default {
    props: [
      'variable',
      'informationProps',
      'title'
    ],
    components: {
      Header,
      Table
    }
  }
</script>
