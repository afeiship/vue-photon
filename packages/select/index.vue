<template>
  <select
    class="form-control"
    :multiple="multiple"
    :value="value"
    @change="change"
  >
    <template v-for="(item, index) in items">
      <slot v-bind="{ item, index }" />
    </template>
  </select>
</template>

<script>
export default {
  name: 'vp-select',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Array, Number, Boolean],
    multiple: Boolean,
    items: {
      type: Array,
      defalut: []
    }
  },
  mounted() {
    this.initValue();
  },
  methods: {
    getValue() {
      const el = this.$el;
      const options = el.querySelectorAll('option:checked');
      const values = [].slice.call(options).map((item) => item.value);
      return this.multiple ? values : values[0];
    },
    initValue() {
      const { value, multiple } = this;
      const values = multiple ? value : [value];
      const options = this.$el.querySelectorAll('option');
      const els = [].slice.call(options);
      options.forEach((item) => {
        if (values.includes(item.value)) {
          item.selected = true;
        }
      });
    },
    change(inEvent) {
      this.$emit('change', this.getValue());
    }
  }
};
</script>
