<template>
  <div>
    <Section
      title="Margin Size"
      excerpt="excerpt"
      :prefix="variable.prefix"
      :information="variable.size"
      informationProps="Size"
    >
      <Example>
        <div class="un-box-list">
          <div
            v-for="(name, value, index) in variable.size"
            :key="index"
            class="un-box-margin"
          >
            <span :class="variable.prefix + variable.separator + value">{{ value }}</span>
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(name, value, index) in variable.size" :key="index">
          &lt;div class="{{ variable.prefix + variable.separator + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </Section>

    <Section
      title="Margin Position"
      excerpt="excerpt"
      :prefix="variable.prefix"
      :information="variable.position"
      informationProps="Position"
    >
      <Example>
        <div class="un-box-list">
          <div
            v-for="(name, value, index) in variable.position"
            :key="index"
            class="un-box-margin"
          >
            <span :class="variable.prefix + (name == 'default' ? '' : name) + variable.separator + Object.keys(variable.size)[0]">{{ value }}</span>
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(name, value, index) in variable.position" :key="index">
          &lt;div class="{{ variable.prefix + (name == 'default' ? '' : name) + variable.separator + Object.keys(variable.size)[0] }}">{{ value }}&lt;div>
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
