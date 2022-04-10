<template>
  <div id="app">
    <Card/>
    <!-- <Test msg="欢迎来到我的世界" ></Test> -->
  </div>
</template>

<script>
import Card from "./components/Card.vue";
// import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    Card,
    // Test,
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
