<template>
  <div class="un-how-to">
    <p>
      {{ info }}
    </p>

    <div class="un-how-to__code">
      <code>
        <slot></slot>
        <span class="un-how-to__label">code</span>
      </code>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['info']
  }
</script>


<style lang="scss">
  .un-how-to {
    margin-top: 20px;
  }

  .un-how-to__code {
    background: #fff;
    border: 1px solid #e0e0e0;
    font-size: 13px;
    line-height: 1.4;
    margin-top: 10px;
    padding: 15px;

    code {
      display: block;
      position: relative;
    }
  }

  .un-how-to__label {
    border: 1px solid #e0e0e0;
    font-size: 10px;
    position: absolute;
    padding: 5px 6px;
    right: -16px;
    text-transform: uppercase;
    top: -16px;
    line-height: 1;
  }
</style>
