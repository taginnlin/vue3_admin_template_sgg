// 自动注册全局组件
import { App, Component } from 'vue'
import SvgIcon from './SvgIcon.vue'

const globalComponent: { [name: string]: Component } = {
  SvgIcon,
}

export default {
  install(app: App) {
    Object.keys(globalComponent).forEach((key: string) => {
      app.component(key, globalComponent[key])
    })
  },
}
