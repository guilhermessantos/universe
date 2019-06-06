<template>
  <div>
    <Section
      title="Justify"
      excerpt="Excerpt"
      :prefix="variable.prefix"
      :information="variable.justify"
      informationProps="Position"
    >
      <Example>
        <div class="un-box-list">
          <div
            v-for="(name, value, index) in variable.justify"
            :key="index"
            class="un-box-flex"
            :class="variable.prefix + 'justify' + variable.separator + value"
          >
            <span v-for="number in 3" :key="number">{{ value }}</span>
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(name, value, index) in variable.justify" :key="index">
          &lt;div class="{{ variable.prefix + 'justify' + variable.separator + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </Section>

    <Section
      title="Align Items"
      excerpt="Excerpt"
      :prefix="variable.prefix"
      :information="variable['align-items']"
      informationProps="Position"
    >
      <Example>
        <div class="un-box-list un-list-flex">
          <div
            v-for="(name, value, index) in variable['align-items']"
            class="un-box-align"
            :class="variable.prefix + 'align-items' + variable.separator + value"
            :key="index"
          >
            <span>{{ value }}</span>
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(name, value, index) in variable['align-items']" :key="index">
          &lt;div class="{{ variable.prefix + 'align-items' + variable.separator + value }}">{{ value }}&lt;div>
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
