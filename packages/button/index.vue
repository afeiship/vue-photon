<template>
  <button
    @click="$emit('click', $event)"
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
