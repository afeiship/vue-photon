<template>
  <div class="toolbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vp-toolbar',
  props: {
    mini: Boolean,
    sidebar: Boolean
  }
};
</script>
