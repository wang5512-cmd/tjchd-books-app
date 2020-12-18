<template>
  <div class="tab-warpper">
    <div class="tab">
      <router-link to="/index">
        <div class="tab-icon">
          <i class="el-icon-reading"></i>
          <span class="icon-title">书架</span>
        </div>
      </router-link>
      <router-link to="/handpick">
        <div class="tab-icon">
          <i class="el-icon-trophy"></i>
          <span class="icon-title">推荐</span>
        </div>
      </router-link>
      <router-link to="/search">
        <div class="tab-icon">
          <i class="el-icon-search"></i>
          <span class="icon-title">搜索</span>
        </div>
      </router-link>
      <router-link to="/classify">
        <div class="tab-icon">
          <i class="el-icon-tickets"></i>
          <span class="icon-title">分类</span>
        </div>
      </router-link>
      <router-link to="/mine">
        <div class="tab-icon" @click="login()">
          <i class="el-icon-user"></i>
          <span class="icon-title">我的</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { isLogined } from "../../utils/tools";
export default {
  methods: {
    login() {
      if (isLogined()) {
        this.$router.push({ path: "/mine" });
      } else {
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style scoped>
.tab-warpper {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.content {
  flex: 1;
}

.tab {
  height: 3.125rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  background-color: #4fc08d;
  color: #faff72;
}

.tab a {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #faff72;
}

.tab-icon {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.active {
  color: red !important;
}
</style>
