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
      </el-form-item>
    </el-form>
    <div class="title">用户管理</div>
    <el-table></el-table>
    <el-dialog :visible.sync="showForm">
      <el-form>
        <el-form-item label="用户名" label-width="80px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitUser">添加用户</el-button>
          <el-button type="danger" @click="showForm = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: "system",
  data() {
    return {
      showForm: false, // 控制添加用户表单的显示
      backup: false, // 控制备份按钮的加载状态
      addUser: false, // 控制添加用户按钮的加载状态
      submited: false,
    };
  },
  methods: {
    showAddForm() {
      this.showForm = true;
    },

    backupData() {
      this.backup = true;
      setTimeout(() => {
        this.backup = false;
        this.$message({
          message: "备份成功",
          type: "success",
        });
      }, 5000);
    },

    submitUser() {
      this.showForm = false;
      this.submited = true;
      setTimeout(() => {
        this.submited = false;
        this.$message({
          message: "添加成功",
          type: "success",
        });
      }, 5000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
