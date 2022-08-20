<template>
  <div class="back">
    <div class="loginBox">
      <p class="title">登录</p>
      <el-form>
        <el-form-item label="用户名" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginBox {
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
}

.title {
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 4vw;
}
</style>