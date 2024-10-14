// 用户模块 API
import request from '@/utils/request'
import type {
  LoginDataType,
  LoginResponseType,
  UserInfoResponseType,
} from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录
export const reqLogin = (data: LoginDataType) =>
  request.post<any, LoginResponseType>(API.LOGIN_URL, data)

// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, UserInfoResponseType>(API.USERINFO_URL)
