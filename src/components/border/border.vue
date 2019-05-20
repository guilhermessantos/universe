<template>
  <div>
    <SectionSmall
      :prefix="prefix"
      :variable="variable.size"
      :prefixProps="variable['prefix-size']"
      informationProps="Size"
      title="Border Size"
      excerpt="excerpt"
      tag="border"
    >
      <Example>
        <div
          v-for="(value, name, index) in variable.size"
          :key="index"
          :class="'un-box-item ' + prefix + variable['prefix-size'] + name + ' ' + prefix + variable['prefix-position'] + (Object.keys(variable.position)[0] == 'default' ? '' : value) + ''"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.size" :key="index">
          &lt;div class="{{ prefix + variable['prefix-size'] + name + ' ' + prefix + variable['prefix-position'] + (Object.keys(variable.position)[0] == 'default' ? '' : value) + '' }}">{{ name }}&lt;div>
        </div>
      </Code>
    </SectionSmall>

    <SectionSmall
      :prefix="prefix"
      :variable="variable.position"
      :prefixProps="variable['prefix-position']"
      informationProps="Position"
      title="Border Position"
      excerpt="excerpt"
      tag="border"
    >
      <Example>
        <div
          v-for="(value, name, index) in variable.position"
          :key="index"
          :class="'un-box-item ' + prefix + variable['prefix-position'] + (value == 'default' ? '' : value) + ' ' + prefix + variable['prefix-size'] + Object.keys(variable.size)[0]"
        >
          {{ name }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.position" :key="index">
          &lt;div class="{{ prefix + variable['prefix-position'] + (value == 'default' ? '' : value) + ' ' + prefix + variable['prefix-size'] + Object.keys(variable.size)[0] }}">{{ name }}&lt;div>
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
