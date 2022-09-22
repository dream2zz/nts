<template>

  <!-- <v-carousel cycle height="170" hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus"
    :show-arrows="false">
    <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel> -->
  <t-swiper class="ma" l="2000" :height="180" :autoplay="true">
    <t-swiper-item class="swiper-item--demo" v-for="(item, i) in images">
      <img :src="item.src" class="img" />
    </t-swiper-item>
  </t-swiper>
  <t-grid>
    <t-grid-item text="演唱会" :image="imgUrl" />
    <t-grid-item text="艺术馆" :image="imgUrl" />
    <t-grid-item text="展览会" :image="imgUrl" />
    <t-grid-item text="行业峰会" :image="imgUrl" />
  </t-grid>
</template>

<script setup lang="ts">
import { ref } from "vue";
const imgUrl = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png';
const images = [
  {
    src: 'https://s2.loli.net/2022/08/23/z9cJ6MBkQqbRgX3.jpg',
  },
  {
    src: 'https://s2.loli.net/2022/08/23/KawcBOtsN1PEyel.jpg',
  },
  {
    src: 'https://s2.loli.net/2022/08/23/WSTycYLOxQ4Bouj.jpg',
  },
];


</script>

<style lang="less">
.ma {
  margin: 10px;
}

.swiper-item--demo {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f33;
  font-size: 20px;
  color: #fff;

  img {
    height: 100%;
  }
}
</style>
