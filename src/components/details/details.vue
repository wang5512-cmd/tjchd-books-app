<template>
  <div class="aui-scrollView">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <router-link to="/handpick"><i class="el-icon-arrow-left"></i></router-link>
    <div class="aui-flex aui-flex-one">
      <div class="aui-book-img">
        <img :src="book.coverImg" alt="" />
      </div>
      <div class="aui-flex-box">
        <h3>
          <span>{{ book.title }}</span
          ><em>已完结</em> 139万字
        </h3>
        <button>出版小说</button>
      </div>
    </div>
    <div class="aui-palace aui-palace-one">
      <a href="javascript:;" class="aui-palace-grid">
        <div class="aui-palace-grid-text">
          <h1>8988</h1>
          <h2>人气值</h2>
        </div>
      </a>
      <a href="javascript:;" class="aui-palace-grid">
        <div class="aui-palace-grid-text">
          <h1>9.8 <em>分</em></h1>
          <h2>评分</h2>
        </div>
      </a>
      <a href="javascript:;" class="aui-palace-grid">
        <div class="aui-palace-grid-text">
          <h1>1088</h1>
          <h2>在读人数</h2>
        </div>
      </a>
    </div>
    <div class="aui-flex b-line">
      <div class="aui-flex-box">
        <p>{{ book.descriptions }}</p>
        <span>
          <em>热血</em>
          <em>神奇</em>
        </span>
      </div>
    </div>
    <div class="aui-flex">
      <router-link :to="{ name: 'catalog', query: { book: book.id } }">
        <div class="aui-flex-box">
          <h4>
            目录 <em>完结共{{ chapter.totalCount }}章</em>
          </h4>
        </div>
        <div class="aui-arrow">
          <span>完结</span>
        </div>
      </router-link>
    </div>
    <div class="divHeight"></div>
    <div class="aui-flex" style="padding-bottom: 0">
      <div class="aui-flex-box">
        <h5>和这本书内容相似的书</h5>
      </div>
    </div>
    <div class="aui-flex aui-flex-two" style="padding-bottom: 0">
      <div class="aui-flex-box">
        <div class="aui-flex">
          <div class="aui-book-sml">
            <img
              src="https://bookcover.yuewen.com/qdbimg/349573/1017249858/180"
              alt=""
            />
          </div>
          <div class="aui-flex-box">
            <h1>大田园</h1>
            <h2>如莲如玉</h2>
            <h3>14.7万人气</h3>
            <button>完结</button>
          </div>
        </div>
        <div class="aui-book-text">
          <p>
            重生过去、畅想未来、梦幻现实，再塑传奇人生！燧石之珠,连接着远古空间...
          </p>
        </div>
      </div>
      <div class="aui-flex-box">
        <div class="aui-flex">
          <div class="aui-book-sml">
            <img
              src="https://bookcover.yuewen.com/qdbimg/349573/1023628705/180"
              alt=""
            />
          </div>
          <div class="aui-flex-box">
            <h1>我要做驸马</h1>
            <h2>北冥老鱼</h2>
            <h3>1.4万人气</h3>
            <button>连载</button>
          </div>
        </div>
        <div class="aui-book-text">
          <p>
            李节穿越成为大明宰相的孙子，还没等他高兴，却发现他这位祖父名叫李善长...
          </p>
        </div>
      </div>
    </div>
    <div class="aui-flex aui-flex-two">
      <div class="aui-flex-box">
        <div class="aui-flex">
          <div class="aui-book-sml">
            <img
              src="https://bookcover.yuewen.com/qdbimg/349573/1022866202/180"
              alt=""
            />
          </div>
          <div class="aui-flex-box">
            <h1>我以阴府镇阳间</h1>
            <h2>琴小江</h2>
            <h3>4.44万人气</h3>
            <button>连载</button>
          </div>
        </div>
        <div class="aui-book-text">
          <p>
            阴间初成，秩序混乱，有阳间大能随意进入阴间，带走亲友魂魄，更改生死簿，使其还阳。...
          </p>
        </div>
      </div>
      <div class="aui-flex-box">
        <div class="aui-flex">
          <div class="aui-book-sml">
            <img
              src="https://bookcover.yuewen.com/qdbimg/349573/1023524816/180"
              alt=""
            />
          </div>
          <div class="aui-flex-box">
            <h1>三国之谋伐</h1>
            <h2>玩蛇怪</h2>
            <h3>2.14万人气</h3>
            <button>连载</button>
          </div>
        </div>
        <div class="aui-book-text">
          <p>醒掌天下权，醉卧美人膝，五千年风华烟雨，是非成败转头空！...</p>
        </div>
      </div>
    </div>

    <footer class="aui-footer aui-footer-fixed">
      <div @click="enter" class="aui-tabBar-item">
        <span class="aui-tabBar-item-text">加入书架</span>
      </div>
      <router-link
        :to="{ name: 'read', query: { id: this.$route.query.id } }"
        class="aui-tabBar-item aui-tabBar-item-active"
      >
        <span class="aui-tabBar-item-text">免费阅读</span>
      </router-link>
      <a href="javascript:;" class="aui-tabBar-item">
        <span class="aui-tabBar-item-text">缓存</span>
      </a>
    </footer>
  </div>
