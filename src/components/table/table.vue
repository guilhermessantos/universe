<template>
  <div class="un-table-wrap">
    <table class="un-table">
      <thead class="un-text-bold">
        <tr>
          <th><div>{{ informationProps }}</div></th>
          <th><div>{{ informationProps == 'Position' ? 'Prefix' : 'Unit' }}</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, name, index) in information" :key="index">
          <td><div>{{ name }}</div></td>
          <td><div>{{ value == 'default' ? '&nbsp' : value }}</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: [
      'information',
      'informationProps'
    ]
  }

</script>

