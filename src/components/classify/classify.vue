<template>
  <div class="aui-scrollView">
    <div class="m-scrolltab" data-ydui-scrolltab>
      <div class="scrolltab-nav">
        <a href="javascript:;" class="scrolltab-item">
          <div class="scrolltab-title">为你推荐</div>
        </a>
        <router-link
          :to="{ name: 'classify', query: { category: item.name } }"
          class="scrolltab-item"
          v-for="(item, index) in classify"
          :key="index"
        >
          <div class="scrolltab-title">{{ item.name }}</div>
        </router-link>
      </div>
      <div class="scrolltab-content bookname">
        <router-link
          v-for="(item, index) in book"
          :key="index"
          :to="{ name: 'details', query: { id: item.id } }"
        >
          <img :src="item.coverImg" alt="" v-lazy="item.coverImg" />
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { categories } from "../../services/books";
import { loadBooks } from "../../services/books";
export default {
  data() {
    return {
      list: {},
      classify: [],
      books: {},
      book: [],
    };
  },
  methods: {
    bookfilter() {
      this.book = this.books.books.filter(
        (v) => v.category.name == this.$route.query.category
      );
    },
  },
  async created() {
    (this.list = await categories()), (this.classify = this.list.categories);
    console.log(this.$route);
    this.books = await loadBooks({ per: 2000 });
    console.log(this.books.books);
    this.bookfilter();
    console.log(this.book);
  },
  watch: {
    $route() {
      this.bookfilter();
    },
  },
};
</script>

<style scoped>
html,
body {
  color: #333;
  margin: 0;
  height: 100%;
  font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, Verdana,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000;
}

a,
label,
button,
input,
select {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
  border: 0;
}

body {
  background: #f2f2f2;
  color: #666;
}

html,
body,
div,
dl,
dt,
dd,
ol,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
button,
fieldset,
form,
input,
legend,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #08acee;
}

button {
  outline: 0;
}

img {
  border: 0;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
  outline: none;
}

li {
  list-style: none;
}

a {
  color: #666;
}

.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

.aui-flexView {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.aui-scrollView {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-top: 0;
}

.aui-navBar {
  height: 44px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1002;
  background: #f9f9f9;
}

.aui-navBar:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #f9f9f9;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.aui-navBar-item {
  height: 44px;
  min-width: 25%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 25%;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  padding: 0 0.9rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  color: #a0a0a0;
  position: relative;
}

.aui-navBar-item:first-child {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  margin-right: -25%;
  font-size: 0.9rem;
  font-weight: bold;
}

.aui-navBar-item:last-child {
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.aui-center {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 44px;
  width: 60%;
  margin-left: 25%;
}

.aui-center-title {
  text-align: left;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  color: #444444;
}

.m-scrolltab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.scrolltab-nav {
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  z-index: 1;
}

.scrolltab-item {
  height: 3rem;
  position: relative;
  z-index: 1;
  width: 90px;
  display: block;
  line-height: 3rem;
  text-align: center;
}

.scrolltab-item:before {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid #ffffff;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.scrolltab-item.crt:before {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid #f2f2f2;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.scrolltab-title {
  font-size: 0.8rem;
  color: #666;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.scrolltab-content {
  height: 100%;
  background-color: #f2f2f2;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.4rem 0.8rem 0.8rem 0.8rem;
  position: relative;
  display: flex;
}

.scrolltab-item.crt {
  background-color: #f2f2f2;
  position: relative;
}

.scrolltab-item.crt .scrolltab-title {
  color: #fe7923;
}

.scrolltab-item.crt:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0.8rem;
  left: 0;
  width: 0.2rem;
  height: 1.5rem;
  background-image: -webkit-gradient(
    linear,
    bottom top,
    right top,
    from(#f5dcbb),
    to(#fe7923)
  );
  background-image: -webkit-linear-gradient(bottom, #f5dcbb, #fe7923);
  background-image: -moz-linear-gradient(bottom, #f5dcbb, #fe7923);
  background-image: linear-gradient(to bottom, #f5dcbb, #fe7923);
  background-color: #fe7923;
  border-radius: 0.5rem;
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

.active {
  color: red !important;
}
</style>
