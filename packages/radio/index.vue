<template>
  <label class="radio">
    <input
      class="radio__input"
      type="radio"
      :value="label"
      :name="name"
      v-model="value"
    />
    <span class="radio__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'vp-radio',
  props: {
    label: String,
    label: String,
    value: String
  }
};
</script>
