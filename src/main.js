import Vue from "vue"
import singleSpaVue from "single-spa-vue"
import App from "./App.vue"

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#product-detail",
    render(h) {
      return h(App, { props: { store: this.store } })
    },
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = (props) => {
  let el = document.getElementById("product-detail")
  let elColumn2 = document.getElementById("#column-2")
  console.log("elColumn2 ", elColumn2)
  if (!el) {
    el = document.createElement("div")
    el.id = "product-detail"
    document.body.appendChild(el)
    props.store = {
      state: {
        count: 0,
      },
    }
  }
  return vueLifecycles.mount(props)
}
export const unmount = vueLifecycles.unmount
