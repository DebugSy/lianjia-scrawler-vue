<template>
  <div align="center">
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

    <div class="el-table el-table__header-wrapper" style="margin-top: 20px">
      <div class="el-table__body-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 1154px;">
          <colgroup>
            <col width="300">
          </colgroup>
          <tbody class="ivu-table-tbody">
          <tr>
            <td>
              <div class="table-cell">对比项</div>
            </td>
            <td v-for="(len, index) in tableData.length" :key="index">
              <div class="table-cell">
                项目{{len}}
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <table cellspacing="0" cellpadding="0" border="0" style="width: 1154px;">
          <colgroup>
            <col width="300">
          </colgroup>
          <tbody class="ivu-table-tbody">
          <tr>
          <tr v-for="(headItem, index) in Object.keys(tableData[0])" :key="index">
            <td>
              <div class="table-cell">
                {{headItem}}
              </div>
            </td>
            <td v-for="(item, index) in tableData" :key="index">
              <div class="table-cell" v-if="headItem === 'link'"><a :href="item[headItem]" target="_blank">链家看房</a></div>
              <div class="table-cell" v-if="headItem !== 'link'">{{item[headItem]}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Community",
    data() {
      return {
        tableData: [
          {
            "id": 1611063530762,
            "title": "九龙仓时代小镇",
            "link": "https://cd.lianjia.com/xiaoqu/1611063530762/",
            "district": "双流",
            "bizcircle": "蛟龙港",
            "tagList": "近地铁3号线龙桥路站",
            "onsale": "70",
            "onrent": "10",
            "year": "2013年建成",
            "housetype": "塔板结合",
            "cost": "2.4至2.6元/平米/月",
            "service": "业主自筹物业",
            "company": "龙昌综合开发（成都）有限公司",
            "buildingNum": "50栋",
            "houseNum": "3129户",
            "price": "13948",
            "city": "cd",
            "validdate": 1577460963000
          },
          {
            "id": 1611063564319,
            "title": "九龙仓时代上城",
            "link": "https://cd.lianjia.com/xiaoqu/1611063564319/",
            "district": "双流",
            "bizcircle": "双流城区",
            "tagList": "",
            "onsale": "28",
            "onrent": "12",
            "year": "2015年建成",
            "housetype": "塔楼",
            "cost": "2.15元/平米/月",
            "service": "成都天府时代物业管理有限公司",
            "company": "龙嘉房地产开发（成都）有限公司",
            "buildingNum": "18栋",
            "houseNum": "2572户",
            "price": "15478",
            "city": "cd",
            "validdate": 1577460963000
          }
        ],
        /* select */
        options: [],
        value: [],
        list: [],
        loading: false
      }
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
            _this.loading = false;
            _this.options = _this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },
      submitForm: function () {
        console.log(this.value);
        var _this = this;
        axios.post('/api/scrawler/communities/list', this.value)
          .then(res => {
            _this.tableData = res.data;
          })
          .catch(function (error) {
            console.error(error)
          })
      },
      replaceMessage(value){
        var url;
        url="http://localhost:63343/web-p/web-project/src/Result/Result.html?item="+value;
        return url;
      }
    }
  }
</script>

<style scoped>
  .table-wrapper{
    position: relative;
    border: 1px solid #d7dde4;
    border-bottom: 0;
    border-right: 0;
  }

  .table{
    width: inherit;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    color: #657180;
    font-size: 12px;
    background-color: #fff;
    box-sizing: border-box;
  }

  .table-cell {
    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;
  }
</style>
