import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "D:/Projects/ammar project/Final frontend/frontend-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}