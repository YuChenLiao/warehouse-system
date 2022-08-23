<template>
  <el-card>
    <div class="title">系统管理</div>
    <el-form class="forms">
      <el-form-item style="text-align: center">
        <el-button type="primary">数据库备份</el-button>
        <el-button type="success">添加新用户</el-button>
      </el-form-item>
    </el-form>
    <div class="title">用户管理</div>
    <el-table></el-table>
  </el-card>
</template>

<script>
export default {
  name: "system",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
