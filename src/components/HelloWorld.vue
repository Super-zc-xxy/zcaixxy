<template>
  <div class="hello">
    <div class="head">
      <div class="left"></div>
      <div class="right"><img src="../assets/wangyi.png" class="img"></div>
 <ul id="nav">
                    <li><a href="https://yys.163.com/">首页</a></li>
                    <li><a href="#">新闻资讯</a>
                    </li>
                    <li><a href="#">式神录</a>
                        <ul class="shiting">
                            <li><a href="荒.html" target="_block">荒</a></li>
                            <li @click="addpush3">鬼切</li>
                            <li><a href="玉藻前.html" target="_block">玉藻前</a></li>
                        </ul>
                    </li>
                    <li><a href="#">游戏攻略</a>
                        <ul>
                            <li><a href="#">萌新上路</a></li>
                            <li><a href="#">式神御魂</a></li>
                            <li><a href="#">秘闻副本</a></li>
                        </ul>
                    </li>
                    <li><a href="#">试听中心</a>
                        <ul class="shiting">
                            <li @click="addpush2">视频中心</li>
                            <li @click="addpush1">原画壁纸</li>
                            <li>游戏原声</li>
                        </ul>
                    </li>
                    <li @click="addpush" class="login">登录注册</li>
                </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    addpush() {
      console.log("aaa");
      this.$router.push("/denglu");
    },
     addpush1() {
      console.log("bbb");
      this.$router.push("/yuanhuabizi");
    },
    addpush2() {
      console.log("ccc");
      this.$router.push({path: '/shipingzhongxin'});
    },
    addpush3() {
      console.log("ddd");
      this.$router.push({path: '/guiqie'});
    }
  }
};
</script>

<style scoped>
.shiting{
  margin: 0px;
  padding: 0px;
  margin-left: 20px;
}
.shiting li{
  margin: 0;
  /* padding: 0; */
  margin: 10px auto;
  /* margin-left: 20px; */
  color: #fff;
  display: inline-block;
  padding: 0 20px;
  text-decoration: none;
  font: 17px/60px arial;
}
.shiting li:hover{
  cursor: pointer;
}
.login{
  color: #fff;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.login:hover{
  cursor: pointer;
  color: red;
}
#header {
  height: 1000px;
  width: 100%;
}
.head{
  background-color: #fff;
}
ul,
li {
  margin: 0;
  padding: 0;
  font-style: normal;
  list-style: none;
  /* float: left; */
}
#nav>li{
  float: left;
}
#nav {
  width: 100%;
  height: 60px;
  /* margin: 0 auto; */
  overflow: hidden;
  background: url("../assets/navbg.jpg");
  text-decoration: none;
  display: block;
}
#nav li {
  display: inline-block;
}
#nav li a {
  display: inline-block;
  padding: 0 20px;
  color: rgb(203, 207, 204);
  text-decoration: none;
  font: 17px/60px arial; /*17px代表字体大小，60px代表行高，arial代表字体;*/
}
#nav li a:hover {
  color: rgb(250, 251, 252);
}
#nav li ul {
  position: absolute;
  display: none;
  background: url("../assets/navbg.jpg");
}
#nav li ul li {
  display: block;
}
#nav li ul li a {
  width: 100%;
}
#nav li:hover ul {
  display: block;
}
.c2 {
  position: fixed;
  left: 0;
  bottom: 0;
}
.c1 {
  position: fixed;
  right: 0;
  top: 120px;
}
.img {
  float: left;
}
.left {
  width: 800px;
  float: left;
}
.right {
  float: right;
}
</style>
