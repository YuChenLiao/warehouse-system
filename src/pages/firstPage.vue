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
    <div class="title">在库原料信息</div>
    <el-table class="tables" :data="tableData" border >
      <el-table-column
        label="原料名称"
        prop="name"
      >
      </el-table-column>
      <el-table-column
        label="入库时间"
        prop="time"
      ></el-table-column>
      <el-table-column
        label="往来单位"
        prop="where"
      ></el-table-column>
      <el-table-column
        label="在库数量"
        prop="num"
      ></el-table-column>
      <el-table-column
        labal="查看明细"
        prop="check"
      ></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      tableData: [
        {
          name: "1",
          time: "1",
          where: "1",
          num: "1",
          check: "查看"
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
