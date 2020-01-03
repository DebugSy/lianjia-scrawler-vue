<template>
  <div align="center">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in tableData"
        :key="index"
        prop="item"
        label="item"
        width="150">
      </el-table-column>

      <el-table-column
        v-for="(item, index) in tableData"
        :key="index"
        prop="item"
        label="日期"
        width="150">
        {{Object.keys(item)}}
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Community",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style scoped>

</style>
