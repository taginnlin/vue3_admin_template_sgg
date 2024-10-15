import { reqLogin } from '@/api/user'
import { LoginDataType } from '@/api/user/type'
import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: '',
    }
  },
  actions: {
    async login(data: LoginDataType) {
      const res: any = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token
        localStorage.setItem('TOKEN', res.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
