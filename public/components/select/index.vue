<template>
  <vp-container>
    <vp-select :items="items" v-model="selected1">
      <template v-slot="{ item, index }">
        <option :value="index">{{ item }} - {{ index }}</option>
      </template>
    </vp-select>

    <p>
      <span>Selected:</span>
      <span>{{ selected1 }}</span>
    </p>

    <vp-blank />

    <vp-select :items="items" v-model="selected2" multiple>
      <template v-slot="{ item, index }">
        <option :value="index">{{ item }} - {{ index }}</option>
      </template>
    </vp-select>

    <p>
      <span>Selected:</span>
      <span>{{ selected2 }}</span>
    </p>
  </vp-container>
</template>

<script>
export default {
  data() {
    return {
      selected1: '2',
      selected2: ['0', '1', '3'],
      items: ['option1', 'option2', 'option3', 'option4']
    };
  }
};
</script>

<style lang="scss" scoped></style>
