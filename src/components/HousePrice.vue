<template>
  <div id="house-price">
    <h2>Vue中插入Echarts示例</h2>
    <div id="char_example" class="chart-example"></div>
  </div>
</template>

<script>
  export default {
    name: "HousePrice",
    data () {
      return {
        msg: 'shiyxxxxs'
      }
    },
    mounted() {
      let myChart = echartsx.init(document.getElementById('char_example'));
      let option = {
        color: ['#f44'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '每月花费',
            type: 'bar',
            barWidth: '60%',
            data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
          }
        ]
      };

      // myChart.setOption(option);
      myChart.setOption(option)

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});

    }
  }

</script>

<style scoped>

  .chart-example{
    width: 500px;
    height: 500px;
    border: 5px solid black;
    margin: 0 auto;
  }

</style>
