<template>
  <el-card>
    <div class="title">系统管理</div>
    <el-form class="forms">
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="backupData" :loading="backup"
          >数据库备份</el-button
        >
        <el-button type="success" @click="showAddForm" :loading="submited"
          >添加新用户</el-button
        >
        <el-button type="error" @click="logout()" :loading="submited"
          >登出</el-button
        >
      </el-form-item>
    </el-form>
    <div class="title">用户管理</div>
    <el-table class="tables" :data="usrs" border>
      <el-table-column label="ID" prop="uid"></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="联系方式" prop="telephone"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="upGradeUser(scope.row)" type="text" size="small"
            >修改</el-button
          >
          <el-button @click="deleteUser(scope.row)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
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
    <el-dialog :visible.sync="showUpgrade">
      <el-form>
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="upgradeForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input v-model="upgradeForm.password"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" label-width="80px">
          <el-input v-model="upgradeForm.telephone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="upgarade()">更新用户</el-button>
          <el-button type="danger" @click="showUpgrade = false">取消</el-button>
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
        username: "",
        password: "",
        telephone: "",
      },
      showForm: false, // 控制添加用户表单的显示
      backup: false, // 控制备份按钮的加载状态
      addUser: false, // 控制添加用户按钮的加载状态
      submited: false,
      usrs: [],
      showUpgrade: false,
      upgradeForm: {
        uid: 0,
        username: "",
        password: "",
        telephone: "",
      },
      deleteId: 0
    };
  },
  methods: {
    showAddForm() {
      this.showForm = true;
    },
    register() {
      this.showForm = false;
      axios
        .post(
          "http://localhost:8088/api/register",
          Qs.stringify({
            username: this.form.username,
            password: this.form.password,
            telephone: this.form.telephone,
          }),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          if (res.data.status === 200) {
            this.$message.success(res.data.message);
          } else {
            this.$message.error(res.data.message);
          }
          this.getUsers();
        });
    },
    getUsers() {
      axios.get("http://localhost:8088/api/usrs", {}).then((res) => {
        this.addUser = true;
        if (res.data.status === 200) {
          this.addUser = false;
          this.usrs = res.data.data;
        } else {
          this.$message.error("获取失败");
        }
      });
    },
    backupData() {
      this.backup = true;
      axios.get("http://localhost:8088/api/backup", {}).then((res) => {
        if (res.data.status === 200) {
          this.backup = false;
          this.$message.success(res.data.message);
        } else {
          this.$message.error("备份失败");
        }
      });
    },
    logout() {
      axios.get("http://localhost:8088/api/logout", {}).then((res) => {
        if (res.data.status === 200) {
          this.$message.success(res.data.message);
        }
        localStorage.removeItem("token");
        this.$router.push("/");
      });
    },
    upGradeUser(data) {
      console.log(data);
      this.showUpgrade = true;
      this.upgradeForm = {
        uid: data.uid,
        username: data.username,
        password: "",
        telephone: data.telephone,
      };
    },
    async upgarade() {
      this.showUpgrade = false;
      let temp = await axios.post(
        "http://localhost:8088/api/usr/update",
        Qs.stringify({
          id: this.upgradeForm.uid,
          username: this.upgradeForm.username,
          password: this.upgradeForm.password,
          telephone: this.upgradeForm.telephone,
        }),
        {
          "content-type": "application/json",
        }
      );
      if (temp.data.status === 200) this.$message.success("更新成功");
      else this.$message.error("更新出错:" + temp.data.message);
    },
    deleteUser(data) {
      this.deleteId = data.uid
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let temp = await axios.post(
            "http://localhost:8088/api/usr/delete",
            Qs.stringify({
              id: this.deleteId,
            }),
            {
              "content-type": "application/x-www-form-urlencoded",
            }
          );
          console.log(temp)
          if (temp.data.status === 200)
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          else this.$message.error("删除失败:" + temp.data.message);
          this.getUsers();
        })
        .catch(async() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
