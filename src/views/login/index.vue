<template>
  <div class="login_cont">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginFormRef"
          class="login_form"
          :rules="rules"
          :model="loginData"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选管理平台</h2>
          <el-form-item prop="username">
            <el-input
              v-model="loginData.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginData.password"
              type="password"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login_btn"
              :loading="loading"
              @click="loginClick"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store'
import { ElNotification, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time'

const userStore = useUserStore()
const router = useRouter()

const loginFormRef = ref<FormInstance>()
const loginData = reactive({
  username: 'admin',
  password: '111111',
})

const loading = ref(false)

const validateUsername = (_rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('用户名不能为空'))
  } else if (value.length < 5) {
    callback(new Error('用户名长度至少五位'))
  } else {
    callback()
  }
}

const validatePassword = (_rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码长度至少为六位'))
  } else {
    callback()
  }
}

const rules = {
  username: [{ validator: validateUsername, trigger: ['blur', 'change'] }],
  password: [{ validator: validatePassword, trigger: ['blur', 'change'] }],
}

// 登录
const loginClick = async () => {
  await loginFormRef.value?.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        await userStore.login(loginData)
        ElNotification({
          type: 'success',
          message: '欢迎回来',
          title: `hi, ${getTime()}好`,
        })
        router.push('/')
        loading.value = false
      } catch (error) {
        ElNotification({
          type: 'error',
          message: (error as Error).message,
        })
        loading.value = false
      }
    }
  })
}
</script>

<style scoped lang="scss">
.login_cont {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') top center/cover no-repeat;

  .login_form {
    position: relative;
    width: 500px;
    margin: 30vh auto 0;
    padding: 40px;
    background: url('@/assets/images/login_form.png') 0 0 / cover no-repeat;

    h1 {
      font-size: 40px;
      color: #fff;
    }

    h2 {
      font-size: 25px;
      color: #fff;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
