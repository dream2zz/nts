<template>
  <v-toolbar>
    <span class="ma-3">杭州</span>
    <v-text-field dense hide-details append-icon="mdi-magnify"></v-text-field>
    <v-btn icon>
      <v-icon icon="mdi-line-scan" />
    </v-btn>
  </v-toolbar>

  <v-carousel cycle height="170" hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus"
    :show-arrows="false">
    <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>

</template>

<script setup lang="ts">
import { ref } from "vue";

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

<style>
</style>
