<template>
  <el-card>
    <div class="title">物料登记</div>
    <el-form class="forms">
      <el-form-item label="原料名称" label-width="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="原料种类" label-width="80px">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="往来单位" label-width="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="原料信息" label-width="80px">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary">提交</el-button>
        <el-button type="danger">清空</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'firstPage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-weight: bold;
  border-bottom: 1px #ccc solid;
  padding: 10px;
  padding-top: 0;
  height: 3vw;
  line-height: 3vw;
}

.forms {
  margin-top: 40px;
  text-align: left;
}
</style>
