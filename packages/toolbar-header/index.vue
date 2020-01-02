<template>
  <header class="toolbar toolbar-header">
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'vp-toolbar-header',
  props: {
    title: String
  }
};
</script>
