<template>
  <footer class="toolbar toolbar-footer">
    <h1 class="title">{{title}}</h1>
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'vp-toolbar-footer',
  props: {
    title: String
  }
};
</script>
