<template>
    <div class="denglu1">
        <div></div>
    <div class="zhuce1">
        <div class="form">
        <form class="zhuce" ref="zhuce">
            <input type="text" placeholder="UserName">
            <input type="password" placeholder="Password">
            <input type="email" placeholder="User email">
            <button type="button" @click="zhuce">注册</button>
            <p class="message">确定注册？<a href="#">注册</a></p>
            </form>
        <form class="denglu" ref="denglu">
            <input type="text" placeholder="UserName">
                <input type="password" placeholder="Password">
                <button type="button" @click="denglu">登录</button>
                <p class="message">确定登录？<a href="#">登录</a></p>
                </form>
            </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        zhuce(){
            this.$refs.zhuce.style.display = 'none';
            this.$refs.denglu.style.display = 'block';
        },
        denglu(){
            this.$router.push({name:'home'});
        }
    }
}
</script>
<style>
body{
    background: url("../assets/linghubg.jpg");
    height: 100%;
    width: 100%;
    background-size: cover;
    font-family: sans-serif;
    text-align: center;
}
*{
    margin: 0;
    padding: 0;
}
zhuce{
    width: 360px;
    padding: 10% 0 0;
    margin: auto;
}
.form{
    position: relative;
    z-index: 1;
    max-width: 360px;
    margin:  0 auto 100px;
    padding: 45px;
    text-align: center;
}
.form input{
    outline: none;
    background: #f2f2f2;
    width: 100%;
    margin: 0;
    border: 0;
    margin:  0 0 15px;
    padding: 15px;
    box-shadow:border-box;
    font-size:14px;
}
.form button{
    text-transform: uppercase;
    outline: 0;
    background: orange;
    width: 100%;
    border: none;
    padding: 15px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: .5s;
}
.form button:hover,.form button:active{
    background: green;
    border: none;
}
.form .message{
    margin:  15px 0 0;
    color: #fff;
    font-size: 12px;
}
.form .message a{
    color: orange;
    text-decoration: none;
}
.denglu{
    display: none;
}
</style>