</template>

<script>
import { loadProductDetail } from "../../services/books";
import { chapters } from "../../services/books";
import Loading from "../loading/loading";
export default {
  data() {
    return {
      book: {},
      chapter: {},
      fav: [],
      isLoading: true,
    };
  },
  methods: {
    //点击添加一个加入书架
    enter() {
      if (localStorage.getItem("fav")) {
        this.fav = JSON.parse(localStorage.getItem("fav"));
        if (JSON.stringify(this.fav).indexOf(JSON.stringify(this.book)) <= -1) {
          this.fav.push(this.book);
          localStorage.setItem("fav", JSON.stringify(this.fav));
        }
      } else {
        this.fav = [];
        this.fav.push(this.book);
        localStorage.setItem("fav", JSON.stringify(this.fav));
      }
      this.$router.push({ name: "index" });
    },
  },
  async created() {
    this.book = await loadProductDetail(this.$route.query.id);
    this.chapter = await chapters({ book: this.$route.query.id });
    this.isLoading = false;
    console.log(this.chapter);
    console.log(this.book);
  },
  watch: {
    $route() {
      loadProductDetail(this.$route.query.id);
      chapters({ book: this.$route.query.id });
    },
  },
  components: { Loading },
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
  width: 100%;
  height: auto;
  display: block;
  border: 0;
}

body {
  background: #fff;
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

.aui-scrollView a i {
  margin-top: 2rem;
  font-size: 2rem;
}
.divHeight {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.r-line {
  position: relative;
}

.r-line:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid #d9d9d9;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.b-line {
  position: relative;
}

.b-line:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.aui-arrow {
  position: relative;
  padding-right: 0.8rem;
}

.aui-arrow span {
  font-size: 0.8rem;
  color: #9b9b9b;
}

.aui-arrow:after {
  content: " ";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #848484;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 2px;
  border-radius: 1px;
}

.aui-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 15px;
  position: relative;
}
.aui-flex a {
  display: flex;
  align-content: space-around;
  width: 100%;
}
.aui-flex-box {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}

/* 蹇呰甯冨眬鏍峰紡css */

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
  padding-bottom: 55px;
}

.aui-navBar {
  height: 44px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 102;
  background: #fff;
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
  color: #808080;
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
  width: 50%;
  margin-left: 25%;
}

.aui-center-title {
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  color: #333;
}

.icon {
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  float: left;
  background-size: 20px;
  background-repeat: no-repeat;
}

