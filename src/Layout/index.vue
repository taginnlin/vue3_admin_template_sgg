<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_slider"></div>
    <!-- 顶部导航栏 -->
    <div class="layout_tabbar"></div>
    <!-- 右侧路由区域 -->
    <div class="layout_main"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout_container {
  position: relative;
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100%;
    background: $base-menu-background;
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: red;
  }

  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    overflow: auto;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    background-color: green;
  }
}
</style>
