<template>
  <select class="form-control">
    <template v-for="(item, index) in items">
      <slot v-bind="{ item, index }" />
    </template>
  </select>
</template>

<script>
export default {
  name: 'vp-select',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    items: {
      type: Array,
      defalut: []
    }
  }
};
</script>
