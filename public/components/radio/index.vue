<template>
  <div class="padded container">
    <vp-radio-group name="hobby" v-model="value">
      <vp-radio value="op1" label="option one" />
      <vp-radio value="op2" label="option two" />
      <vp-radio value="op3" label="option three" />
    </vp-radio-group>
    <p>
      <span>value: {{ value }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'op2'
    };
  },
  methods: {
    onChange(e) {
      console.log('value:', e, e.target.value);
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
