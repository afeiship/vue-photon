<template>
  <textarea
    :autocomplete="autocomplete ? 'on' : 'off'"
    :class="['form-control']"
  />
</template>

<script>
export default {
  name: 'vp-textarea',
  props: {
    autocomplete: {
      type: Boolean,
      default: false
    }
  }
};
</script>
