<template>
  <vp-container>
    <template v-for="item in components">
      {{ item }}
    </template>
  </vp-container>
</template>

<script>
export default {
  data() {
    return {
      items: require('@/public/assets/json/routes.json'),
    };
  },
  computed:{
    components(){
      const items = this.items;
      return items.map(item=>{
        return require(`@/public/components/${item}`).default
      })
    }
  }
};
</script>
