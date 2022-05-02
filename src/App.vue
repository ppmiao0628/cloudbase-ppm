<template>
  <div id="app">
    <Card/>
    <button @click="clickBtn">点击</button>
    <HalfDialog :visible="show" @close="clickBtn"></HalfDialog>
    <!-- <Test msg="欢迎来到我的世界" ></Test> -->
  </div>
</template>

<script>
import Card from "./components/Card.vue";
// import Test from "./components/Test.vue";
import HalfDialog from './components/half-dialog.vue';
export default {
  name: "App",
  data(){
    return {
      show: false
    };
  },
  components: {
    Card,
    HalfDialog,
    // Test,
  },
  methods:{
    clickBtn(){
      this.show = !this.show;
      console.log('ppm ', this.show);
    }
  }
};
</script>

<style lang="less" scoped>
@rem: 200rem;
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
