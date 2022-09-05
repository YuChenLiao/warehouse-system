<template>
  <el-card>
    <div class="title">入库登记</div>
    <el-form class="forms" :model="inForm">
      <el-form-item label="原料名称" label-width="80px">
        <el-input class="mid" v-model="inForm.pname"></el-input>
      </el-form-item>
      <el-form-item label="存放仓库" label-width="80px">
        <el-select
          class="mid"
          label="存放仓库"
          label-width="80px"
          v-model="inForm.store"
          placeholder="请选择"
        >
          <el-option
            v-for="item in StoreOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="负责人" label-width="80px">
        <el-input class="mid" v-model="inForm.username"></el-input>
      </el-form-item>
      <el-form-item label="入库数量" label-width="80px">
        <el-input class="mini" type="number" v-model="inForm.num"></el-input>
      </el-form-item>
      <el-form-item label="入库价格" label-width="80px">
        <el-input class="mini" type="number" v-model="inForm.price"></el-input>
      </el-form-item>
      <el-form-item label-width="80px">
        <el-button type="primary" @click="submit" :loading="submited"
          >提交</el-button
        >
        <el-button type="danger" @click="clearForm()">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="title">入库单详情</div>
    <el-form class="forms">
      <el-form-item label="日期筛选" label-width="80px">
        <el-date-picker
          v-model="inTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker>
        <el-button type="primary" @click="query()">查询</el-button>
        <el-button type="primary" @click="res()">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table class="tables" :data="tableData" border>
      <el-table-column label="原料ID" prop="id"></el-table-column>
      <el-table-column label="原料名称" prop="pname"></el-table-column>
      <el-table-column label="存放仓库" prop="store"></el-table-column>
      <el-table-column label="入库数量" prop="num"></el-table-column>
      <el-table-column label="入库价格" prop="price"></el-table-column>
      <el-table-column
        label="入库时间"
        prop="ptime"
        :formatter="dateFormat"
      ></el-table-column>
      <el-table-column label="负责人" prop="username"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "inHouse",
  data() {
    return {
      StoreOptions: [
        {
          value: "电器库",
          label: "电器库",
        },
        {
          value: "衣物库",
          label: "衣物库",
        },
        {
          value: "工具库",
          label: "工具库",
        },
        {
          value: "美食库",
          label: "美食库",
        },
        {
          value: "零件库",
          label: "零件库",
        },
        {
          value: "其他",
          label: "其他",
        },
      ],
      tableData: [],
      inForm: {
        pname: "",
        num: 0,
        store: "",
        price: 0,
        username: "",
      },
      inTime: [],
      submited: false,
    };
  },
  methods: {
    getIN() {
      axios.get("http://localhost:8088/api/ware", {}).then((res) => {
        if (res.data.status === 200) {
          this.tableData = res.data.data;
        }
      });
    },
    submit() {
      this.submited = true
      axios
        .post(
          "http://localhost:8088/api/prod/ware",
          Qs.stringify({
            pname: this.inForm.pname,
            store: this.inForm.store,
            price: this.inForm.price,
            num: this.inForm.num,
            username: this.inForm.username,
          }),
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          if (res.data.status === 200) {
            this.$message.success("提交成功");
          } else {
            this.$message.error(res.data.message);
            this.$router.push("/firstPage");
          }
          setTimeout(() => {
            this.clearForm();
            this.submited = false
          }, 200);
          this.getIN();
        });
    },
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      if (daterc) {
        if (daterc.indexOf("T") === -1) return daterc;
        const arr = daterc.split("T");
        const d = arr[0];
        const darr = d.split("-");
        const t = arr[1];
        const tarr = t.split(".000");
        const marr = tarr[0].split(":");
        const dd =
          darr[0] +
          "-" +
          darr[1] +
          "-" +
          darr[2] +
          " " +
          marr[0] +
          ":" +
          marr[1] +
          ":" +
          marr[2].substring(0, 2);
        return dd;
      }
    },
    query() {
      console.log(this.inTime[0]);
      console.log(this.inTime[1]);
      axios
        .post(
          "http://localhost:8088/api/wares",
          Qs.stringify({
            start: this.inTime[0],
            end: this.inTime[1],
          }),
          {}
        )
        .then((res) => {
          if (res.data.status === 200) {
            this.tableData = res.data.data;
          }
        });
    },
    res() {
      this.getIN();
      this.inTime = [];
    },
    clearForm() {
      this.inForm = {
        pname: "",
        store: "",
        price: 0,
        num: 0,
        username: "",
      };
    },
  },
  mounted() {
    this.getIN();
  },
};
</script>

<style scoped>
</style>
