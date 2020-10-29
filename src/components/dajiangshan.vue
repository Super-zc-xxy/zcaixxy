<template>
<div class="app1">
    <div class="z1">
        <img src="../assets/jiutunbg.jpeg" width="300px" height="400px" >
    </div>
    <div class="z2">
        <h1>{{msg1}}</h1>
        <h4>{{msg2}}
        </h4>
        <h1>{{msg3}}</h1>
        <h4>{{msg4}}
        </h4>
        <h1>{{msg5}}</h1>
        <h4>{{msg6}}</h4>
        </div>
</div>
</template>

<script>
export default {
    data(){
    return{
      msg1:'酒吞童子',
      msg2:'酒吞童子被称之为站在鬼族巅峰的男人,是最强的妖怪因爱慕女妖怪鬼女红叶而堕落,整日借酒消愁,不复当年霸气,茨木童子视他为挚友,想帮助他脱离感情的泥潭,找回曾经的霸气,重回巅峰状态',
      msg3:'茨木童子', 
      msg4:'茨木童子（被称为“罗生门之鬼”），据说是日本有名的妖怪酒吞童子的手下。而渡边纲是源赖光的家臣，他某天晚上和友人打赌能否走完朱雀大道而不会遇鬼（可见当时鬼怪传说有多厉害），结果真的被茨木童子擒上了——茨木童子幻化成一个迷路的美女让渡边纲送她回家，这招数真是好用 ，渡边纲上当了。可是最后还是渡边更胜一筹，和茨木童子战斗时拔刀把茨木童子的一只手臂砍下来了，从此名刀髭切也被命名为“鬼切”。',
      msg5:'鬼切',
      msg6:'鬼切，Onikiri，日本平安时代的名刀，源满仲保卫天下的两把名刀之一，原名髭切，与另一把名刀膝丸配为一对。据说手持两刀攻击的时候一刀攻击面门，一刀攻击膝盖，因而得名。后来两把刀传到源赖光手里，他将其中的髭切交给渡边纲。传说渡边纲用髭切在五条渡口切下鬼神茨木童子的手腕，因此髭切有了“鬼切”的称呼，后来木曾义仲又用鬼切在户隐山杀鬼。再后来此刀又传到源赖朝手中，成为日本当权者才能使用的宝刀。',
            
    }
  },
  methods:{
  },
  components:{

  }
}
</script>

<style>
.app1{
    float: left;
    height: 400px;
    width: 100%;
    background: url("../assets/dajiangshanbg.jpg")round;
}
.z1{
    float: left;
}
.z2{
    color: white;
    text-shadow: 3px 4px 5px red;
}
</style>

