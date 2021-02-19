<template>
    <div class="block">
      <el-card id="top_title">
        <div>
          <el-link type="success" @click="redirectMain" style="font-size:18px;float:right">主页</el-link>
          <h1>时间线</h1>
          </div>
          </el-card>
  <el-timeline class = "timeline">
    <el-timeline-item timestamp="2020-02-18" placement="top" class="timeline_item">
      <el-card shadow="hover">
        <h4>更新日报 : 更新时间线</h4>
        <p style="font-size:14px;color:gray">
          2021-02-18 完成登录,注册前后端调通,样式精调,
          完善时间线功能,样式精调
        </p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2020-02-19" placement="top" class="timeline_item">
      <el-card shadow="hover">
        <h4>预计更新 : 主页布局</h4>
        <p style="font-size:14px;color:gray">预计2021-02-18 完成主页布局调整,菜单管理等功能</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    redirectMain() {
      this.$router.push({ path: '/main' })
    }
  }
}
</script>

<style lang="less" scoped>

.block{
   background-color: #fad3e745;
   height: 100%;
   background-size: 100% 100%;
}

.timeline{
  margin-top: 120px;
}
.timeline_item{
  margin: 15px;
}

#top_title{
 background-color: rgb(253, 250, 250);
}

.el-divider {
    background-color: rgb(151, 148, 148);
    position: relative;
}

/deep/ .el-timeline-item__timestamp.is-top {
  color: gray;
}

/deep/ .el-card.is-hover-shadow{
   background-color: rgb(253, 250, 250);
}

</style>
