<template>
  <el-card>
    <div class="title">入库登记</div>
    <el-form class="forms">
      <el-form-item label="原料名称" label-width="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="入库数量" label-width="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item></el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'inHouse',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
