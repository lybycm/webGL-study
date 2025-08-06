<template>
  <el-container class="layout-container">
    <el-header class="header">
      <div class="system-title">WebGL三维可视化系统</div>
    </el-header>

    <el-container>
      <el-aside width="240px" class="aside">
        <el-menu
          default-active="/"
          class="vertical-menu"
          @select="handleMenuSelect"
        >
          <menu-item
            v-for="route in menuRoutes"
            :key="route.path"
            :route="route"
          />
        </el-menu>
      </el-aside>

      <el-main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import router from "@/router";
import MenuItem from "@/components/MenuItem.vue";

const menuRoutes = computed(() => {
  return router.options.routes.filter((route) => route.meta?.showInMenu);
});

const handleMenuSelect = (index: string) => {
  router.push(index);
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
  background: #f0f2f5;
}

.header {
  background: #001529;
  color: white;
  line-height: 60px;
}

.aside {
  background: white;
  border-right: 1px solid #e8e8e8;
}

.main-content {
  padding: 20px;
  background: white;
  transition: margin-left 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
