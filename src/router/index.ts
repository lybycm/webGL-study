import type {RouteRecordRaw} from 'vue-router';
import { createWebHistory, createRouter } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    rank?: number
    showInMenu?: boolean
    title?: string
    icon?: string
  }
}


const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
  {
    eager: true
  }
);

const routes: RouteRecordRaw[] = [];

routes.forEach(route => route.meta = route.meta || {});



Object.keys(modules).forEach(key => {
  const route = modules[key].default;
  if (route.meta) {
    route.meta.showInMenu = route.meta.showInMenu ?? true;
  }
  routes.push(route);
});


routes.sort((a: RouteRecordRaw, b: RouteRecordRaw) => {
  const result = (a.meta?.rank ?? 0) - (b.meta?.rank ?? 0);
  return result;
});




const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router