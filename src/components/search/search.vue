<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        shape="round"
        background="#4fc08d"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="search">
      <ul
        v-show="isShow"
        v-for="(item, index) in keylist.slice(0, 10)"
        :key="index"
      >
        <li @click="enter(index)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <span
      class="new"
      v-for="(item, index) in history.slice(0, 10)"
      :key="'a' + index"
    >
      <router-link :to="{ name: 'details', query: { id: item.id } }">
        {{ item.title }}
      </router-link>
    </span>
    <van-button
      round
      type="info"
      size="small"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      class="del"
      @click="del"
      >清除记录</van-button
    >
  </div>
</template>

<script>
import { Toast } from "vant";
import { loadBooks } from "../../services/books.js";
export default {
  inject: ["reload"],
  data() {
    return {
      value: "",
      books: [],
      count: 0,
      isShow: false,
      pas: [],
      history: [],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    enter(e) {
      console.log(this);
      console.log(this.pas);
      console.log(this.keylist[e]);
      if (localStorage.getItem("pas")) {
        this.pas = JSON.parse(localStorage.getItem("pas"));
        if (
          JSON.stringify(this.pas).indexOf(JSON.stringify(this.keylist[e])) <=
          -1
        ) {
          this.pas.unshift(this.keylist[e]);
          localStorage.setItem("pas", JSON.stringify(this.pas));
        }
      } else {
        this.pas = [];
        this.pas.push(this.keylist[e]);
        localStorage.setItem("pas", JSON.stringify(this.pas));
      }
      this.$router.push({ name: "details", query: { id: this.keylist[e].id } });
    },
    onCancel() {
      Toast("取消");
    },
    inputTxt() {
      console.log(this.$route);
    },
    async loadData() {
      const result = await loadBooks({ per: 1000, title: this.value, page: 1 });
      console.log(result);
      this.books = result.books;
    },
    past() {
      if (localStorage.getItem("pas")) {
        this.history = JSON.parse(localStorage.getItem("pas"));
      } else {
        this.history = [];
      }

      console.log(this.history);
    },
    del() {
      localStorage.removeItem("pas");
      // this.$router.go(0);
      this.reload();
    },
  },
  created() {
    this.loadData();
    this.past();
  },
  computed: {
    keylist() {
      //计算属性
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isShow = true;
      console.log(this.value);
      if (this.value == "") {
        return [];
      } else {
        return this.books.filter((v) => v.title.indexOf(this.value) > -1);
      }
    },
  },
};
</script>

<style scoped>
.van-button--hairline::after {
  border-radius: 2.8125rem;
}
ul {
  display: block;
  /* display: none;  */
  background-color: #ffffff;
  width: 100%;
  height: 2rem;
  margin: auto;
  text-align: center;
}
ul:hover {
  background-color: #3eede7;
  /* width: 300px;  */
  display: block;
}

.search {
  position: absolute;
  width: 100%;
  z-index: 99;
}

a {
  display: inline-block;
  line-height: 0.625rem;
  margin-top: 1rem;
  height: 1.4rem;
  text-align: 1.4rem;
  margin-left: 1rem;
  font-size: 1.25rem;
  color: black;
}

.new {
  margin: 1rem;
  padding: 0;
}

.new a {
  margin: 1rem 0 0 1rem;
  line-height: 0.8rem;
  overflow: hidden;
  max-width: 7rem;
  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.del {
  z-index: 1 !important;
}
</style>
