<template>

  <div>
    <!-- select -->
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入小区名称"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-button icon="el-icon-search" type="primary" v-on:click="submitForm">搜索</el-button>

    <!-- 绘图 -->
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function () {
      this.chartSettings = {
        labelMap: {
          'community': '小区名称',
          'avgPrice': '均价',
          'houseCount': '在售房源量'
        },
        legendName: {
          '小区名称': '访问用户 total: 10000'
        }
      };
      return {
        /* 绘图数据 */
        chartData: {
          columns: ['community', 'avgPrice', 'houseCount'],
          rows: [
            {'community': '1/1', 'avgPrice': 1393, 'houseCount': 1093}
          ]
        },
        /* select */
        options: [],
        value: [],
        list: [],
        loading: false
      }
    },
    mounted() {
      axios.get('/api/scrawler/houses/avg').then(res => {
        this.chartData.rows = res.data;
      }).catch(function (error) {
        console.error(error)
      });
    },
    methods: {
      remoteMethod: function (query) {
        var _this = this;
        if (query !== '') {

          axios.get(`/api/scrawler/communities/like?community=${query}`).then(res => {
            let data = res.data;
            let map = data.map(item => {
              return {value: `${item.title}`, label: `${item.title}`};
            })
            _this.list = map
          }).catch(function (error) {
            console.error(error)
          });

          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },
      submitForm: function () {
        console.log(this.value)
        axios.post('/api/scrawler/houses/avg/compare', this.value)
          .then(res => {
            this.chartData.rows = res.data;
          })
          .catch(function (error) {
            console.error(error)
          })
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
