<template>
  <table :class="['table', { 'table-striped': striped }]">
    <thead>
      <tr>
        <template v-for="(item, index) in columns">
          <slot name="column" v-bind="{ item, index }" />
        </template>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="column in columns" :key="column.dataIndex">
          <slot name="item" v-bind="{ item, column, index }" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'vp-table',
  props: {
    striped: Boolean,
    columns: Array,
    items: Array
  }
};
</script>
