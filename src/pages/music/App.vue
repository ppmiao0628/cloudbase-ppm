<template>
  <div id="app">
    <div class="music-logo"></div>
    <!-- <div class="music-lyric">显示歌词</div> -->
    <div class="music-progress">进度条</div>
    <div class="music-play">播放</div>
    <div id="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // const unary = (fn) => (val) => fn(val);
    // const parse = unary(parseInt);
    // parse = (val) => parseInt(val);
    // console.log(["1.1", "2", "0.3"].map(parse));
  },
  methods: {
    getImg() {
      const img = new Image();
      img.src = "https://photo.tuchong.com/1890400/f/456594721.jpg";
      document.querySelector("#content").appendChild(img);
    },
    getVideo() {
      this.$refs.myVideo.src = "";
      this.$refs.myVideo.autoPlay = true;
      this.$refs.myVideo.muted = true;
      this.$refs.myVideo.play();
    },
  },
};
</script>
<style>
body {
  /* width: 100vw; */
  height: 100vh;
  position:fixed;
  /* filter: blur(40px); */
  background: url("../../assets/images/学习6.jpg") no-repeat;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.music-logo {
  z-index: 10;
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