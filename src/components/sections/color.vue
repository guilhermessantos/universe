<template>
  <section class="un-section">
    <div class="un-section__container">
      <Header :title="title">{{ excerpt }}</Header>
      <Prefix :prefix="variable.prefix"></Prefix>
    </div>

    <div class="un-section__container">
      <TableColor v-if="type !== 'theme'" :information="variable"></TableColor>
      <TableTheme v-if="type === 'theme'" :information="variable"></TableTheme>
    </div>
  </section>
</template>

<script>
  import Header from '../header/header.vue'
  import Prefix from '../prefix/prefix.vue'
  import TableColor from '../table/table-color.vue'
  import TableTheme from '../table/table-theme.vue'

  export default {
    props: [
      'variable',
      'title',
      'excerpt',
      'type',
    ],
    components: {
      Header,
      Prefix,
      TableColor,
      TableTheme
    }
  }
</script>
