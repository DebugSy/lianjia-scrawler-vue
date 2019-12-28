<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
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
        chartData: {
          columns: ['community', 'avgPrice', 'houseCount'],
          rows: [
            {'community': '1/1', 'avgPrice': 1393, 'houseCount': 1093},
            {'community': '1/1', 'avgPrice': 1393, 'houseCount': 1093}
          ]
        }
      }
    },
    mounted() {
      axios.get('/api/scrawler/houses/avg').then(res => {
        this.chartData.rows = res.data;
      }).catch(function (error) {
        console.error(error)
      });
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
