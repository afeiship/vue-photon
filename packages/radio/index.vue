<template>
  <div class="radio">
    <label>
      <input
        class="radio__input"
        type="radio"
        :name="name"
        :checked="checked"
        :value="value"
        @change="onChange"
      />
      <span class="radio__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
// https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/src/components/form-radio/form-radio.js
export default {
  name: 'vp-radio',
  props: {
    label: String,
    value: String
  },
  inject: {
    radioGroup: {
      from: 'radioGroup'
    }
  },
  computed: {
    checked() {
      return this.radioGroup.value === this.value;
    },
    name() {
      return this.radioGroup.name;
    }
  },
  methods: {
    onChange(inEvent) {
      const { value } = inEvent.target;
      this.radioGroup.$emit('change', {
        target: { value }
      });
    }
  }
};
</script>
