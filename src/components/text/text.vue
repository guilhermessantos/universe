<template>
  <div>
    <SectionSmall
      :prefix="prefix"
      :variable="variable.size"
      informationProps="Size"
      title="Text Size"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div
          v-for="(value, name, index) in variable.size"
          :key="index"
          :class="prefix + variable.prefix + name"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.size" :key="index">
          &lt;div class="{{ prefix + variable.prefix + name }}">{{ name }}&lt;div>
        </div>
      </Code>
    </SectionSmall>

    <SectionSmall
      :prefix="prefix"
      :variable="variable.weight"
      informationProps="Size"
      title="Text Weight"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div
          v-for="(value, name, index) in variable.weight"
          :key="index"
          :class="prefix + variable.prefix + name"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.weight" :key="index">
          &lt;div class="{{ prefix + variable.prefix + name }}">{{ name }}&lt;div>
        </div>
      </Code>
    </SectionSmall>

    <SectionSmall
      :prefix="prefix"
      title="Text Align & Transform"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div
          v-for="(value, index) in variable.align"
          :key="index"
          :class="prefix + variable.prefix + value + ' un-item'"
        >
          {{ value }}
        </div>

        <br>

        <div
          v-for="(value, index) in variable.transform"
          :key="index"
          :class="prefix + variable.prefix + value">
          {{ value }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, index) in variable.align" :key="index">
          &lt;div class="{{ prefix + variable.prefix + value }}">{{ value }}&lt;div>
        </div>
      </Code>

      <Code>
        <div v-for="(value, index) in variable.transform" :key="index">
          &lt;div class="{{ prefix + variable.prefix + value }}">{{ value }}&lt;div>
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
