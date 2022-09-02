<template>
  <el-card>
    <div class="title">系统管理</div>
    <el-form class="forms">
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="backupData" :loading="backup">数据库备份</el-button>
        <el-button type="success" @click="showAddForm" :loading="submited">添加新用户</el-button>
        <el-button type="error" @click="logout()" :loading="submited">登出</el-button>
      </el-form-item>
    </el-form>
    <div class="title">用户管理</div>
    <el-table class="tables" :data="usrs" border>
      <el-table-column label="ID" prop="uid"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="联系方式" prop="telephone"></el-table-column>
    </el-table>
    <el-dialog :visible.sync="showForm">
      <el-form>
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" label-width="80px">
          <el-input v-model="form.telephone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register()">添加用户</el-button>
          <el-button type="danger" @click="showForm = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "system",
  data() {
    return {
      form: {
        username: '',
        password: '',
        telephone: ''
      },
      showForm: false, // 控制添加用户表单的显示
      backup: false, // 控制备份按钮的加载状态
      addUser: false, // 控制添加用户按钮的加载状态
      submited: false,
      usrs: [],
    }
  },
  methods: {
    showAddForm() {
      this.showForm = true;
    },
    register() {
      this.showForm = false;
      axios.post('http://localhost:8088/api/register',
        Qs.stringify({
          username: this.form.username,
          password: this.form.password,
          telephone: this.form.telephone
        }), {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
        if (res.data.status === 200) {
          this.$message.success(res.data.message)
        } else {
          this.$message.error(res.data.message)
        }
        this.getUsers()
      })
    },
    getUsers() {
      axios.get("http://localhost:8088/api/usrs", {}).then(res => {
        this.addUser = true;
        if (res.data.status === 200) {
          this.addUser = false;
          this.usrs = res.data.data
        } else {
          this.$message.error("添加失败")
        }
      })
    },
    backupData() {
      this.backup = true;
      axios.get("http://localhost:8088/api/backup", {}).then(res => {
        if (res.data.status === 200) {
          this.backup = false;
          this.$message.success(res.data.message)
        } else {
          this.$message.error("备份失败")
        }
      });
    },
    logout() {
      axios.get("http://localhost:8088/api/logout", {}).then(res => {
        if (res.data.status === 200) {
          this.$message.success(res.data.message)
        }
        this.$router.push('/')
      });
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
