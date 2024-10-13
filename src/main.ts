import { createApp } from 'vue'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

// element-plus
app.use(ElementPlus, {
  locale: zhCn, // 国际化配置
})

app.mount('#app')
