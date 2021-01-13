<template>
        <div>
            <ve-line :data="chartData"></ve-line>
        </div>
</template>

<script>
export default {
    data: function () {
      return {
        chartData: {
          columns: ['日期', '收租'],
          rows: [
            { '日期': '20201101', '收租': 51000},
            { '日期': '20201102', '收租': 72000},
            { '日期': '20201103', '收租': 92340},
            { '日期': '20201104', '收租': 131115},
            { '日期': '20201105', '收租': 150000},
            { '日期': '20201106', '收租': 120000},
            { '日期': '20201107', '收租': 90000},
            { '日期': '20201108', '收租': 70000}
          ]
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    .heade{
        height: 60px;
        font-size: 20px;
        padding: 15px 0 12px 20px;
    }
</style>
