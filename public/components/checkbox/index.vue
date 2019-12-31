<template>
  <vp-checkbox @change="onChange">
    I am a checkbox.
  </vp-checkbox>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      console.log('value:', e.target.value);
    }
  }
};
</script>
