<template>
  <div class="padded container">
    <vp-select :items="items" :model="selected">
      <template v-slot="{ item, index }">
        <option :value="index">{{ item }} - {{ index }}</option>
      </template>
    </vp-select>

    <p>
      <strong>Selected:</strong>
      <span>{{ selected }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
      items: ['option1', 'option2', 'option3', 'option4']
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 20px;
  color: #333;
}
</style>
