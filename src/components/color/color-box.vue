<template>
  <div>
    <div class="un-list-flex">
      <div
        v-for="(value, name, index) in variable"
        :key="index"
        class="un-color-box"
      >
        <span class="un-color-box__bg" :style="{'background-color': value}"></span>

        <div class="un-color-box__value">
          {{ value }}
        </div>

        <div class="un-color-box__name">
          {{ name }}
        </div>
      </div>
    </div>

    <HowToUse :info="'Add .' + prefix +'{style}-color to change the color of the text'">
      <div
        v-for="(value, name, index) in variable"
        :key="index"
      >
        .{{ prefix + name }}-color
      </div>
    </HowToUse>
  </div>
</template>

<script>
  import HowToUse from '../howtouse/index.vue'

  export default {
    props: ['variable', 'prefix'],
    components: {
      HowToUse
    }
  }
</script>

<style lang="scss">
  .un-color-box {
    background: #fff;
    border: 1px solid #e0e0e0;
    flex: 0 0 5%;
    font-size: 13px;
    max-width: 100%;
    margin-left: -1px;
    margin-top: -1px;
    padding: 15px;
  }

  .un-color-box__bg {
    display: block;
    height: 30px;
    margin-bottom: 5px;
  }

  .un-color-box__value {
    text-transform: uppercase;
  }
</style>
