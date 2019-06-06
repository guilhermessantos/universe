<template>
  <div v-if="information" class="un-table-wrap un-shadow">
    <table class="un-table un-table-theme">
      <thead class="un-text-bold">
        <tr>
          <th width='80'><div></div></th>
          <th width='100'><div>HEX</div></th>
          <th width='300'><div>CLASS</div></th>
          <th><div>THEME</div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, name, index) in information.list" :key="index">
          <td>
            <div>
              <span
                v-for="(value_, name_, index_) in value"
                :key="index_"
                class="un-table__color un-bg"
                :class="information.prefix + name + (name_ === 'base' ? '' : `-${name_}`)">
              </span>
            </div>
          </td>
          <td>
            <div>
              <span v-for="(value_, name_, index_) in value" :key="index_">
                <code class="un-ttu">{{ value_ }}</code>
              </span>
            </div>
          </td>
          <td>
            <div>
              <span v-for="(value_, name_, index_) in value" :key="index_">
                <code>.{{ information.prefix + name + (name_ === 'base' ? '' : `-${name_}`)}}</code>
              </span>
            </div>
          </td>
          <td>
            <div>
              {{ name }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: [
      'information',
    ]
  }

</script>

