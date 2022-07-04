<template>
  <!-- stop 阻止冒泡，half-screen-dialog作为子组件，会冒泡到父辈点击事件 -->
  <div class="half-screen-dialog" v-if="show" :class="{ maskActive: show, deActive, 'no-animation': noShowAnimation }">
    <div class="container" :class="{ active: show, deActive }">

      <div class="ceshi" @click.stop="close">头部</div>
      <input type="text" name="iiii" id="iiii">
      <div class="ceshi">ceshi</div>
      <div class="ceshi">ceshi</div>
      <div class="ceshi">ceshi</div>
      <div class="ceshi">ceshi</div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "HelloWorld",
  props:{
    msg: String,
    zIndex: String,
    noShowAnimation: Boolean,
    visible:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      deActive: false,
      envId: "",
      callFunctionResult: "",
      closeTimer:null,
    };
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  watch:{
    visible: function() {
      if (this.visible) {
        if (this.closeTimer) {
          clearTimeout(this.closeTimer);
        }
        this.show = true;
        this.deActive = false;
      } else {
        // 先设置transform展示，然后删除动画 & 设置transform隐藏
        this.deActive = true;
        const start = new Date().getTime();
        this.closeTimer = setTimeout(() => {
          this.show = false;
          this.deActive = false;
          // @NOTE 继续优化，这里如果性能卡顿，会超过300ms才回调，导致用户二次点击时点到未隐藏的mask
          console.warn('300', new Date().getTime() - start);
        }, 300); // 动画播完再隐藏
      }
    }
  }
}
</script>

<style lang="less">
.half-screen-dialog {
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);

  @keyframes show { from { background: rgba(0, 0, 0, 0); } to { background: rgba(0, 0, 0, 0.6); } }
  @keyframes hide { from { background: rgba(0, 0, 0, 0.6); } to { background: rgba(0, 0, 0, 0); } }
  @keyframes slide { from { transform: translate3d(0, 100%, 0); } to { transform: translate3d(0, 0, 0); } }
  @keyframes slideDown { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, 100%, 0); } }

  &.no-animation {
    animation: none !important;
    .container {
      animation: none !important;
    }
  }
  &.maskActive {
    animation: show 0.3s forwards;
  }
  &.deActive {
    animation: hide 0.3s forwards;
  }
  .container {
    transform: translateY(100%);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #FFFFFF;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    &.active {
      animation: slide 1s forwards;
    }
    &.deActive {
      animation: slideDown 0.3s forwards;
    }
    .ceshi{
      width: 100%;
      height: 3rem;
      background-color: aqua;
    }
  }
}
</style>
