<script setup lang='ts'>
import { ref } from 'vue';

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 安全距离
const safeTop = safeAreaInsets?.top +'px'
const safeBottom = safeAreaInsets?.bottom ? safeAreaInsets.bottom + 'px' : (safeAreaInsets?.bottom! + 20) + 'px'

const content = ref("")

</script>

<template>
  <view class="page">
    <input focus placeholder="标题" placeholder-style="color:#d3d3d3" class="title" :style="{ marginTop: safeTop }"/>
    <view class="data">9月30日 晚上7:42 <text style="padding: 0 10rpx;">|</text> {{ content.length ? content.length : 0 }}字
    </view>

    <textarea auto-height placeholder-style="color:#d3d3d3" placeholder="记录美好时刻!" v-model="content" class="content" />

    <uni-file-picker limit="4"></uni-file-picker>

    <button type="primary" :style="{ marginBottom: safeBottom }" class="save">记录此刻</button>
  </view>
</template>

<style scoped lang='scss'>
.title {
  outline: none;
  font-size: 40rpx;
  font-weight: 500;
  caret-color: #42b983;
}

.data {
  color: #999;
  font-size: 12px;
  margin-top: 20rpx;
}

.content {
  width: 100%;
  margin-top: 30rpx;
  margin-bottom: 100rpx;
  font-size: 28rpx;
}

.save {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 999;
  width: 90%;
}
</style>