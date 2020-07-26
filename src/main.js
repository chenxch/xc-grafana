import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);

let instance = null

  function render () {
    instance = new Vue({
  render: h => h(App),
}).$mount('#app')

  }

  if (!window.__POWERED_BY_QIANKUN__) {
    render()
  }

  export async function bootstrap () {
    // eslint-disable-next-line no-console
    console.log('vue app bootstraped')
  }

  export async function mount (props) {
    // eslint-disable-next-line no-console
    console.log('props from main framework', props)
    render()
  }

  export async function unmount () {
    instance.$destroy()
    instance = null
  }
