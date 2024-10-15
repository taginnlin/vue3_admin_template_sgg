// 类型
// 登录参数类型
export interface LoginDataType {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

// 登录返回值类型
export interface LoginResponseType {
  code: number
  data: dataType
}

interface CheckUserType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface UserInfoDataType {
  checkUser: CheckUserType
}
// 用户信息返回值类型
export interface UserInfoResponseType {
  code: number
  data: UserInfoDataType
}
