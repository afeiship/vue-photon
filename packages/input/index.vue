<template>
  <input
    :type="type"
    :autocomplete="autocomplete ? 'on' : 'off'"
    :class="['form-control']"
  />
</template>

<script>
export default {
  name: 'vp-input',
  props: {
    type: String,
    value: String,
    autocomplete: {
      type: Boolean,
      default: false
    }
  }
};
</script>
