import { createApp } from 'vue'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 注册全局组件
import globalComponent from '@/components'
// 全局样式
import '@/styles/index.scss'

const app = createApp(App)

// element-plus
app.use(ElementPlus, {
  locale: zhCn, // 国际化配置
})

// 注册全局组件
app.use(globalComponent)

// svg 图标
import 'virtual:svg-icons-register'

app.mount('#app')
