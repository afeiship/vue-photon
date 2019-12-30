<template>
  <button
    :class="[
      'btn',
      theme ? `btn-${theme}` : '',
      size ? size : '',
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
      default: 'default'
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
