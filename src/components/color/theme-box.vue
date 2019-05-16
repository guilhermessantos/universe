<template>
  <div class="un-theme-box">
    <div class="un-list-flex">
      <div
        v-for="(value, name, index) in variable"
        :key="index"
        class="un-color-box un-color-box--flex"
      >
        <div class="un-color-box__theme-name">{{ name  }}</div>

        <div class="un-color-box__theme--flex">
          <div
            v-for="(valueColor, nameColor, indexColor) in value"
            :key="indexColor"
            class="un-color-box__theme"
          >
            <span class="un-color-box__bg" :style="{'background-color': valueColor}"></span>

            <div class="un-color-box__value">
              {{ valueColor }}
            </div>

            <div class="un-color-box__name">
              {{ nameColor }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <HowToUse :info="'Add .' + prefix +'{style}-bg to change the background of the element'">
      <div
        v-for="(value, name, index) in variable"
        :key="index"
      >
        <div
          v-for="(valueColor, nameColor, indexColor) in value"
          :key="indexColor"
          class="un-color-box__theme"
        >
          .{{ prefix + name }}-bg{{ nameColor == 'base' ? '' : '-' + nameColor }}
        </div>
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
  .un-color-box__theme--flex,
  .un-theme-box .un-how-to__code code {
    display: flex;
  }

  .un-color-box__theme-name {
    margin-bottom: 5px;
  }

  .un-color-box__theme {
    flex: 1;
  }

  .un-theme-box .un-how-to__code code {
    flex-wrap: wrap;

    > div {
      padding: 5px 0;
    }
  }

  .un-color-box--flex,
  .un-theme-box .un-how-to__code code > div {
    flex: 0 0 25%;
  }
</style>
