<template>
  <Section
    title="Rounded"
    excerpt="excerpt"
    :prefix="variable.prefix"
    :information="variable.list"
    informationProps="Size">
      <Example>
        <div class="un-box-list">
          <div
            v-for="(value, name, index) in variable.list"
            :key="index"
            class="un-box-item"
            :class="variable.prefix + name"
          >
            {{ name }}
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.list" :key="index">
          &lt;div class="{{ variable.prefix + name }}">{{ name }}&lt;div>
        </div>
      </Code>
  </Section>
</template>

<script>
  import Section from '../section/section.vue'
  import Code from '../content/code.vue'
  import Example from '../content/example.vue'

  export default {
    props: ['variable'],
    components: {
      Section,
      Code,
      Example
    }
  }
</script>
