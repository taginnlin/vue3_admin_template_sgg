<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary" :icon="Search">Primary</el-button>
    <el-button :icon="Search" circle />

    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
</script>

<style scoped></style>
