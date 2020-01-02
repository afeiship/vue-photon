<template>
  <div class="toolbar-actions">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vp-toolbar-actions',
  props: {
    mini: Boolean,
    sidebar: Boolean
  }
};
</script>
