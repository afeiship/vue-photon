<template>
  <label>
    <input
      type="checkbox"
      :defaultChecked="defaultValue"
      :checked="value"
      @change="change"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'vp-checkbox',
  props: {
    defaultValue: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(inEvent) {
      const value = inEvent.target.checked;
      this.$emit('change', {
        target: { value }
      });
    }
  }
};
</script>
