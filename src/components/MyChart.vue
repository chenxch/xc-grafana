<template>
<div class="chart">
    <div class="chart-title">panel{{id}}</div>
    <chart :options="options" autoresize></chart></div>
</template>
<script>
import chart from 'vue-echarts';
import "echarts/lib/chart/line";

export default {
  name: 'MyChart',
  components: {chart},
  props: {
    id:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      options: {
        grid:{
          left: 40,
          right: 0,
          top: 10,
          bottom: 20
        },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
}
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.chart{
  width: 100%;
  height: 100%;
  &-title{
    height: 28px;
    line-height: 28px;
    cursor: move;
    
  }
}
.echarts {
  width: 100%;
  height: calc(100% - 28px);
}
</style>
