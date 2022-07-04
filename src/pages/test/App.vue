<template>
  <div id="app">
    <h1>测试半弹层</h1>
    <input type="text" :value="iValue" @input="onInput" :maxlength="iLen">
    <button @click="setInputV">修改input</button>
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
      show: false, 
      iValue: '12',
      iLen: 6,
    };
  },
  components: {
    HalfDialog,
    // Test,
  },
  mounted() {
    this.iLen = 4;
  },
  methods: {
    
    clickBtn() {
      // 注释
      this.show = !this.show;
    },
    onInput(e) {
      console.log('ppm e', e.target.value);
      const value = e.target.value;
      this.$nextTick(() => {
        this.iValue = value.slice(0, 6);
      })
    },
    setInputV() {
      this.iValue = '3498';
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
  display: flex;
  flex-direction: column;
  .btn{
    width: 5rem;
    margin: 15rem auto;
    align-items: center;
    text-align: center;
  }
}

</style>
