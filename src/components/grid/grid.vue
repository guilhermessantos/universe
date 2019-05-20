<template>
  <div>
    <Section
      :prefix="prefix"
      :variable="variable"
      informationProps="Size"
      title="Grid"
      :prefixProps="variable.prefix"
      excerpt="excerpt"
      tag="Text">
      <Example>
        <div class="ui-container">
          <div v-for="n in variable.col" :key="n" class="ui-row">
            <div v-for="x in n" :key="x" :class="'un-box-item ui-col is-' + n" style="margin: 0;">
              <span style="background: #fff; display: block; padding: 10px; width: 100%">{{ n }}</span>
            </div>
          </div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable" :key="index">
          &lt;div class="{{ prefix + 'rounded-' + name }}">{{ name }}&lt;div>
        </div>
      </Code>
    </Section>
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
