<template>
  <div class="padded container">
    <vp-radio-group name="hobby" value="op2" @change="onChange">
      <vp-radio value="op1" label="option one" />
      <vp-radio value="op2" label="option two" />
      <vp-radio value="op3" label="option three" />
    </vp-radio-group>
  </div>
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

<style lang="scss" scoped>
.container {
  font-size: 20px;
  color: #333;
}
</style>
