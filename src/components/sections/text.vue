<template>
  <div>
    <SectionFull
      :prefix="variable.prefix"
      title="Text"
    >
      <Example>
        <div
          v-for="(name, value, index) in variable.weight"
          :key="index"
          :class="variable.prefix + value"
        >
          {{ value }} - Lorem ipsum dolor sit amet.
        </div>

        <br>

        <div
          v-for="(value, index) in variable.transform"
          :key="index"
          :class="variable.prefix + value"
        >
          {{ value }} - Lorem ipsum dolor sit amet.
        </div>

        <br>

        <div
          v-for="(value, index) in variable.align"
          :key="index"
          :class="variable.prefix + value"
        >
          {{ value }} - Lorem ipsum dolor sit amet.
        </div>
      </Example>

      <Code>
        <div v-for="(name, value, index) in variable.weight" :key="index">
          &lt;div class="{{ variable.prefix + value }}">{{ value }}&lt;div>
        </div>

        <div v-for="(value, index) in variable.transform" :key="index">
          &lt;div class="{{ variable.prefix + value }}">{{ value }}&lt;div>
        </div>

        <div v-for="(value, index) in variable.align" :key="index">
          &lt;div class="{{ variable.prefix + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </SectionFull>

    <Section
      title="Text Size"
      excerpt="Excerpt"
      :prefix="variable.prefix"
      :information="variable.size"
      informationProps="Size"
    >
      <Example>
        <div
          v-for="(name, value, index) in variable.size"
          :key="index"
          :class="variable.prefix + value"
        >
          {{ value }} - Lorem ipsum dolor sit amet.
        </div>
      </Example>

      <Code>
        <div v-for="(name, value, index) in variable.size" :key="index">
          &lt;div class="{{ variable.prefix + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </Section>
  </div>
</template>

<script>
  import SectionFull from '../section/section-full.vue'
  import Section from '../section/section.vue'
  import Code from '../content/code.vue'
  import Example from '../content/example.vue'

  export default {
    props: ['variable'],
    components: {
      SectionFull,
      Section,
      Code,
      Example
    }
  }
</script>
