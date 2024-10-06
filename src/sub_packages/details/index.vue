<script setup lang='ts'>
import dayjs from 'dayjs';
import { ref } from 'vue';

const data = {
    id: 2,
    content: "今天的天气真好，阳光明媚，心情也格外愉悦。打算去公园散步，呼吸新鲜空气，享受这美好的时光。",
    comment: 3,
    image: ["https://blog.liuyuyang.net/usr/uploads/2024/05/3481459650.png", "https://blog.liuyuyang.net/usr/uploads/2024/05/4016624051.png", "https://blog.liuyuyang.net/usr/uploads/2024/05/3481459650.png"],
    createTime: 1727961185000
}

// 预览图片
const previewImage = (urls: string[], current: number) => {
    uni.previewImage({
        urls,
        current,
    });
}

const commentList = ref([
    {
        id: 1,
        name: "宇阳",
        avatar: "https://blog.liuyuyang.net/avatar.jpg",
        content: "春花烂漫，生活也亦如此，充满生机与希望。",
        createTime: 1727961185000,
        children: [
            {
                id: 3,
                name: "神秘人",
                avatar: "https://blog.liuyuyang.net/avatar.jpg",
                content: "也许这就是春天的魅力吧",
                createTime: 1727961185000
            }
        ]
    },
    {
        id: 2,
        name: "宇阳",
        avatar: "https://blog.liuyuyang.net/avatar.jpg",
        createTime: 1727961185000,
        content: "春花烂漫，生活也亦如此，充满生机与希望，这就是春天的魅力吧。"
    }
])
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

                <view hover-class="msg_focus" class="msg">{{ commentList.length }}条评论</view>
            </view>

            <view class="statis">记录于 {{ dayjs(data.createTime).format('HH:mm') }}</view>
        </view>

        <view class="main">
            <view class="content">{{ data.content }}</view>

            <view class="image_box">
                <image :src="url" mode="aspectFill" class="image" :key="current" v-for="(url, current) in data.image"
                    @click="previewImage(data.image, current)" />
            </view>
        </view>

        <view class="comment">
            <view class="item" :key="one.id" v-for="one in commentList">
                <view class="info">
                    <image :src="one.avatar" mode="aspectFill" class="avatar" />
                    <text class="name">{{ one.name }}</text>
                    <text class="time">{{ dayjs(one.createTime).format('HH:mm') }}</text>
                </view>

                <view class="content">{{ one.content }}</view>

                <view class="two" v-if="one.children">
                    <template v-for="two in one.children">
                        <view class="info">
                            <image :src="two.avatar" mode="aspectFill" class="avatar" />
                            <text class="name">{{ two.name }}</text>
                            <text class="time">{{ dayjs(two.createTime).format('HH:mm') }}</text>
                        </view>

                        <view class="content" style="font-size: 24rpx;">回复{{ one.name }}：{{ two.content }}
                        </view>
                    </template>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang='scss'>
.header {
    .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .time {
        display: flex;
        align-items: center;

        .day {
            font-size: 80rpx;
            font-weight: 700;
            margin-right: 20rpx;
        }

        .weeks {
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

    .msg {
        width: 60px;
        padding: 7px;
        font-size: 12px;
        border-radius: 15px;
        color: #333;
        font-weight: 700;
        background-color: #e7e7e7;
        text-align: center;
    }

    .msg_focus {
        background-color: #bbbbbb;
    }

    .statis {
        margin-top: 20rpx;
        font-size: 24rpx;
        color: #5a5a5a;
    }
}

.main {
    .content {
        margin: 20rpx 0;
        font-size: 28rpx;
    }

    .image_box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20rpx;
        margin-top: 20rpx;

        .image {
            width: 100%;
            height: 200rpx;
            border: 2rpx solid #eee;
        }
    }
}

.comment {
    margin-top: 80rpx;

    .item {
        margin: 40rpx 0;

        .info {
            display: flex;
            align-items: center;

            .name {
                font-size: 28rpx;
                font-weight: 700;
                margin-left: 10rpx;
                margin-right: 20rpx;
            }

            .time {
                color: #999;
                font-size: 24rpx;
                font-family: serif;
            }

            .avatar {
                width: 60rpx;
                height: 60rpx;
                border-radius: 50%;
            }
        }

        .content {
            font-size: 28rpx;
            color: #666;
            padding-left: 70rpx;
        }

        .two {
            padding-left: 60rpx;
            padding-top: 40rpx;
        }
    }
}
</style>