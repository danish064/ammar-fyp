import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/Projects/ammar project/Final frontend/frontend-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}