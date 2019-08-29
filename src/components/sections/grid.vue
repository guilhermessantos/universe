<template>
  <section class="un-section un-section-full">
    <div class="un-section__full">
      <Header title="Grid">
        <div class="un-box un-code un-table-inline">
          <span v-for="(name, value, index) in variable" :key="index">
            <strong>{{ value }}</strong> {{ name }}
          </span>
        </div>

        <p>
          Grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox.
        </p>
        <p>
          To use the grid correctly we use <code>.{{prefix.prefix}}col</code> inside of <code>.{{prefix.prefix}}row</code>.
        </p>
        <p>
          To set the size of the column we use <code>.{{prefix['prefix-modifier']}}1</code> plus <code>.{{prefix.prefix}}col</code>.
        </p>
      </Header>
    </div>

    <div class="un-section__full">
      <Example>
        <div v-for="row in variable.col" :key="row" :class="prefix.prefix + 'row'">
          <div :class="prefix.prefix + 'col ' + prefix['prefix-modifier'] + row">
            <span class="un-box-grid">{{row}}</span>
          </div>
        </div>
      </Example>

      <Code>
        &lt;div class="{{prefix.prefix + 'container'}}">
          <div v-for="row in variable.col" :key="row" :class="prefix.prefix + 'row'">
            &lt;div class="{{prefix.prefix + 'row'}}">
              <div v-for="col in row" :key="col" :class="prefix.prefix + 'col ' + prefix['prefix-modifier'] + row">
                &lt;div class="{{prefix.prefix + 'col ' + prefix['prefix-modifier'] + row}}">Column&lt;/div>
              </div>
            &lt;/div>
          </div>
        &lt;/div>
      </Code>
    </div>
  </section>
</template>

<script>
  import Code from '../content/code.vue'
  import Example from '../content/example.vue'
  import Header from '../header/header.vue'

  export default {
    props: ['prefix', 'variable'],
    components: {
      Header,
      Code,
      Example
    }
  }
</script>
