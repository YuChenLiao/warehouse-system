<template>
  <el-card>
    <div class="title">物料登记</div>
    <el-form class="forms">
      <el-form-item label="原料名称" label-width="80px">
        <el-input class="mid"></el-input>
      </el-form-item>
      <el-form-item label="原料种类" label-width="80px">
        <el-select value=""></el-select>
      </el-form-item>
      <el-form-item label="存放仓库" label-width="80px">
        <el-select value=""></el-select>
      </el-form-item>
      <el-form-item label="入库价格" label-width="80px">
        <el-input type="number" class="mini"></el-input>
      </el-form-item>
      <el-form-item label="负责人" label-width="80px">
        <el-input class="mid"></el-input>
      </el-form-item>
      <el-form-item label="物料单位" label-width="80px">
        <el-input class="mid"></el-input>
      </el-form-item>
      <el-form-item label="往来单位" label-width="80px">
        <el-input class="mid"></el-input>
      </el-form-item>
      <el-form-item label="原料信息" label-width="80px">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary" @click="submit" :loading="submited">提交</el-button>
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
          name: "电线",
          time: "2022-8-10",
          where: "xx厂家",
          num: "30",
          check: "查看"
        },
      ],
      submited: false,
    };
  },

  methods: {
    submit() {
      this.submited = true
      setInterval(() => {
        this.submited = false;
      }, 5000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
