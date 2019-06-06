<template>
  <div>
    <Section
      title="Headings"
      excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vel!"
      :prefix="variable['prefix-size']"
      :information="variable.size"
      informationProps="Size"
    >
      <Example>
        <div v-for="(value, name, index) in variable.size" :key="index">
          <h1 :class="variable.prefix + ' ' + variable['prefix-size'] + name">{{ name }} Lorem ipsum dolor, sit amet</h1>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.size" :key="index">
          &lt;h{{index + 1}} class="{{ variable.prefix + ' ' + variable['prefix-size'] + name }}">{{name}} Lorem ipsum dolor, sit amet&lt;h{{index + 1}}>
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
    props: ['variable'],
    components: {
      Section,
      Code,
      Example
    }
  }
</script>

