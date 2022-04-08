<template>
  <div>
    <div class="hello">{{ msg }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      screen: null,
      screenWidth: "",
      screenHeight: "",
      envId: "",
      callFunctionResult: "",
    };
  },
  props: {
    msg: String,
  },
  mounted(){
    this.screen = screen;
    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
  },
  methods: {
    async callFunction() {
      try {
        const res = await this.$cloudbase.callFunction({
          name: "vue-echo",
          data: {
            foo: "bar",
          },
        });
        this.callFunctionResult = res;
      } catch (e) {
        console.error(e)
        this.callFunctionResult = e.message;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  // body {
  //   background-color: black;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   height: 100vh;
  // }
  .hello {
    margin: 0 auto;
    height: 100px;
    width: 150px;
    position: relative;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(45deg, gold, deeppink);
    animation: hue 3s infinite linear;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -15px;
      bottom: -15px;
      left: -15px;
      right: -15px;
      border: 5px solid #24acf2;
      border-image: linear-gradient(45deg, gold, deeppink) 1;
      clip-path: inset(0px round 10px);
      animation: clippath 3s infinite linear;
    }
    &::after {
      animation: clippath 3s infinite -1.5s linear;
    }
    span {
      color: white;
      font-size: 20px;
    }
  }
  @keyframes hue {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes clippath {
    0% {
      clip-path: inset(0 0 95% 0);
      filter: hue-rotate(0deg);
    }
    25% {
      clip-path: inset(0 95% 0 0);
    }
    50% {
      clip-path: inset(95% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 95%);
    }
    100% {
      clip-path: inset(0 0 95% 0);
      filter: hue-rotate(360deg);
    }
  }
</style>
