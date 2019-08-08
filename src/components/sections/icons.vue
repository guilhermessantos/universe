<template>
  <section class="un-section un-section-full">
    <div class="un-section__full">
      <Example>
        <ul class="un-icons">
          <li class="un-icons__item" v-for="(value, name, index) in variable" :key="index">
            <span class="un-icons__label">{{value.id.replace('-usage', '')}}</span>
            <svg>
              <use :xlink:href="value"></use>
            </svg>
          </li>
        </ul>
      </Example>
    </div>
  </section>
</template>

<script>
  import Example from '../content/example.vue'

  export default {
    props: ['variable'],
    components: {
      Example
    }
  }
</script>
