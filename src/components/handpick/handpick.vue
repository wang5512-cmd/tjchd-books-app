<template>
  <div class="section">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <div class="list">
      <h2>人气点点圈</h2>
      <router-link to="/classify">更多 ></router-link>
    </div>
    <figure class="variety">
      <router-link
        v-for="(item, index) in books.slice(0, 4)"
        :key="index"
        :to="{ name: 'details', query: { id: item.id } }"
      >
        <img :src="item.coverImg" alt="" />
      </router-link>
    </figure>
    <div class="list">
      <h3>书单</h3>
      <router-link to="/classify">></router-link>
    </div>
    <div class="bookname">
      <router-link
        v-for="(item, index) in books.slice(0, 30)"
        :key="index"
        :to="{ name: 'details', query: { id: item.id } }"
      >
        <img :src="item.coverImg" alt="" v-lazy="item.coverImg" />
        <span>{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { loadBooks } from "../../services/books";
import { getToken } from "../../utils/tools";
import Loading from "../loading/loading";
export default {
  data() {
    return {
      books: [],
      isLoading: true,
    };
  },
  methods: {
    async loadData() {
      const result = await loadBooks({ per: 1000, title: this.value, page: 1 });
      console.log(result);
      this.isLoading = false;
      this.books = result.books;
    },
    //登陆拦截
    checkLogin() {
      const token = getToken(); //获取token值
      // console.log(token);
      if (!token) {
        //若token值为空。则需要跳到登录页进行登录，否则进到主页
        this.$router.push({
          name: "Login",
        });
      } else {
        this.loadData();
      }
    },
  },
  created() {
    this.checkLogin();
  },
  components: { Loading },
};
</script>

<style scoped>
ul {
  display: flex;
}
ul li {
  flex: 1;
  text-align: center;
}
a {
  color: black;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
}

.variety {
  display: flex;
  justify-content: space-around;
  margin: 0;
}

.variety img {
  width: 4rem;
}

.bookname {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.bookname a {
  flex: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  color: black;
}

.bookname a img {
  width: 80%;
  margin: 1rem;
}
</style>
