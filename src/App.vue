<template>
  <div id="app">
    <Card msg="欢迎来到我的世界" />
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style lang="less" scoped>
@rem: 200rem;
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
