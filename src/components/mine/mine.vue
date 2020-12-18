<template>
  <div class="mine-wrapper">
    <div class="mine-header">
      <div class="mine-title">
        <van-icon name="chat-o" />
        &emsp;&emsp;&emsp;
        <i class="el-icon-delete" @click="del()"></i>
      </div>
      <div class="mine-info">
        <img class="mine-image" src="./images.jpg" />
        <div class="mine-info-text">
          <p class="name">_小飞龙_</p>
          <p class="mine-ticket">10 月票 | 20 推荐票</p>
        </div>
      </div>
    </div>
    <div class="mine-content">
      <div class="mine-balance">
        <p class="balance-text">账户余额 0 点</p>
        <p class="balance-btn">充值</p>
      </div>
      <ul class="mine-info-list">
        <li class="mine-info-item">
          <p class="item-text"><van-icon name="bar-chart-o" /> 我的等级</p>
          <p class="item-arrow">Lv8 <van-icon name="arrow" /></p>
        </li>
        <li class="mine-info-item">
          <p class="item-text"><van-icon name="balance-list-o" /> 我的阅历</p>
          <p class="item-arrow">小白 <van-icon name="arrow" /></p>
        </li>
        <li class="mine-info-item">
          <p class="item-text"><van-icon name="like-o" /> 阅读偏好</p>
          <p class="item-arrow"><van-icon name="arrow" /></p>
        </li>
        <li class="mine-info-item">
          <p class="item-text"><van-icon name="gem-o" /> 粉丝称号</p>
          <p class="item-arrow"><van-icon name="arrow" /></p>
        </li>
        <li class="mine-info-item">
          <p class="item-text"><van-icon name="label-o" /> 签到</p>
          <p class="item-arrow"><van-icon name="arrow" /></p>
        </li>
        <li class="mine-info-item">
          <p class="item-text"><van-icon name="edit" /> 成为作家</p>
          <p class="item-arrow"><van-icon name="arrow" /></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { removeToken } from "../../utils/tools";
export default {
  data() {
    return {
      msg: false,
    };
  },
  methods: {
    del() {
      this.msg = confirm("确定退出吗？");
      if (this.msg == true) {
        removeToken();
        this.$router.push({
          name: "Login",
        });
      }
    },
  },
};
</script>

<style scoped>
.mine-header {
  height: 7.8125rem;
  color: #fff;
  background: greenyellow;
  padding-bottom: 1rem;
}
.mine-title {
  line-height: 2.25rem;
  text-align: right;
  padding: 0 1rem;
  /* color: #fff; */
}

.mine-title .van-icon {
  margin-top: 1rem;
}

.mine-info {
  padding: 0 1rem;
  margin-top: 1rem;
  display: flex;
}

.mine-image {
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 50%;
  margin-right: 1rem;
}

.mine-info-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mine-info-text .name {
  color: #000;
  margin-bottom: 0.5rem;
}

.mine-info-text .mine-ticket {
  color: #000;
  margin-top: 0.2rem;
}

.mine-content {
  top: 7.8125rem;
  background: #e9e7ef;
}

.mine-balance {
  padding: 0 1rem;
  height: 3.8rem;
  line-height: 3.5rem;
  /* background: #fff; */
  display: flex;
  margin-bottom: 0.5rem;
  background: #e5e5e5;
}

.balance-text {
  flex: 1;
  margin-top: 0.2rem;
}

.balance-btn {
  width: 4rem;
  height: 1.875rem;
  line-height: 1.875rem;
  text-align: center;
  background: #00bc12;
  color: #fff;
  margin: auto 0;
  border-radius: 0.25rem;
}

.mine-info-list {
  padding: 0 1rem;
  background: #e5e5e5;
}

.mine-info-item {
  display: flex;
  line-height: 3rem;
  background: #fff2df;
  margin: 1rem;
  border-radius: 20px;
}

.item-text {
  flex: 1;
  margin-right: 0.5rem;
}

.item-arrow {
  color: #161823;
  background: #fff2df;
}

.van-icon {
  margin-left: 0.25rem;
  color: #dc3023;
  font-size: 1.3rem;
}
.el-icon-delete {
  color: #dc3023;
  font-size: 1.3rem;
}
</style>
