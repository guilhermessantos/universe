<template>
  <div>
    <SectionSmall
      :prefix="prefix"
      :variable="variable.size"
      title="Headings"
      excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vel!"
      tag="Text"
      informationProps="Size"
    >
      <Example>
        <div v-for="(value, name, index) in variable.size" :key="index">
          <h1 :class="prefix + name">{{ name }} Lorem ipsum dolor, sit amet</h1>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.size" :key="index">
          &lt;h{{index + 1}} class="{{ prefix + name }}">{{name}} Lorem ipsum dolor, sit amet&lt;h{{index + 1}}>
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

