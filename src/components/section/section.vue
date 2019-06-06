<template>
  <section class="un-section un-flex">
    <div class="un-section__small">
      <Header :title="title">
        {{ excerpt }}
      </Header>
      <Prefix
        :prefix="prefix"
        :prefixProps="prefixProps"
      ></Prefix>
    </div>

    <div class="un-section__small">
      <Table
        :information="information"
        :informationProps="informationProps"
      ></Table>
    </div>

    <div class="un-section__full un-shadow">
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
      'excerpt'
    ],
    components: {
      Header,
      Prefix,
      Table
    }
  }
</script>