.m-slider {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

.slider-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
  position: relative;
  z-index: 1;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.slider-item {
  width: 100%;
  height: 100%;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background: #f6f6f6;
}

.slider-item img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.slider-pagination {
  text-align: right;
  position: absolute;
  width: 100%;
  z-index: 2;
  right: 0;
  bottom: 10px;
  pointer-events: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.slider-pagination > .slider-pagination-item {
  margin: 0 0.25rem;
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.4);
}

.slider-pagination > .slider-pagination-item.slider-pagination-item-active {
  background-color: #fff;
  border-radius: 100%;
}

.aui-palace {
  padding: 0.5rem 0;
  position: relative;
  overflow: hidden;
}

.aui-palace-grid {
  position: relative;
  float: left;
  padding: 1px;
  width: 20%;
  box-sizing: border-box;
  margin: 5px 0;
}

.aui-palace-grid-icon {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}

.aui-palace-grid-icon img {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

.aui-palace-grid-text {
  display: block;
  text-align: center;
  color: #333;
  font-size: 0.85rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 0.2rem;
}

.aui-palace-grid-text h2 {
  font-size: 0.8rem;
  font-weight: normal;
  color: #666666;
}

.m-actionsheet {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #efeff4;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.mask-black {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 500;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
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
  z-index: 998;
}

.actionsheet-action {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.28rem;
  color: #555;
  height: 1rem;
  line-height: 1rem;
  background-color: #fff;
}

.m-actionsheet {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10005;
  background-color: #ffffff;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.actionsheet-toggle {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

.actionsheet-item {
  display: block;
  position: relative;
  font-size: 0.85rem;
  color: #555;
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
}

.actionsheet-item {
  display: block;
  position: relative;
  font-size: 0.85rem;
  color: #555;
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
}

.aui-coll-cancel a {
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  background: #f9f9f9;
  display: block;
  text-align: center;
  width: 100%;
}

.aui-coll-share-img {
  width: 38px;
  height: 38px;
  margin: 0 auto;
}

.aui-coll-share-img img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.aui-coll-share-box {
  position: relative;
  overflow: hidden;
  padding: 10px 0;
}

.aui-coll-cancel a {
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  background: #f9f9f9;
  display: block;
  text-align: center;
  width: 100%;
}

.aui-coll-share-item {
  position: relative;
  float: left;
  padding: 8px 10px;
  width: 33.333%;
  box-sizing: border-box;
  font-size: 12px;
  height: 85px;
}

.aui-rule {
  position: absolute;
  right: 0;
  top: 1rem;
  background: #54ca9a;
  border-radius: 50px 0 0 50px;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  color: #fff;
}

.aui-flex-one {
  width: 100%;
  background-size: cover;
  padding: 0 1rem;
}

.aui-book-img {
  width: 100px;
  margin-right: 1rem;
}
.aui-book-img img {
  border: 3px solid #fff;
  border-radius: 5px;
}

.aui-flex-box h1 {
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 1rem;
}

.aui-flex-box h2 {
  color: white;
  font-size: 0.85rem;
  font-weight: normal;
}

.aui-flex-box h3 {
  color: black;
  font-size: 0.85rem;
  font-weight: normal;
  margin: 0.3rem 0;
}

.aui-flex-box h3 em {
  font-style: normal;
  color: #fdc21c;
  margin-right: 1rem;
}

.aui-flex-box button {
  background: #1d89ec;
  border-radius: 22px;
  font-size: 0.8rem;
  padding: 0.1rem 0.9rem;
  color: #fff;
  border: none;
  margin-top: 0.3rem;
}

.aui-palace-one .aui-palace-grid {
  width: 33.333%;
}

.aui-palace-one .aui-palace-grid h1 {
  color: #000;
  font-size: 1.2rem;
  font-family: Arial;
}

.aui-palace-one .aui-palace-grid h1 em {
  font-style: normal;
  font-size: 0.75rem;
  font-weight: normal;
}

.aui-palace-one .aui-palace-grid h2 {
  color: #a2a2a2;
}
.aui-flex-box span {
  padding-top: 0.5rem;
  display: block;
}
.aui-flex-box span em {
  font-style: normal;
  color: #666666;
  background: #f1f1f1;
  border-radius: 22px;
  padding: 0.5rem 0.8rem;
  font-size: 0.75rem;
}

.aui-flex-box p {
  color: #666666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}
.aui-flex-box h4 {
  font-weight: normal;
}
.aui-flex-box h4 em {
  font-weight: normal;
  color: #333333;
  font-size: 0.8rem;
  font-style: normal;
}

.aui-flex-box h5 {
  color: #383e4a;
  font-size: 1rem;
  font-weight: normal;
}

.aui-book-sml {
  width: 60px;
  margin-right: 0.5rem;
}

.aui-flex-two .aui-flex {
  padding: 0;
}

.aui-flex-two .aui-flex-box h1 {
  color: #1a1a1a;
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
}

.aui-flex-two .aui-flex-box h2 {
  color: #666666;
  font-size: 0.75rem;
}

.aui-flex-two .aui-flex-box h3 {
  color: #a0a0a0;
  font-size: 0.75rem;
  margin: 0;
}
.aui-flex-two .aui-flex-box button {
  color: #b3b3b3;
  font-size: 0.7rem;
  border-radius: 3px;
  padding: 0 0.2rem;
  border: 1px solid #b3b3b3;
  background: none;
}

.aui-book-text p {
  margin-top: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  text-overflow: ellipsis;
  font-size: 0.8rem;
}

.aui-list-theme-box {
  padding: 10px;
  overflow: hidden;
  position: relative;
}

.aui-list-item {
  width: 31.333%;
  float: left;
  margin: 0 1% 0 1%;
  border-radius: 5px;
  background: #fff;
  display: block;
  overflow: hidden;
  position: relative;
}

.aui-list-theme-img {
  height: auto;
  width: 100%;
  position: relative;
}

.aui-list-theme-img img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.aui-list-theme-message {
  background: #fff;
  padding: 0.2rem 0 0 0;
}

.aui-list-theme-title {
  color: #333333;
  font-size: 0.92rem;
  margin: 0.3rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-weight: normal;
  text-overflow: ellipsis;
}

.aui-list-theme-message p {
  color: #6e6e6e;
  font-size: 0.8rem;
}

.aui-flex-three h1 {
  color: #353c46;
  font-size: 1rem;
}
.aui-flex-three h2 {
  color: #858b97;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.aui-flex-three p {
  text-align: center;
  color: #a1aab3;
  width: 100%;
  font-size: 0.7rem;
}

.aui-footer {
  width: 100%;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
}

.aui-footer:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #e4e4e4;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.aui-tabBar-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #828282;
  height: 2.6rem;
  line-height: 2.6rem;
}

.aui-tabBar-item-text {
  display: inline-block;
  font-size: 0.6rem;
  color: #1d89ec;
  padding-top: 2px;
}

.aui-tabBar-item-active .aui-tabBar-item-text {
  color: #fff;
}
.aui-tabBar-item-active {
  background: #1d89ec;
  width: 70%;
}

.aui-footer-fixed {
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 49;
}
</style>
