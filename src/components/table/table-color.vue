<template>
  <div v-if="information" class="un-table-wrap un-shadow">
    <table class="un-table">
      <thead class="un-text-bold">
        <tr>
          <th width='80'><div></div></th>
          <th width='100'><div>HEX</div></th>
          <th width='300'><div>CLASS</div></th>
          <th><div>COLOR</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, name, index) in information.list" :key="index">
          <td>
            <div>
              <span class="un-table__color" :class="information.prefix + name"></span>
            </div>
          </td>
          <td><div><code class="un-ttu">{{ value }}</code></div></td>
          <td><div><code>.{{ information.prefix + name }}</code></div></td>
          <td><div>{{ name }}</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: [
      'information'
    ]
  }

</script>

