<template>
  <div>
    <Section
      title="Border Position"
      excerpt="Choose the border position for your component"
      :prefix="variable['prefix-position']"
      :information="variable.position"
      informationProps="Position"
    >
      <Example>
        <div class="un-box-list">
          <div
            v-for="(name, value, index) in variable.position"
            class="un-box-item"
            :key="index"
            :class="variable['prefix-position'] + (name == 'default' ? '' : name) + ' ' + variable['prefix-size'] + Object.keys(variable.size)[0]"
          >
            {{ value }}
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.position" :key="index">
          &lt;div class="{{ variable['prefix-position'] + (value == 'default' ? '' : value) + ' ' + variable['prefix-size'] + Object.keys(variable.size)[0] }}">{{ name }}&lt;div>
        </div>
      </Code>
    </Section>

    <Section
      title="Border Size"
      excerpt="Choose the border size for your component"
      :prefix="variable['prefix-size']"
      :information="variable.size"
      informationProps="Size"
    >
      <Example>
        <div class="un-box-list">
          <div
            v-for="(name, value, index) in variable.size"
            class="un-box-item"
            :key="index"
            :class="variable['prefix-size'] + value + ' ' + variable['prefix-position'] + (variable.position.default == 'default' ? '' : variable.position.default)"
          >
            {{ value }}
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.size" :key="index">
          &lt;div class="{{ variable['prefix-size'] + name + ' ' + variable['prefix-position'] + (variable.position.default == 'default' ? '' : variable.position.default) }}">{{ name }}&lt;div>
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
