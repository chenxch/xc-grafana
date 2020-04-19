<template>
  <div class="grid">
    <div class="grid-title">
      <div>
        <el-checkbox v-model="draggable">draggable</el-checkbox>
        <el-checkbox v-model="resizable">resizable</el-checkbox>
      </div>
      <div>Displayed as [x, y, w, h]:</div>
      <div>
        <div v-for="item in layout" :key="item.i" class="grid-title-item">
          {{item.i}}:[{{item.x}},{{item.y}},{{item.w}},{{item.h}}]</div>
      </div>
    </div>
    <grid-layout :layout="layout" :col-num="24" :row-height="30" :is-draggable="draggable" :is-resizable="resizable"
      :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
      <grid-item v-for="item in layout" :key="item.i" class="vue-grid-item" :x="item.x" :y="item.y" :w="item.w"
        :h="item.h" :i="item.i">
        <div class="item-charts">
          <MyChart :id="item.i"></MyChart>
          </div>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
  import {
    GridLayout,
    GridItem
  } from 'vue-grid-layout';
  import MyChart from '../MyChart';

  const testLayout = [{
      "x": 0,
      "y": 0,
      "w": 12,
      "h": 8,
      "i": "0"
    },
    {
      "x": 12,
      "y": 0,
      "w": 12,
      "h": 8,
      "i": "1"
    },
    {
      "x": 0,
      "y": 5,
      "w": 24,
      "h": 10,
      "i": "2"
    }
    // {
    //   "x": 6,
    //   "y": 0,
    //   "w": 2,
    //   "h": 3,
    //   "i": "3"
    // },
    // {
    //   "x": 8,
    //   "y": 0,
    //   "w": 2,
    //   "h": 3,
    //   "i": "4"
    // },
    // {
    //   "x": 10,
    //   "y": 0,
    //   "w": 2,
    //   "h": 3,
    //   "i": "5"
    // },
    // {
    //   "x": 0,
    //   "y": 5,
    //   "w": 2,
    //   "h": 5,
    //   "i": "6"
    // },
    // {
    //   "x": 2,
    //   "y": 5,
    //   "w": 2,
    //   "h": 5,
    //   "i": "7"
    // },
    // {
    //   "x": 4,
    //   "y": 5,
    //   "w": 2,
    //   "h": 5,
    //   "i": "8"
    // },
    // {
    //   "x": 6,
    //   "y": 4,
    //   "w": 2,
    //   "h": 4,
    //   "i": "9"
    // },
    // {
    //   "x": 8,
    //   "y": 4,
    //   "w": 2,
    //   "h": 4,
    //   "i": "10"
    // },
    // {
    //   "x": 10,
    //   "y": 4,
    //   "w": 2,
    //   "h": 4,
    //   "i": "11"
    // },
    // {
    //   "x": 0,
    //   "y": 10,
    //   "w": 2,
    //   "h": 5,
    //   "i": "12"
    // },
    // {
    //   "x": 2,
    //   "y": 10,
    //   "w": 2,
    //   "h": 5,
    //   "i": "13"
    // },
    // {
    //   "x": 4,
    //   "y": 8,
    //   "w": 2,
    //   "h": 4,
    //   "i": "14"
    // },
    // {
    //   "x": 6,
    //   "y": 8,
    //   "w": 2,
    //   "h": 4,
    //   "i": "15"
    // },
    // {
    //   "x": 8,
    //   "y": 10,
    //   "w": 2,
    //   "h": 5,
    //   "i": "16"
    // },
    // {
    //   "x": 10,
    //   "y": 4,
    //   "w": 2,
    //   "h": 2,
    //   "i": "17"
    // },
    // {
    //   "x": 0,
    //   "y": 9,
    //   "w": 2,
    //   "h": 3,
    //   "i": "18"
    // },
    // {
    //   "x": 2,
    //   "y": 6,
    //   "w": 2,
    //   "h": 2,
    //   "i": "19"
    // }
  ];
  export default {
    name: 'DashboardGrid',
    components: {
      GridLayout,
      GridItem,
      MyChart
    },
    props: {},
    data() {
      return {
        layout: testLayout,
        draggable: true,
        resizable: true
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
  .grid {
    height: 100%;
    width: 100%;

    &-title {
      border: 1px solid #000;
      text-align: left;

      &-item {
        width: 180px;
        display: inline-block;
      }
    }
  }

  .vue-grid-item {
    border: 1px solid #E0E0E0;
  }
  .item-charts{
    width: 100%;
    height: 100%;
    padding: 0 10px 10px;
    box-sizing: border-box;
  }
</style>