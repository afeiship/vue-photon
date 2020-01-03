<template>
  <div class="padded container">
    <vp-table :items="table.items" :columns="table.columns">
      <template v-slot:column="{ item, index }">
        <th>{{ item.label }}</th>
      </template>

      <template v-slot:item="{ item, column, index }">
        <td>{{ item[column.dataIndex] }}</td>
      </template>
    </vp-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        columns: [
          { key: 'name', label: 'Name', dataIndex: 'name' },
          { key: 'kind', label: 'Kind', dataIndex: 'kind' },
          { key: 'date', label: 'Date Modified', dataIndex: 'date' },
          { key: 'author', label: 'Author', dataIndex: 'author' }
        ],
        items: [
          {
            id: 'bars.scss',
            name: 'bars.scss',
            kind: 'Document',
            date: 'Oct 13, 2015',
            author: 'connors'
          },
          {
            id: 'buttons.scss',
            name: 'buttons.scss',
            kind: 'Document',
            date: 'Oct 13, 2015',
            author: 'afei'
          },
          {
            id: 'lists.scss',
            name: 'lists.scss',
            kind: 'Document',
            date: 'Oct 13, 2015',
            author: 'afeiship'
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  color: #333;
}
</style>
