<template>
  <div>
    <Section
      :prefix="prefix"
      title="Display"
      excerpt="excerpt"
    >
      <Example>
        <div
          v-for="(value, index) in variable"
          :key="index"
          :class="prefix + value + ' un-item'"
        >
          {{ value }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, index) in variable" :key="index">
          &lt;div class="{{ prefix + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </Section>
  </div>
</template>

<script>
  import Section from '../section/section.vue'
  import Code from '../content/code.vue'
  import Example from '../content/example.vue'

  export default {
    props: ['prefix', 'variable'],
    components: {
      Section,
      Code,
      Example
    }
  }
</script>
