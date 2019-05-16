<template>
  <div>
    <Section
      title="Color"
      excerpt="Color palette for texts"
    >
      <ColorBox :variable=color :prefix=prefix></ColorBox>
    </Section>

    <Section
      title="Theme"
      excerpt="Theme color palette"
    >
      <ThemeBox :variable=theme :prefix=prefix></ThemeBox>
    </Section>
  </div>
</template>

<script>
  import Section from '../section/index.vue'
  import ColorBox from './color-box.vue'
  import ThemeBox from './theme-box.vue'

  export default {
    props: ['color', 'theme', 'prefix'],
    components: {
      Section,
      ColorBox,
      ThemeBox
    }
  }
</script>
