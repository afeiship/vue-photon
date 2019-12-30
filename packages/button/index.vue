<template>
  <button :class="['btn', theme ? `btn-${theme}` : '', size ? size : '']">
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
    size: String
  }
};
</script>

<style></style>
