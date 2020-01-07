<template>
  <div class="nav-group">
    <template v-for="(item, index) in items">
      <h5 v-if="item.type === 'title'" :key="index" class="nav-group-title">
        {{ item.label }}
      </h5>
      <router-link
        v-else-if="item.type === 'nav-link'"
        active-class="active"
        :class="['nav-group-item']"
        :key="index"
        :to="item.to"
      >
        <span :class="['icon', `icon-${item.icon}`]"></span>
        {{ item.label }}
      </router-link>
      <span v-else :key="index" class="nav-group-item">
        <span :class="['icon', `icon-${item.icon}`]"></span>
        {{ item.label }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'vp-nav-group',
  props: {
    items: Array
  }
};
</script>
