<template>
  <el-container class = "main-container">
      <!-- 头部区域-->
      <el-header>
          <div>
              <img src="" alt="">
              <span>NXFTL Blog</span>
          </div>
          <el-button type="info" @click="logout">登出</el-button>
      </el-header>
      <!-- 页面主体区域-->
      <el-container>
          <!-- 侧边栏 -->
          <el-aside width="200px">aside</el-aside>
          <!-- 右侧内容主体 -->
          <el-main>Main</el-main>
      </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.main-container{
    height: 100%;

}

.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    color: #fff;
    font-size: 20px;
    > div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    color: #333744;
}

.el-main {
    background-color: #eaedf1;
}
</style>
