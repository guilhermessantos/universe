<template>
  <div>
    <Color
      :color=colors
      :theme=themes
      :prefix=prefixModifier
    ></Color>
  </div>
</template>

<script>
  import variables from './assets/javascripts/variables'
  import Color from './components/color/index.vue'

  export default {
    data() {
      return {
        prefixModifier: variables.config['prefix-modifier'],
        colors: variables.color,
        themes: variables.theme
      }
    },
    components: {
      Color
    }
  }
</script>

<style lang="scss">
  @import './assets/sass/utilities/reset';

  body {
    background: #fdfdfd;
    color: #171717;
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-size: 14px;
  }

  .un-list-flex {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1px;
  }
</style>
