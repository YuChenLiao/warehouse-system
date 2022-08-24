<template>
  <el-card>
    <div class="title">入库登记</div>
    <el-form class="forms" :model="inForm">
      <el-form-item label="原料名称" label-width="80px">
        <el-input class="mid" v-model="inForm.name"></el-input>
      </el-form-item>
      <el-form-item label="存放仓库" label-width="80px">
        <el-input class="mid" v-model="inForm.name"></el-input>
      </el-form-item>
      <el-form-item label="负责人" label-width="80px">
        <el-input class="mid" v-model="inForm.name"></el-input>
      </el-form-item>
      <el-form-item label="入库数量" label-width="80px">
        <el-input class="mini" type="number" v-model="inForm.num"></el-input>
      </el-form-item>
      <el-form-item label="入库价格" label-width="80px">
        <el-input class="mini" type="number" v-model="inForm.num"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary" @click="submit" :loading="submited">提交</el-button>
        <el-button type="danger">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="title">入库单详情</div>
    <el-table></el-table>
  </el-card>
</template>

<script>
export default {
  name: 'inHouse',
  data () {
    return {
      inForm: {
        name: '',
        num: 0,
      },
      submited: false
    }
  },
  methods: {
    submit() {
      this.submited = true
      setTimeout(() => {
        this.submited = false;
        this.$message({
          message: "提交成功",
          type: "success",
        });
      }, 5000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
