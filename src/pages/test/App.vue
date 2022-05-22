<template>
  <div id="app">
    <h1>测试半弹层</h1>
    <button class="btn" @click="clickBtn">点击</button>
    <HalfDialog :visible="show" @close="clickBtn"></HalfDialog> 
  </div>
</template>

<script>

import HalfDialog from '../../components/half-dialog.vue';
export default {
  name: "App",
  data(){
    return {
      show: false
    };
  },
  components: {
    HalfDialog,
    // Test,
  },
  methods:{
    clickBtn() {
      // 注释
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
@rem: 200rem;
#app {
  color: #2c3e50;
  text-align: center;
  align-items: center;
  justify-content: center;
  .btn{
    width: 5rem;
    margin: 15rem auto;
    align-items: center;
    text-align: center;
  }
}

</style>
