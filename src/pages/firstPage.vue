<template>
  <el-card>
    <div class="title">物料登记</div>
    <el-form class="forms" :model="submitForm">
      <el-form-item label="原料名称" label-width="80px">
        <el-input class="mid" v-model="submitForm.pname"></el-input>
      </el-form-item>

      <el-form-item label="原料种类" label-width="80px">
        <el-select class="mid" label="原料种类" label-width="80px" v-model="submitForm.type" placeholder="请选择">
          <el-option
            v-for="item in TypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="存放仓库" label-width="80px">
        <el-select class="mid" label="存放仓库" label-width="80px" v-model="submitForm.store" placeholder="请选择">
          <el-option
            v-for="item in StoreOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入库价格" label-width="80px">
        <el-input
          type="number"
          class="mini"
          v-model="submitForm.price"
        ></el-input>
      </el-form-item>
      <el-form-item label="物料单位" label-width="80px">
        <el-input class="mini" v-model="submitForm.punit"></el-input>
      </el-form-item>
      <el-form-item label="入库数量" label-width="80px">
        <el-input
          class="mini"
          type="number"
          v-model="submitForm.num"
        ></el-input>
      </el-form-item>
      <el-form-item label="负责人" label-width="80px">
        <el-input class="mini" v-model="submitForm.username"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary" @click="submit()"
        >提交
        </el-button
        >
        <el-button type="danger" @click="clearForm()">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="title">在库原料信息</div>
    <el-table class="tables" :data="tableData" border>
      <el-table-column label="原料ID" prop="pid"></el-table-column>
      <el-table-column label="原料名称" prop="pname"></el-table-column>
      <el-table-column label="单位" prop="punit"></el-table-column>
      <el-table-column label="类型" prop="type"></el-table-column>
      <el-table-column label="存放仓库" prop="store"></el-table-column>
      <el-table-column label="在库数量" prop="num"></el-table-column>
      <el-table-column label="入库价格" prop="price"></el-table-column>
      <el-table-column label="入库时间" prop="intime" :formatter="dateFormat"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "firstPage",
  data() {
    return {
      tableData: [],
      submitForm: {
        pname: "",
        punit: "",
        store: "",
        type: "",
        price: 0.0,
        num: 0,
        username: ""
      },
      TypeOptions: [{
        value: "电器",
        label: "电器"
      }, {
        value: "衣物",
        label: "衣物"
      }, {
        value: "工具",
        label: "工具"
      }, {
        value: "食物",
        label: "食物"
      }, {
        value: "零件",
        label: "零件"
      }, {
        value: "其他",
        label: "其他"
      }],
      // typeValue: "",
      StoreOptions: [{
        value: "电器库",
        label: "电器库"
      }, {
        value: "衣物库",
        label: "衣物库"
      }, {
        value: "工具库",
        label: "工具库"
      }, {
        value: "美食库",
        label: "美食库"
      }, {
        value: "零件库",
        label: "零件库"
      }, {
        value: "其他",
        label: "其他"
      }]
      // value: ""
    };
  },

  methods: {
    getProducts() {
      axios.get("http://localhost:8088/api/product", {}).then(res => {
        if (res.data.status === 200) {
          this.tableData = res.data.data;
        }
      });
    },
    submit() {
      axios.post("http://localhost:8088/api/prod/register",
        Qs.stringify({
          pname: this.submitForm.pname,
          punit: this.submitForm.punit,
          store: this.submitForm.store,
          type: this.submitForm.type,
          price: this.submitForm.price,
          num: this.submitForm.num,
          username: this.submitForm.username
        }), {
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }).then(res => {
        if (res.data.status === 200) {
          this.$message.success("添加成功");
        }
        this.getProducts();
      });
      setTimeout(() => {
        this.clearForm()
      },200)
    },
    dateFormat (row, column, cellValue, index) {
      const daterc = row[column.property]
      console.log(row, column)
      if (daterc) {
        if (daterc.indexOf('T') === -1) return daterc
        const arr = daterc.split('T')
        const d = arr[0]
        const darr = d.split('-')
        const t = arr[1]
        const tarr = t.split('.000')
        const marr = tarr[0].split(':')
        const dd = darr[0] + '-' + darr[1] + '-' + darr[2] + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].substring(0, 2)
        return dd
      }
    },
    clearForm() {
      this.submitForm = {
        pname: "",
        punit: "",
        store: "",
        type: "",
        price: 0.0,
        num: 0,
        username: ""
      }
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
