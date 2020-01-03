<template>
  <section class="tabs">
    <nav class="tabs__menu">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab-item', { active: index === activeIndex }]"
        @click="change(index)"
      >
        {{ item.title }}
      </div>
    </nav>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'vp-tabs',
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { tabs: [] };
  },
  mounted() {
    this.tabs = this.$children;
    this.tabs[this.activeIndex].active = true;
  },
  methods: {
    change(inIndex) {
      this.tabs.forEach((item, index) => (item.active = inIndex === index));
      this.$emit('update:activeIndex', inIndex);
    }
  }
};
</script>

<style lang="scss">
.tabs {
  flex: 1;
  &__menu {
    display: flex;
  }
  &__content {
    padding: 14px;
  }
}
</style>
