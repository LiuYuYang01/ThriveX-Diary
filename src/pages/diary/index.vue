<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 安全距离
const safeTop = safeAreaInsets?.top ? safeAreaInsets?.top + 'px' : '40rpx';

const list = ref(
  [
    {
      id: 1,
      content: "早起不了一点...",
      comment: 6,
      image: ["https://blog.liuyuyang.net/usr/uploads/2024/05/4016624051.png", "https://blog.liuyuyang.net/usr/uploads/2024/05/3481459650.png"],
      createTime: 1728049405779
    },
    {
      id: 2,
      content: "今天的天气真好，阳光明媚，心情也格外愉悦。打算去公园散步，呼吸新鲜空气，享受这美好的时光。",
      comment: 3,
      image: ["https://blog.liuyuyang.net/usr/uploads/2024/05/3481459650.png"],
      createTime: 1727961185000
    },
    {
      id: 3,
      content: "学习编程真有趣，特别是当你写出第一个能运行的程序时，那种成就感无以言表。希望能不断进步。",
      comment: 5,
      createTime: 1727874785000
    },
    {
      id: 4,
      content: "需要喝杯咖啡提神，昨晚加班到很晚，今天的工作任务依然繁重。希望能尽快完成手头的项目。",
      comment: 2,
      createTime: 1727788385000
    },
    {
      id: 5,
      content: "工作进度不错，团队合作也很顺利。大家都很努力，希望项目能够按时完成，取得好成绩。",
      comment: 4,
      createTime: 1728053405779
    },
    {
      id: 6,
      content: "该运动一下了，久坐对身体不好。打算下班后去健身房锻炼，保持健康的生活方式。",
      comment: 1,
      createTime: 1728054405779
    },
    {
      id: 7,
      content: "午饭吃什么呢？最近尝试了很多新菜，发现自己对烹饪越来越感兴趣。也许该考虑学做几道拿手菜。",
      comment: 7,
      createTime: 1728055405779
    },
    {
      id: 8,
      content: "发现了一本好书，内容引人入胜，让人爱不释手。打算花时间好好阅读，提升自己的知识水平。",
      comment: 8,
      createTime: 1728056405779
    },
    {
      id: 9,
      content: "要保持积极心态，生活中总会有各种挑战，但只要乐观面对，就没有解决不了的问题。",
      comment: 0,
      createTime: 1728057405779
    },
    {
      id: 10,
      content: "今天要早睡，最近的作息时间有些紊乱，早睡早起才能有更好的精神状态面对新的一天。",
      comment: 6,
      createTime: 1728058405779
    },
    {
      id: 11,
      content: "准备周末出游，计划去一个从未去过的地方，探索新的风景，体验不同的文化。",
      comment: 3,
      createTime: 1728059405779
    },
    {
      id: 12,
      content: "买了新的电子产品，功能强大，使用起来非常方便。希望能提高工作效率，节省更多时间。",
      comment: 5,
      createTime: 1728060405779
    },
    {
      id: 13,
      content: "学会了一道新菜，味道还不错，家人也很喜欢。烹饪的过程让我感到放松和快乐。",
      comment: 2,
      createTime: 1728061405779
    },
    {
      id: 14,
      content: "和朋友聚会很开心，大家聊了很多有趣的话题，分享了彼此的近况。这样的时光总是特别珍贵。",
      comment: 4,
      createTime: 1728062405779
    },
    {
      id: 15,
      content: "需要整理房间了，杂物太多影响了生活质量。计划周末进行一次大扫除，让环境焕然一新。",
      comment: 1,
      createTime: 1728063405779
    },
    {
      id: 16,
      content: "看了一部好电影，剧情扣人心弦，演员的表演也很出色。这样的电影总是让人回味无穷。",
      comment: 7,
      createTime: 1728064405779
    },
    {
      id: 17,
      content: "尝试了新运动，虽然一开始有些困难，但坚持下来后发现乐趣无穷，也锻炼了身体。",
      comment: 8,
      createTime: 1728065405779
    },
    {
      id: 18,
      content: "要多喝水，保持身体的水分充足对健康很重要。每天至少要喝八杯水，这是我给自己的小目标。",
      comment: 0,
      createTime: 1728066405779
    },
    {
      id: 19,
      content: "计划新的学习目标，希望在接下来的几个月里能够掌握一项新的技能，为未来的发展做好准备。",
      comment: 6,
      createTime: 1728067405779
    },
    {
      id: 20,
      content: "最近迷上了摄影，记录生活中的美好瞬间。每一张照片都是一个故事，充满了回忆和情感。",
      comment: 3,
      createTime: 1728068405779
    }
  ]
);

