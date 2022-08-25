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
        <el-button type="primary" @click="submit" :loading="submited">提交</el-button>
        <el-button type="danger">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="title">出库单详情</div>
    <el-table></el-table>
  </el-card>
</template>

<script>
export default {
  name: "outHouse",
  data() {
    return {
      outForm: {
        pname: "",
        store: "",
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
