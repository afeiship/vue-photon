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
  provide() {
    return {
      radioGroup: this
    };
  }
};
</script>
