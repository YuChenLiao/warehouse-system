<template>
  <div class="back">
    <div class="loginBox">
      <p class="title">登录</p>
      <el-form :model="loginForm" :rules="rules">
        <el-form-item label="用户名" label-width="80px" prop="user">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="pass">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        user: { required: true, message: '用户名不能为空', trigger: 'blur' },
        pass: { required: true, message: '密码不能为空', trigger: 'blur' }
      }
    };
  },

  methods: {
    login() {
      this.$router.push('/firstPage')
    }
  }
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
  width: 30%;
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