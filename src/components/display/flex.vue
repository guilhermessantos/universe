<template>
  <div>
    <SectionSmall
      :prefix="prefix"
      title="Flex Align"
      excerpt="excerpt"
    >
      <Example>
        <div
          v-for="(value, name, index) in variable['align-items']"
          :key="index"
          :class="prefix + 'align-items-' + name + ' un-item'"
          style="display: flex; height: 50px; padding: 0"
        >
          <div>{{ value }}</div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable['align-items']" :key="index">
          &lt;div class="{{ prefix + 'align-items-' + name }}">{{ value }}&lt;div>
        </div>
      </Code>
    </SectionSmall>

    <SectionSmall
      :prefix="prefix"
      title="Flex Display"
      excerpt="excerpt"
    >
      <Example>
        <div
          v-for="(value, index) in variable.display"
          :key="index"
          :class="prefix + value + ' un-item'"
        >
          {{ value }}
        </div>
      </Example>

      <Code>
        <div v-for="(value, index) in variable.display" :key="index">
          &lt;div class="{{ prefix + value }}">{{ value }}&lt;div>
        </div>
      </Code>
    </SectionSmall>

    <SectionSmall
      :prefix="prefix"
      title="Flex Justify"
      excerpt="excerpt"
    >
      <Example>
        <div
          v-for="(value, name, index) in variable.justify"
          :key="index"
          :class="prefix + 'justify-' + name + ' un-item'"
          style="display: flex"
        >
          <div>{{ value }}</div>
          <div>{{ value }}</div>
          <div>{{ value }}</div>
        </div>
      </Example>

      <Code>
        <div v-for="(value, name, index) in variable.justify" :key="index">
          &lt;div class="{{ prefix + 'justify-' + name }}">{{ value }}&lt;div>
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
