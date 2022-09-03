<template>
  <div id="app">
    <el-header
      v-if="ifLogin"
      style="font-size: 30px; font-weight: bold; user-select: none"
      >仓库管理系统</el-header
    >
    <el-container class="mainView">
      <el-aside width="200px" v-if="ifLogin"><side-bar></side-bar></el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from "./components/sideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
  computed: {
    ifLogin() {
      if (this.$route.path != "/") return true;
      else return false;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mainView {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: auto;
}
</style>
