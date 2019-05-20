<template>
  <div>
    <SectionSmall
      :prefix="prefix"
      :variable="variable"
      informationProps="Size"
      title="Rounded"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div
          v-for="(value, name, index) in variable"
          :key="index"
          class="un-box-item"
          :class="prefix + 'rounded-' + name"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable" :key="index">
          &lt;div class="{{ prefix + 'rounded-' + name }}">{{ name }}&lt;div>
        </div>
      </Code>
    </SectionSmall>
  </div>
</template>

<script>
  import Section from '../section/section.vue'
  import SectionSmall from '../section/section-small.vue'
  import Code from '../content/code.vue'
  import Example from '../content/example.vue'

  export default {
    props: ['prefix', 'variable'],
    components: {
      Section,
      SectionSmall,
      Code,
      Example
    }
  }
</script>
