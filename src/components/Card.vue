<template>
  <div class="card" @click="showPanel()"
    style="background-color: rgb(51, 105, 217); background-image: url('https://ppd.gtimg.com/op/creditcard/bank-face/ios/png/comm.png');">
    <div class="main-info">
      <div class="bank-tile">微粒贷账户</div>
      <div class="pay-fee">¥ 3000.00</div>
      <div class="menu">
        <div class="operate" @click.stop='toLoad'>借钱</div>
        <div class='operate pay-btn' @click.stop='toPay'>还款</div>
      </div>
    </div>
    <!-- <div>屏幕宽{{screenWidth}}</div>
    <div>屏幕宽{{screenHeight}}</div>
    <div>availHeight:{{availHeight}}</div>
    <div>availWidth:{{availWidth}}</div>
    <div>width:{{width}}</div>
    <div>height:{{height}}</div>
    <div>devicePixelRatio:{{devicePixelRatio}}</div>
    <div>屏幕对象{{screen}}</div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      screen: null,
      width: "",
      height: "",
      availHeight: "",
      availWidth: "",
      devicePixelRatio: "",
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
    this.height = window.screen.height;
    this.width = window.screen.width;
    this.availHeight = window.screen.availHeight;
    this.availWidth = window.screen.availWidth;
    this.devicePixelRatio = window.devicePixelRatio;
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
    showPanel() {
      console.log('showPanel');
      window.parent.postMessage({type:'forward',url:encodeURIComponent('https://wx-credit-repay.tenpay.com/app/v2.0/wxf_repay_index.fcgi?showwxpaytitle=1&sp_name=cft_xykhk&replace=1#/pay?bank_type=3019&card_md5=845166944f8e3affc86015d12bbca7b1')},'*') 
      // location.href = 'http://localhost:8000/home';
    },
    toLoad() {
      window.parent.postMessage({type:'alert',message: '借款'},'*') 
      console.log('toLoad');
    },
    toPay() {
      window.parent.postMessage({type:'forward',url:encodeURIComponent('https://wx-credit-repay.tenpay.com/app/v2.0/wxf_repay_index.fcgi?showwxpaytitle=1&sp_name=cft_xykhk&replace=1#/pay?bank_type=3019&card_md5=845166944f8e3affc86015d12bbca7b1')},'*') 
      console.log('toPay');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
@rem: 200rem;
.card {
  background-color:aqua;
  width: 100%;
  height: 250px;
  padding: 40/@rem 48/@rem;
  box-sizing: border-box;
  border-radius: 24/@rem;
  margin-top: 32/@rem;
  position: relative;
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
  border-color: aqua;
  color: #fff;
  .main-info {
    // color: #fff;
    // align-content: center;
    // justify-content: center;

    .pay-fee,
    .bank-tile{
      font-size: 200/@rem;
    }
    .menu{
      display: flex;
      justify-content: right;
      color: black;
      margin-top: 32/@rem;
      position: absolute;
      right: 400/@rem;
      .operate{
  margin-top: 32/@rem;
        background-color: #fff;
        padding: 100/@rem;
        background-repeat: no-repeat;
        border-color: aqua;
        border-radius: 10/@rem;
        margin-left: 40/@rem;
        .pay-btn{
          margin-top: 32/@rem;
        }
      }
    }
  }
}
</style>

