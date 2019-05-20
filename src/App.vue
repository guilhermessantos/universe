<template>
  <div>
    <Grid :prefix="prefix" :variable="grid"></Grid>
    <Rounded :prefix="prefixModifier" :variable="rounded"></Rounded>
    <Margin :prefix="prefix" :variable="margin"></Margin>
    <Flex :prefix="prefix" :variable="flex"></Flex>
    <Padding :prefix="prefix" :variable="padding"></Padding>
    <TextSection :prefix="prefixModifier" :variable="text"></TextSection>
    <Display :prefix="prefix" :variable="display"></Display>
    <Border :prefix="prefix" :variable="border"></Border>
    <Headings :prefix="prefixModifier" :variable="headings"></Headings>
  </div>
</template>

<script>
  import variables from './assets/javascripts/variables'

  import Border from './components/border/border.vue'
  import Headings from './components/headings/headings.vue'
  import Display from './components/display/display.vue'
  import TextSection from './components/text/text.vue'
  import Padding from './components/padding/padding.vue'
  import Flex from './components/display/flex.vue'
  import Margin from './components/margin/margin.vue'
  import Rounded from './components/rounded/rounded.vue'
  import Grid from './components/grid/grid.vue'

  export default {
    data() {
      return {
        prefix: variables.config.prefix,
        prefixModifier: variables.config['prefix-modifier'],
        border: variables.border,
        headings: variables.headings,
        display: variables.display,
        text: variables.text,
        padding: variables.padding,
        flex: variables.flex,
        margin: variables.margin,
        rounded: variables.rounded,
        grid: variables.grid
      }
    },
    components: {
      Border,
      Headings,
      Display,
      TextSection,
      Padding,
      Flex,
      Margin,
      Rounded,
      Grid
    }
  }
</script>

<style lang="scss">
  @import './assets/sass/style.scss';

  body {
    background: #fdfdfd;
    color: #4C4C4C;
    font: 16px/1 'Open Sans', sans-serif;
  }
</style>
