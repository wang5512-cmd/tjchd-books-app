<template>
  <div id="app">
    <div class="content">
      <router-view v-if="$route.meta.keepAlive && isRouterAlive"></router-view>
    </div>
    <tabs></tabs>
  </div>
</template>

<script>
import Tabs from "./components/tabs/tabs";
// import Index from './components/books-index/index'

export default {
  components: {
    Tabs,
    // Index,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style scoped>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
}

#app .content {
  flex: 1;
  overflow: auto;
  background: #e9e7ef;
}

.tab-warpper {
  height: 3.125rem;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
