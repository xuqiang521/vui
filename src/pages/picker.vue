<style lang="stylus">
.picker-page {
  .x-list {
    padding: 0 0.32rem;
    background: #fff;
    color: #333;
    font-size: 14px;

    > li {
      min-height: 60px;
      padding-top: 21px;
      border-bottom: 1px solid #f2f2f2;
      overflow: hidden;

      > label {
        float: left;
      }

      > div {
        float: right;
      }

      .x-list-arrow {
        min-width: 100px;
        margin-right: 10px;
        position: relative;

        > div {
          float: right;
          text-align: right;
          margin-right: 10px;
        }

        &:after {
          content: '';
          position: absolute;
          top: 4px;
          right: -5px;
          width: 10px;
          height: 10px;
          border-top: 1px solid #ccc;
          border-right: 1px solid #ccc;
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
        }
      }
    }
  }
}
</style>

<template>
	<div class="picker-page" v-title data-title="picker">
		<ul class='x-list'>
      <li>
        <label>日期选择</label>
        <div class="x-list-arrow">
          <x-picker title="选择日期" startYear="2016" startDate="2015-01-01" endDate="2019-12-01"  placeholder="请选择日期" v-model="now_date" type="date"></x-picker>
        </div>
      </li>
      <li>
        <label>时间选择</label>
        <div class="x-list-arrow">
					<x-picker title="选择时间" placeholder="请选择时间" startMinute="2" endMinute="30" v-model="now_time" type="time"></x-picker>
        </div>
      </li>
      <li>
        <label>日期时间选择</label>
        <div class="x-list-arrow">
					<x-picker title="选择日期时间" placeholder="请选择日期时间" v-model="now_datetime" :timeStep="20" type="datetime"></x-picker>
        </div>
      </li>
      <li>
        <label>性别选择</label>
        <div class="x-list-arrow">
					<x-picker v-model="gender.value" placeholder="请选择性别" :default="gender.default" title="选择性别" type="custom"></x-picker>
        </div>
      </li>
    </ul>
	</div>
</template>

<script>
export default {
  data() {
    return {
      gender: {
        default: -1,
        value: [
          {
            name: "保密",
            value: 0
          },
          {
            name: "男",
            value: 1
          },
          {
            name: "女",
            value: 2
          }
        ]
      },
      now_date: null,
      now_time: null,
      now_datetime: null // new Date().getTime()/1000
    };
  }
};
</script>
