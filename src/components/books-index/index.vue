<template>
  <div class="books-content">
    <div class="tuijian">
      <router-link
        class="one"
        :to="{ name: 'details', query: { id: books[0].id } }"
      >
        <img :src="books[0].coverImg" alt="" />
        <ul class="first">
          <li>今日导读</li>
          <h3>{{ books[0].title }}</h3>
          <li>{{ books[0].descriptions }}</li>
        </ul>
      </router-link>
    </div>
    <div class="add">
      <router-link
        :to="{ name: 'read', query: { id: item.id } }"
        class="book"
        v-for="(item, index) in book"
        :key="index"
      >
        <img :src="item.coverImg" :alt="item.title" />
        <p>{{ item.title }}</p>
        <van-button
          round
          type="info"
          size="small"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          class="del"
          @click="del(index)"
          >删除书籍</van-button
        >
      </router-link>
      <router-link tag="div" class="addBooks books" to="/handpick"
        >+</router-link
      ><i></i>
      <i></i>
    </div>
  </div>
</template>

<script>
import { loadBooks } from "../../services/books";
export default {
  data() {
    return {
      books: [{ title: "", coverImg: "" }],
      book: JSON.parse(localStorage.getItem("fav")),
    };
  },
  methods: {
    async loadData() {
      const result = await loadBooks({ per: 1000, title: this.value, page: 1 });
      this.books = result.books;
      console.log(result);
    },
    del(l) {
      this.book.splice(l, 1);
      localStorage.setItem("fav", JSON.stringify(this.book));
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.books-content {
  overflow: auto;
  /* background: red; */
  height: 100%;
}
.first {
  margin-bottom: 0.3rem;
}
.books {
  width: 5rem;
  height: 7rem;
  border: 1px solid #000000;
  text-align: center;
  line-height: 7rem;
  font-size: 7rem;
}

.tuijian {
  height: 6rem;
  /* background-color: aqua; */
}

.tuijian img {
  width: 4.5rem;
  margin-right: 2rem;
  vertical-align: top;
}

.one {
  display: flex;
  color: #000;
}

.one li:nth-of-type(2) {
  margin-top: -0.8rem;
  width: 15rem;
  height: 1rem;
  font-size: 0.18rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.add {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  text-align: center;
  width: 48%;
  color: #000;
}

.book img {
  width: 5rem;
}
</style>
