<template>
  <v-toolbar>
    <span class="ma-3">杭州</span>
    <v-text-field dense hide-details append-icon="mdi-magnify" ></v-text-field>
    <v-btn icon>
      <v-icon icon="mdi-line-scan" />
    </v-btn>
  </v-toolbar>

  <v-carousel cycle height="190" hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus" :show-arrows="false">
    <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>

</template>

<script setup lang="ts">
import { ref } from "vue";

const images = [
  {
    src: 'https://tdesign.gtimg.com/site/swiper/02.png',
  },
  {
    src: 'https://tdesign.gtimg.com/site/swiper/03.png',
  },
];

const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];
const slides = ["First", "Second", "Third", "Fourth", "Fifth"];
</script>

<style>
</style>
