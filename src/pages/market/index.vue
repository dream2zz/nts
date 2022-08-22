<template>
  <view>
    <image src="/static/logo.png" />
    <view>
      <text>{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('2')
</script>

<style>
</style>
