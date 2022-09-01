<template>
  <el-card>
    <div class="title">出库登记</div>
    <el-form class="forms" :model="outForm">
      <el-form-item label="物料名称" label-width="80px">
        <el-input class="mid" v-model="outForm.pname"></el-input>
      </el-form-item>
      <el-form-item label="出库仓库" label-width="80px">
        <el-input class="mid" v-model="outForm.store"></el-input>
      </el-form-item>
      <el-form-item label="出库数量" label-width="80px">
        <el-input class="mini" type="number" v-model="outForm.num"></el-input>
      </el-form-item>
      <el-form-item label="出库价格" label-width="80px">
        <el-input class="mini" type="number" v-model="outForm.price"></el-input>
      </el-form-item>
      <el-form-item label="负责人" label-width="80px">
        <el-input class="mid" v-model="outForm.username"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary" @click="submit" :loading="submited"
          >提交</el-button
        >
        <el-button type="danger">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="title">出库单详情</div>
    <el-form  class="forms">
      <el-form-item label="日期筛选" label-width="80px">
        <el-date-picker type="month"></el-date-picker>
      </el-form-item>
    </el-form>
    <el-table class="tables" :data="tableData" border>
      <el-table-column label="原料ID" prop="id"> </el-table-column>
      <el-table-column label="原料名称" prop="name"> </el-table-column>
      <el-table-column label="出库数量" prop="num"></el-table-column>
      <el-table-column label="出库价格" prop="price"></el-table-column>
      <el-table-column label="出库时间" prop="ptime"></el-table-column>
      <el-table-column label="负责人" prop="username"></el-table-column>
      <el-table-column labal="查看明细" prop="check">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "outHouse",
  data() {
    return {
      tableData: [
        {
          id: 1001,
          name: "电线",
          ptime: "2022-8-10",
          num: "30",
          check: "查看",
          price: 23,
          username: "老王",
        },
      ],
      outForm: {
        pname: "",
        store: "",
        price: 0,
        num: 0,
        username: "",
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
