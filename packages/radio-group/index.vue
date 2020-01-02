<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vp-radio-group',
  props: {
    name: String,
    value: String
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  provide() {
    return {
      radioGroup: this
    };
  }
};
</script>