// 处理时间数据
const formatDate = (timestamp: number) => {
  const now = dayjs();
  const date = dayjs(timestamp);

  if (date.isSame(now, 'day')) {
    return '今天';
  } else if (date.isSame(now.subtract(1, 'day'), 'day')) {
    return '昨天';
  } else if (now.diff(date, 'day') <= 7) {
    return `${now.diff(date, 'day')}天前`;
  } else {
    return dayjs(timestamp).format('YYYY-MM-DD');
  }
};

// 预览图片
const previewImage = (urls: string[], current: number) => {
  uni.previewImage({
    urls,
    current,
  });
}

const toDetails = (id: number) => {
  uni.navigateTo({
    url: `/sub_packages/details/index?id=${id}`,
  })
}
</script>

<template>
  <view class="page">
    <view class="header" :style="{ paddingTop: safeTop }">
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
      </view>

      <view class="statis">你已记录 135 天，共有 243 条评论</view>
    </view>

    <view class="main">
      <view class="item" v-for="item in list" :key="item.id" @click="toDetails(item.id)">
        <h3>{{ formatDate(item.createTime) }}</h3>

        <view hover-class="box_focus" class="box">
          <view style="display: flex; justify-content: space-between;">
            <view class="time">{{ dayjs(item.createTime).format('HH:mm') }}</view>
            <view hover-class="statis_focus" class="statis">{{ item.comment }} 回复</view>
          </view>

          <view class="content">{{ item.content }}</view>

          <view class="image_box">
            <image :src="url" mode="aspectFill" class="image" :key="current" v-for="(url, current) in item.image"
              @click="previewImage(item.image, current)" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.page {
  padding: 0;
  background-color: #f9f9f9;
}

.header {
  padding: 40rpx;
  border-bottom-right-radius: 160rpx;
  background-color: #42b983;
  box-shadow: 0 20rpx 30rpx -6rpx rgba(102, 184, 135, 0.9);

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .time {
    display: flex;
    align-items: center;
    color: #fff;

    .day {
      font-size: 80rpx;
      font-weight: 700;
      margin-right: 20rpx;
    }

    .weeks {
      color: #e2e2e2;
      font-size: 28rpx;
    }

    .separation {
      font-size: 40rpx;
      margin-left: -20rpx;
    }

    .month {
      font-weight: 700;
    }
  }

  .statis {
    font-size: 24rpx;
    color: #e5e5e5;
  }
}

.main {
  padding: 0 40rpx;
  margin-top: 80rpx;

  .item {
    margin: 40rpx 0;

    h3 {
      font-size: 30rpx;
      padding-left: 20rpx;
    }
  }

  .box {
    padding: 40rpx;
    padding-top: 20rpx;
    margin-top: 20rpx;
    border-radius: 20rpx;
    background-color: #fff;
    border: 1px solid #eee;

    .time {
      font-size: 24rpx;
      color: #999;
    }

    .statis {
      padding: 5rpx 20rpx;
      color: #c1c1c1;
      font-size: 24rpx;
      border-radius: 30rpx;
      border: 2rpx solid #f4f4f4;
    }

    .statis_focus {
      color: #42b983;
      border: 2rpx solid #42b983;
      font-weight: 700;
    }

    .content {
      margin-top: 10rpx;
      font-size: 28rpx;
      color: #333;
    }

    .image_box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 20rpx;

      .image {
        width: 100%;
        height: 200rpx;
        border-radius: 20rpx;
        border: 2rpx solid #eee;
      }
    }
  }

  .box_focus {
    border: 1px solid #42b983;
  }
}
</style>