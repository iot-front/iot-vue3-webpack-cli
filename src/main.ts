import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales/index'
import { loadAllPlugins } from './plugins'
import 'element-plus/dist/index.css'
import '@/assets/style/index.scss'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)
// qiankun
const temp: any = window
const isQiankun = temp.__POWERED_BY_QIANKUN__
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
function render() {
  app.use(store).use(router).use(i18n).mount('#childapp')
}
export async function mount(props: any) {
  console.log(props)
  render()
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  console.log('unmount', props)
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log('update props', props)
}
isQiankun || render()
