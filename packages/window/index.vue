<template>
  <div
    :class="[
      'window',
      {
        'is-relative': relative,
        'is-shadowable': shadowable,
        'is-bordered': bordered
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vp-window',
  props: {
    relative: {
      type: Boolean,
      default: false
    },
    shadowable: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.window {
  &.is-relative {
    position: relative;
  }

  &.is-shadowable {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  }

  &.is-bordered {
    border: 1px solid #bebebe;
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
