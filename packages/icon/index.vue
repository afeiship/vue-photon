<template>
  <span :class="['icon', value ? `icon-${value}` : '']">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'vp-icon',
  props: {
    value: String
  }
};
</script>
