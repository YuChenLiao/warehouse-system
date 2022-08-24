<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :default-active="switchPath"
        class="el-menu-vertical-demo"
        style="user-select: none;"
      >
        <el-menu-item index="1" @click="toPage('1')">
          <i class="el-icon-menu"></i>
          <span slot="title">物料登记</span>
        </el-menu-item>
        <el-menu-item index="2" @click="toPage('2')">
          <i class="el-icon-document"></i>
          <span slot="title">入库登记</span>
        </el-menu-item>
        <el-menu-item index="3" @click="toPage('3')">
          <i class="el-icon-document"></i>
          <span slot="title">领料登记</span>
        </el-menu-item>
        <el-menu-item index="4" @click="toPage('4')">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  computed: {
    switchPath() {
      switch(this.$route.path) {
        case '/firstPage': return '1'
        case '/in': return '2'
        case '/out': return '3'
        case '/system': return '4'
        default: return '1'
      }
    }
  },
  methods: {
    toPage(index) {
      switch(index) {
        case '1':
          this.$router.push('/firstPage')
          break
        case '2':
          this.$router.push('/in')
          break
        case '3':
          this.$router.push('/out')
          break
        case '4':
          this.$router.push('/system')
          break
        default:
          alert('非法路由！')
          break
      }
    }
  }
};
</script>

<style scoped>
</style>