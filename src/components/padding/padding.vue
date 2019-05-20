<template>
  <div>
    <SectionSmall
      :prefix="prefix"
      :variable="variable.size"
      informationProps="Size"
      title="Padding Size"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div
          v-for="(value, name, index) in variable.size"
          :key="index"
          class="un-box-item"
          :class="prefix + variable.prefix + '-' + name"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.size" :key="index">
          &lt;div class="{{ prefix + variable.prefix + '-' + name }}">{{ name }}&lt;div>
        </div>
      </Code>
    </SectionSmall>

    <SectionSmall
      :prefix="prefix"
      :variable="variable.position"
      informationProps="Position"
      title="Padding Position"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div
          v-for="(value, name, index) in variable.position"
          :key="index"
          class="un-box-item"
          :class="prefix + variable.prefix + (value == 'default' ? '' : value) + '-' + Object.keys(variable.size)[0]"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.position" :key="index">
          &lt;div class="{{ prefix + variable.prefix + (value == 'default' ? '' : value) + '-' + Object.keys(variable.size)[0] }}">{{ name }}&lt;div>
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
