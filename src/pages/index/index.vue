<template>

  <v-carousel cycle height="170" hide-delimiter-background show-arrows-on-hover delimiter-icon="mdi-minus"
    :show-arrows="false">
    <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>

  <button type="default" @click="goto('index')">通过方法跳转到about页面</button>

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

function goto(url:string) {
				uni.navigateTo({
					url:url
				})
			}
</script>

<style>
</style>
