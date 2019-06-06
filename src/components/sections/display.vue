<template>
  <div>
    <SectionFull
      :prefix="variable.prefix"
      title="Display"
      excerpt="excerpt"
    >
      <Example>
        <div class="un-box-list">
          <div
            class="un-item un-item-display"
            v-for="(value, index) in variable.list"
            :key="index"
            :class="variable.prefix + value"
          >
            {{ value }}
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, index) in variable.list" :key="index">
          &lt;div class="{{ variable.prefix + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </SectionFull>
  </div>
</template>

<script>
  import SectionFull from '../section/section-full.vue'
  import Code from '../content/code.vue'
  import Example from '../content/example.vue'

  export default {
    props: ['variable'],
    components: {
      SectionFull,
      Code,
      Example
    }
  }
</script>
