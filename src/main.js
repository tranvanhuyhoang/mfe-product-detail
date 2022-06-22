import "./set-public-path"
import Vue from "vue"
import singleSpaVue from "single-spa-vue"
import router from "./router"
import App from "./App.vue"

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#product-detail",
    render(h) {
      return h(App, { props: { store: this.store } })
    },
    router,
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
