<template>
  <div id="app">
    <div class="music-logo"></div>
    <div>主页</div>
    <h2>css3动画实现</h2>
    <div id="progressbar">
      <div id="fill" v-text="progressText"></div>
    </div>
    <h2>js操作dom实现</h2>
    <div class="progressBox">
      <div class="progressBar" v-text="progressText"></div>
    </div>
    <div>{{ ua }}</div>
    <div v-for="i in 5" :key="i">
      <Card></Card>
    </div>
  </div>
</template>
<script>
import Card from '../../components/Card.vue';
export default {
  components: {
    Card
  },
  data() {
    return {
      num: 10,
      ua: '',
      progressText: '0%',
    };
  },
  mounted() {
    this.loadBar();
    this.ua = navigator.userAgent;
  },
  methods: {
    loadBar(){
      this.$nextTick(()=>{
        let count = 0;
        const jsProgressBar = this.$el.querySelector(".progressBar");
        const timer = setInterval(() => {
          count++;
          jsProgressBar.style.width = count + "%";
          // console.log('ppm ', this.progressText, count);
          this.progressText = count + "%";
          if (count === 100) {
            clearInterval(timer);
          }
        }, 17);
      })
    },
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
  text-align: center;
}

.progressBox {
  margin: 1rem auto;
  width: 18rem;
  justify-content: center;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 0.5rem;
}

.progressBar {
  width: 1%;
  height: 1.4rem;
  text-align: center;
  background-color: #1db10a;
  border-radius: 0.5rem;
  color: azure;
}

#progressbar {
  width: 18rem;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 0.5rem;
}

#fill {
  height: 1.4rem;
  justify-content: center;
  animation: move 2s;
  text-align: center;
  background-color: #1db10a;
  color: #ffffff;
  border-radius: 0.5rem;
}

@keyframes move {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
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