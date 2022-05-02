<template>
  <div id="app">
    <div class="music-logo"></div>
    <div>主页</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
   
  },
  methods: {
    getImg() {
     
    },
    getVideo() {
    },
  },
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.music-logo {
  width: 3.4rem;
  height: 3.4rem;
  margin: 1.5rem auto 0;
  background: url("../../assets/images/logo.png") no-repeat;
  background-size: 100%;
}
.music-lyric {
  text-align: center;
  height: 3.4rem;
  margin: 0.5rem 0.4rem 0;
  background-color: rgb(13, 206, 196);
  background-color: rgb(13, 206, 196);
  background-color: rgb(13, 206, 196);
  background-size: 100%;
}
.music-progress {
  text-align: center;
  height: 0.4rem;
  margin: 1rem 0.4rem 0;
  background-color: rgb(13, 206, 196);
  background-color: rgb(13, 206, 196);
  background-color: rgb(13, 206, 196);
  background-size: 100%;
}
.music-play {
  text-align: center;
  height: 3rem;
  margin: 1rem 0.4rem 0;
  background-color: #06a7ff;
  background-color: #06a7ff;
  background-color: #06a7ff;
  background-size: 100%;
}
</style>