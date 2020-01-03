<template>
  <section class="tabs">
    <nav class="tab-group tabs__menu">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab-item', { active: index === activeIndex }]"
        @click="change(index)"
      >
        <span
          class="icon icon-cancel icon-close-tab"
          v-if="interactive"
          @click="del(index)"
        ></span>
        {{ item.title }}
      </div>
      <div v-if="interactive" class="tab-item tab-item-fixed" @click="add">
        <span class="icon icon-plus"></span>
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
    interactive: {
      type: Boolean,
      default: false
    },
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
    },
    add() {
      // this.tabs.push({ title: 'unnameed', active: false });
    },
    del(inIndex) {
      // this.tabs.splice(inIndex, 1);
    }
  }
};
</script>

<style lang="scss">
.tabs {
  &__menu {
  }
  &__content {
    padding: 14px;
  }
}
</style>
