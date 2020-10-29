<template>
    <div class="block">
    <el-carousel height="700px">
      <el-carousel-item>
          <img src="../assets/bizi/1.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/2.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/3.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/4.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/5.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/6.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/7.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/8.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/9.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/10.jpg" alt="" class="bizi">
      </el-carousel-item>
      <el-carousel-item>
          <img src="../assets/bizi/11.jpg" alt="" class="bizi">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    mounted(){
        this.$nextTick(function(){
            new Swiper('.rc-body',{
                speed:800,
                direction:'horizontal',
                paginationClickable:true,
                mousewheel:true,
                pagination:{
                    el:'.swiper-pagination'
                },
                on:{
                    slideChangeTransitionStart(){},
                     slideChangeTransitionEnd(){}
                }
            })
        })
    }
}
</script>

<style>
.swiper-slide img{
    width: 100%;
    height: 100%;
}
</style>
