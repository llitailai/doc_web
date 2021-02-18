<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域-->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        abel-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username" class="login_input">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icondenglu"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont iconmima"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="login_btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="success" @click="register">注册</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入您的账号', trigger: 'blur' },
          { min: 6, max: 64, message: '长度请在6位-64位之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 8, max: 30, message: '长度请在8-30位之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          console.log('arr')
          return false
        }
        await this.$http
          .post('/api/show/user/login', null, {
            params: {
              username: this.loginForm.username,
              password: this.loginForm.password
            }
          })
          .then((res) => {
            console.log(res)
            if (res.data.code !== 200) {
              this.$message.error(res.data.msg)
            } else {
              this.$message.success('登录成功')
              window.sessionStorage.setItem('token', res.data.data.token)
              window.sessionStorage.setItem('account', res.data.data.account)
              this.$router.push({ path: '/main' })
            }
          })
      })
    },
    register() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-image: url("../assets/images/login_background_img.jpg");
  background-size: 100% 100%;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(130, 187, 232, 0.1);
  -moz-box-shadow: 4px -4px 50px #57e7f4;
  -webkit-box-shadow: 4px -2px 50px #57e7f4;
  box-shadow: 4px -4px 50px #fff;
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(130, 187, 232, 0.1);
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login_btns {
  display: flex;
  justify-content: flex-end;
}

/deep/ .el-input__inner {
  background-color: rgba(140, 197, 240, 0.1);
  color: rgba(171, 206, 233, 0.5);
}
</style>
