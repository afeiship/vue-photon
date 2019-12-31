<template>
  <button
    :class="[
      'btn',
      theme ? `btn-${theme}` : '',
      size ? `btn-${size}` : '',
      {
        active
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vp-button',
  props: {
    theme: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
