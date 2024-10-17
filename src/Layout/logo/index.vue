<template>
  <div v-if="setting.logoHidden" class="logo">
    <img :src="setting.logo" alt="logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  p {
    font-size: $base-logo-fontSize;
    font-weight: 800;
    color: #fff;
    margin-left: 10px;
  }
}
</style>
