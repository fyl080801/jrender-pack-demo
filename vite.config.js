const { defineConfig } = require("vite")
const { createVuePlugin } = require("vite-plugin-vue2")

export default defineConfig({
  // 外部定义
  //   base: "/render-manifest/test1",
  build: {
    rollupOptions: {
      input: "index.js",
      external: ["@jrender-legacy/core", "vue", "@vue/composition-api"],
      output: {
        format: "iife",
        globals: {
          vue: "Vue",
          "@jrender-legacy/core": "JRender",
          "@vue/composition-api": "VueCompositionAPI"
        }
      }
    },
    // 必要
    manifest: true
  },
  plugins: [createVuePlugin()]
})
