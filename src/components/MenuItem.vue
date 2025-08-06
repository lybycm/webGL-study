<template>
  <el-sub-menu v-if="route.children?.length" :index="route.path">
    <template #title>
      <el-icon><component :is="route.meta?.icon" /></el-icon>
      <span>{{ route.meta?.title }}</span>
    </template>
    <menu-item
      v-for="child in route.children"
      :key="child.path"
      :route="child"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <el-icon><component :is="route.meta?.icon" /></el-icon>
    <span>{{ route.meta?.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";

defineProps<{
  route: RouteRecordRaw;
}>();
</script>

<style scoped>
.el-submenu .el-submenu__title {
  padding-left: 20px !important;
}
.el-menu-item {
  padding-left: 40px !important;
}
.el-menu-item [class^="el-icon-"] {
  margin-right: 8px;
  vertical-align: middle;
}
.el-submenu__title [class^="el-icon-"] {
  margin-right: 8px;
}
</style>
