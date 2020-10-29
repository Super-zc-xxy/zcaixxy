<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import home from './components/Home.vue' 
export default {
  data(){
    return{

    }
  },
  components:{
    'v-home': home
  }
}
</script>
<style>

</style>


