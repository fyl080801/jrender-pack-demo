import { useGlobalRender } from "@jrender-legacy/core"
import TestComponent from "./components/TestComponent.vue"
import Vue from "vue"
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(Element)

useGlobalRender(({ addComponent }) => {
  addComponent("test-component", TestComponent)
})
