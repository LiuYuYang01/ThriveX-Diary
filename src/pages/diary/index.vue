<script setup lang="ts">
</script>

<template>
  <view class="page">
    <view class="header">
      <view class="box">
        <view class="time">
          <view class="day">30</view>

          <view>
            <view class="weeks">星期二</view>

            <view>
              <text class="separation">/</text>
              <text class="month">4月</text>
            </view>
          </view>
        </view>

        <view hover-class="msg_focus" class="msg">回声</view>
      </view>

      <view class="data">你已记录 135 天，共有 243 条评论</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  display: flex;
  align-items: center;

  .day {
    font-size: 40px;
    font-weight: 700;
    margin-right: 10px;
  }

  .weeks {
    color: #666;
    font-size: 12px;
  }

  .separation {
    font-size: 20px;
    margin-left: -10px;
  }

  .month {
    font-weight: 700;
  }
}

.msg {
  width: 60px;
  padding: 7px;
  font-size: 12px;
  border-radius: 15px;
  color: #fff;
  background-color: #444740;
  text-align: center;
}
.msg_focus{
  background-color: #bbbbbb;
}

.data{
  font-size: 12px;
  color: #999;
}
</style>