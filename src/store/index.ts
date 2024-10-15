import { createPinia } from 'pinia'
import useUserStore from './modules/useUserStore'

const pinia = createPinia()

export default pinia

export { useUserStore }
