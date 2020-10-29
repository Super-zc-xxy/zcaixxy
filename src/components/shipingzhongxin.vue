<template>
    <div class="swiper-container rc-body">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><video src="../assets/shiping/1.mp4" controls loop ></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/2.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/3.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/4.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/5.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/6.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/7.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/8.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/9.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/10.mp4" controls loop></video></div>
            <div class="swiper-slide"><video src="../assets/shiping/11.mp4" controls loop></video></div>
        </div>
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
*{
    margin: 0;
    padding: 0;
}
.swiper-container rc-body{
    background: url("../assets/linghubg.jpg");
}
</style>
