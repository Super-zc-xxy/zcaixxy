<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <div id="zhutu">
      <div class="kong"></div>
      <div class="kongge"></div>
      <div class="shitu">
        <div class="t1"><div class="t5"><img src="../assets/guiqin.png" ></div></div>
        <div class="t2">
          <button @click="currentTabComponent='dajiangshan'">大江山</button>
          <button @click="currentTabComponent='haiguo'">海国入侵</button>
          <button @click="currentTabComponent='guiwang'">鬼王之宴</button>
          <button @click="currentTabComponent='xieshen'">邪神入侵</button>
          <button @click="currentTabComponent='linghu'">灵狐庆典</button>
        </div>
        <div class="t3"><img src="../assets/erweima.png"></div>
        <div class="t4"><img src="../assets/shaomiao.png"></div>
        <component v-bind:is="currentTabComponent"></component>
      </div>
    </div>
    <div class="t6">
      <div class="t7"></div>
      <div class="t8">
      <div class="t9"></div>
      <div class="t10">
        <el-button :plain="true" @click="openVn">{{msg1}}</el-button>
        <p>{{msg2}}</p>
        <p>{{msg3}}</p>
        <p>{{msg4}}</p>
        <img src="../assets/wangyidb.png" alt=""><img src="../assets/wangyidb2.png">&nbsp;&nbsp;&nbsp;<img src="../assets/dibubg1.png">
        <el-button type="text" @click="centerDialogVisible = true">网易爸爸请爱我</el-button>

<el-dialog
  title="游戏下载"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span><img src="../assets/erweima.png" alt="" class="el"></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import dajiangshan from './dajiangshan'
import guiwang from './guiwang'
import xieshen from './xieshen'
import haiguo from './haiguo'
import linghu from './linghu'
import yuanlhuabizi from './yuanhuabizi'
import shipingzhongxin from './shipingzhongxin'
// import Vue from 'vue'
export default {
  name: 'App',
  data () {
    return {
      currentTabComponent: 'dajiangshan',
      msg1:'本游戏适合9岁以上的玩家进入。',
      msg2:'积极健康的游戏心态是健康游戏的开端，本游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱。',
      msg3:'《网络游戏管理暂行办法》 文网游备字【2016】M-RPG4708号 《网络文化经营许可证》 浙网文[2019]1372-138号 批准文号：新广出审【2017】6710号',
      msg4:'出版物号：ISBN 978-7-7979-9973-1 违法及不良信息举报中心 ICP备案：粤B2-20090191-18',
      centerDialogVisible: false
    }
  },
  components: {
    HelloWorld,
    dajiangshan,
    haiguo,
    guiwang,
    xieshen,
    linghu
  },
    methods: {
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
#zhutu{
  width: 100%;
  height: 784px;
  background: url("../assets/appbg.jpg");
}
.kong{
  width: 100%;
  height:300px;
}
.kongge{
  width: 300px;
  height: 300px;
  float: left;
}
.shitu{
  position: relative;
  width: 1200px;
  height: 300px;
  float: right;
  background: url("../assets/shitu.png")
}
.t1{
  position: relative;
  width:630px;
  height:157px;
  float: left;
}
.t2{
  font-size: 20px;
  position: relative;
}
.t2 button{
  background: url("../assets/shouyebg.jpg");
  height: 50px;
  width: 100px;
  color: white;
  text-shadow: 3px 3px 5px red;
}
.t2 button:hover{
  font-size: 20px;
  color: aquamarine;
}
.t3{
  width: 150px;
  height: 170px;
  position: absolute;
  text-align: center;
  top: 0px;
}
.t3 img{
  margin: 0 auto;
  margin-top: 15px;
  width: 130px;
  height: 130px;
}
.t4{
  animation: mainbarcode 8s linear infinite;
  position: absolute;
  left:15px;
  animation: myMove 4s infinite;
  -webkit-animation: myMove 8s infinite;
}
@keyframes myMove {
        0% {
            top: 15px;
        }
        50% {
            top: 130px;
        }
        100% {
            top: 15px;
        }
    }
@-webkit-keyframes myMove {
        0% {
            top:500px;
        }
        50% {
            top: 600px;
        }
        100% {
            top: 500px;
        }
    }
    .t5{
      height: 170px;
      position: absolute;
      left:180px;
    }
    .t6{
      width: 100%;
      height: 500px;
      background: url("../assets/dibubg.png")round;
      color: white;
      text-shadow: 3px 3px 4px rgb(87, 253, 10);
    }
    .t7{
      width: 100%;
      height: 300px;
    }
    .t8{
      width: 100%;
      height: 200px;
    }
    .t9{
      width:300px;
      height: 200px;
      float: left;
    }
    .t10{
      float: left;
    }
    .el{
      margin-left: 25%;

    }
</style>
