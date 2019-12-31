<template>
  <div :class="['pane', { 'pane-sm': mini, sidebar }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vp-pane',
  props: {
    mini: Boolean,
    sidebar: Boolean
  }
};
</script>
