<template>
  <el-card>
    <div class="title">物料登记</div>
    <el-form class="forms" :model="submitForm">
      <el-form-item label="原料名称" label-width="80px">
        <el-input class="mid" v-model="submitForm.pname"></el-input>
      </el-form-item>
      <el-form-item label="原料种类" label-width="80px">
        <el-select value="" v-model="submitForm.type"></el-select>
      </el-form-item>
      <el-form-item label="存放仓库" label-width="80px">
        <el-select value="" v-model="submitForm.store"></el-select>
      </el-form-item>
      <el-form-item label="入库价格" label-width="80px">
        <el-input type="number" class="mini" v-model="submitForm.price"></el-input>
      </el-form-item>
      <el-form-item label="物料单位" label-width="80px">
        <el-input class="mini" v-model="submitForm.punit"></el-input>
      </el-form-item>
      <el-form-item label="入库数量" label-width="80px">
        <el-input class="mini" type="number" v-model="submitForm.num"></el-input>
      </el-form-item>
      <el-form-item label="负责人" label-width="80px">
        <el-input class="mini" v-model="submitForm.username"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary" @click="submit" :loading="submited"
          >提交</el-button
        >
        <el-button type="danger">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="title">在库原料信息</div>
    <el-table class="tables" :data="tableData" border>
      <el-table-column label="原料ID" prop="id"> </el-table-column>
      <el-table-column label="原料名称" prop="name"> </el-table-column>
      <el-table-column label="往来单位" prop="unit"></el-table-column>
      <el-table-column label="在库数量" prop="num"></el-table-column>
      <el-table-column label="入库价格" prop="price"></el-table-column>
      <el-table-column label="入库时间" prop="time"></el-table-column>
      <el-table-column labal="查看明细" prop="check"></el-table-column>
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
          id: 1001,
          name: "电线",
          time: "2022-8-10",
          unit: "捆",
          num: "30",
          check: "查看",
          price: 23,
        },
      ],
      submitForm: {
        pname: '',
        punit: '',
        store: '',
        type: '',
        price: 0,
        num: 0,
        username: ''
      },
      submited: false,
    };
  },

  methods: {
    submit() {
      this.submited = true;
      setTimeout(() => {
        this.submited = false;
        this.$message({
          message: "提交成功",
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
