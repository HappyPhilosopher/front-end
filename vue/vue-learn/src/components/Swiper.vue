<template>
  <swiper :options="swiperOption" ref="mySwiper" class=".swiper-container">
    <swiper-slide>slide one</swiper-slide>
    <swiper-slide>slide two</swiper-slide>
    <swiper-slide>slide three</swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="css">
.swiper-container {
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
