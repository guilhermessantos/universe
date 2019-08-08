<template>
  <div>
    <Category title="Icons">
      <Icons :variable="icons"></Icons>
    </Category>

    <Category title="Colors">
      <Color :variable="variables.color"></Color>
      <Color :variable="variables.theme" type="theme"></Color>
    </Category>

    <Category title="Layout">
      <Grid :variable="variables.grid" :prefix="variables.config"></Grid>
      <SectionInfo :variable="variables.breakpoint" title="Breakpoint" informationProps="Size">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolor ducimus numquam porro ab. Sit labore dolorum corrupti laboriosam ex rerum beatae suscipit odit, repellendus repellat expedita qui sint nobis?
        </p>
      </SectionInfo>
      <TextSection :variable="variables.text"></TextSection>
      <Headings :variable="variables.headings"></Headings>
    </Category>

    <Category title="Border">
      <Border :variable="variables.border"></Border>
      <Rounded :variable="variables.rounded"></Rounded>
    </Category>

    <Category title="Positions">
      <Margin :variable="variables.margin"></Margin>
      <Padding :variable="variables.padding"></Padding>
    </Category>

    <Category title="Display">
      <Display :variable="variables.display"></Display>
    </Category>

    <Category title="Flex">
      <Flex :variable="variables.flex"></Flex>
    </Category>
  </div>
</template>

<script>
  import variables from './assets/javascripts/variables'
  import { icons } from './assets/svg/'

  import Grid from './components/sections/grid.vue'
  import SectionInfo from './components/section/section-info.vue'
  import Color from './components/sections/color.vue'
  import Headings from './components/sections/headings.vue'
  import Border from './components/sections/border.vue'
  import Margin from './components/sections/margin.vue'
  import Padding from './components/sections/padding.vue'
  import Display from './components/sections/display.vue'
  import Flex from './components/sections/flex.vue'
  import TextSection from './components/sections/text.vue'
  import Rounded from './components/sections/rounded.vue'
  import Icons from './components/sections/icons.vue'
  import Category from './components/category/category.vue'

  export default {
    data() {
      return {
        variables,
        icons
      }
    },
    components: {
      Grid,
      SectionInfo,
      Color,
      Border,
      Margin,
      Display,
      Headings,
      Padding,
      Flex,
      TextSection,
      Rounded,
      Icons,
      Category
    }
  }
</script>
