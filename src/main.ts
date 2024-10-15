import { createApp } from 'vue'
import App from './App.vue'
// 全局样式
import '@/styles/index.scss'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 注册全局组件
import globalComponent from '@/components'
// pinia
import pinia from '@/store'

const app = createApp(App)

// element-plus
app.use(ElementPlus, {
  locale: zhCn, // 国际化配置
})

// 注册全局组件
app.use(globalComponent)
// 注册路由
app.use(router)
// 注册状态管理工具
app.use(pinia)

// svg 图标
import 'virtual:svg-icons-register'
import router from './router'

app.mount('#app')
