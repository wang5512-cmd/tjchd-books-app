<template>
  <div>
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <div class="header">
      <h1>{{ book.title }}</h1>
    </div>
    <div class="main">
      <div class="path">
        <a href="https://m.yq-888.com">首页</a> &gt;&gt;
        <a href="/wapbook/126658.html">{{ book.title }}</a> &gt;&gt;
        <a href="/wapbook/126658/">{{ book.title }}最新章节</a>(目录列表)
      </div>
      <div class="detail">
        <img :src="book.coverImg" :alt="book.title" />
        <p class="name">
          <strong>{{ book.title }}</strong>
        </p>
        <p class="author">
          作者：<a href="/author/风千铃/">{{ book.author }}</a
          ><i class="dashe">大神</i>
        </p>
        <p>
          <a
            href="/xiaoshuo2/"
            class="layui-btn layui-btn-xs layui-btn-radius"
            >{{ book.category.name }}</a
          ><span
            class="layui-btn layui-btn-xs layui-btn-radius layui-btn-normal"
            >完结</span
          >
          <span class="layui-btn layui-btn-xs layui-bg-red">139 万字</span>
        </p>
      </div>
      <ul class="action">
        <li>
          <router-link :to="{ name: 'details', query: { id: book.id } }"
            >返回书页</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'read', query: { id: book.id } }"
            >开始阅读</router-link
          >
        </li>
        <li><a id="vote">推荐</a></li>
        <li><a href="/txt/126658/">TXT下载</a></li>
      </ul>
      <div class="caption">
        <span
          >【<a @click="add">下一页</a>】 【<a @click="last">尾页</a>】 </span
        >【{{ book.title }}】&nbsp;共 {{ chapter.totalCount }} 章
      </div>
      <ul class="read">
        <li v-for="(item, index) in chapter.chapters" :key="index">
          <router-link :to="{ name: 'read', query: { id: book.id } }">{{
            item.title
          }}</router-link>
        </li>
      </ul>
      <div class="pagelist">
        <span @click="jian">上一页</span
        ><span class="pagenum"
          ><em>第1 - 20章</em
          ><select onchange="location.href=this.value">
            <option value="/wapbook/126658_1/" selected>第1 - 20章</option>
            <option value="/wapbook/126658_2/">第21 - 40章</option>
            <option value="/wapbook/126658_3/">第41 - 60章</option>
            <option value="/wapbook/126658_4/">第61 - 80章</option>
            <option value="/wapbook/126658_5/">第81 - 100章</option>
            <option value="/wapbook/126658_6/">第101 - 120章</option>
            <option value="/wapbook/126658_7/">第121 - 140章</option>
            <option value="/wapbook/126658_8/">第141 - 160章</option>
            <option value="/wapbook/126658_9/">第161 - 180章</option>
          </select></span
        ><a @click="add">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
import { loadProductDetail } from "../../services/books";
import { chapters } from "../../services/books";
import Loading from "../loading/loading";
export default {
  data() {
    return {
      chapter: {},
      num: 1,
      book: { category: { name: "" }, title: "", coverImg: "" },
      isLoading: true,
    };
  },
  components: { Loading },
  methods: {
    async mulu() {
      this.chapter = await chapters({
        book: this.$route.query.book,
        per: 20,
        page: this.num,
      });
      console.log(this.chapter);
      this.isLoading = false;
    },
    async xq() {
      //根据id获取小说详情

      this.book = await loadProductDetail(this.$route.query.book);
      console.log(this.book);
    },
    add() {
      this.num++, this.mulu();
    },
    last() {
      (this.num = this.chapter.pages), this.mulu();
    },
    jian() {
      this.num--, this.mulu();
    },
  },
  created() {
    this.mulu();
    this.xq();

    // console.log(this.$route.query.book);
    // console.log(this.book);
  },
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
}
a {
  color: #000;
}
.hide {
  display: none;
}
.left {
  float: left !important;
}
.right {
  float: right !important;
}
.i_home:after {
  content: "\e68e";
}
.i_back:after {
  content: "\e603";
}
.i_menu:after {
  content: "\e65f";
}
.i_search:after {
  content: "\e615";
}
.i_history:after {
  content: "\e705";
}
.i_cancel:after {
  content: "\1007";
}
.i_more:after {
  content: "\e602";
}
.i_author:after {
  content: "\e606";
}
.i_sort:after {
  content: "\e715";
}
.i_top:after {
  content: "\e735";
}
.i_visit:after {
  content: "\e756";
}
.i_vote:after {
  content: "\e6c6";
}
.i_mark:after {
  content: "\e600";
}
.i_size:after {
  content: "\e642";
}
.i_time:after {
  content: "\e60e";
}
.i_set:after {
  content: "\e614";
}
.i_book:after {
  content: "\e705";
}
.i_read:after {
  content: "\e60a";
}
.i_prev:after {
  content: "\e65a";
}
.i_next:after {
  content: "\e65b";
}
.i_down:after {
  content: "\e64c";
}
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  padding: 0 5px;
  height: 45px;
  background-color: #4fc08d;
  text-align: center;
}
.header i {
  float: right;
  display: block;
  width: 45px;
  height: 45px;
  color: #fff;
  font-size: 25px;
  line-height: 48px;
}
.header i.i_back {
  float: left;
}
.header a {
  display: inline-block;
}
.header a.logo {
  float: left;
  height: 45px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 46px;
}
.header h1,
.header p {
  overflow: hidden;
  height: 45px;
  color: #fff;
  font-size: 18px;
  line-height: 46px;
  margin: 0px;
}
.header ul {
  display: inline-block;
  overflow: hidden;
  margin-top: 8px;
  border-radius: 45px;
  background-color: #fff;
}

.header li {
  display: inline-block;
  padding: 1px;
}
.header li a {
  display: inline-block;
  padding: 2px 10px;
  color: #333;
  font-size: 17px;
}
.header li.now a {
  border-radius: 45px;
  background-color: #e43770;
  color: #fff;
}
div.menu {
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
}
div.menu a {
  display: block;
  padding: 10px 15px;
  color: #00aded;
  font-size: 14px;
}
div.menu a + a {
  border-top: 1px solid #ddd;
}
.footer {
  margin: 10px 10px 0;
  padding: 10px;
  border-top: 1px solid #ccc;
  text-align: center;
}
.footer p {
  color: #666;
  line-height: 25px;
}
.footer a {
  padding: 0 3px;
  color: #999;
}
.nav {
  position: fixed;
  top: 45px;
  right: 0;
  left: 0;
  z-index: 9999;
  height: 35px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  text-align: center;
}
.nav li {
  display: inline-block;
  width: 20%;
  height: 35px;
}
.nav li a {
  display: block;
  height: 34px;
  color: #666;
  font-size: 16px;
  line-height: 35px;
}
.nav li.now a {
  border-bottom: 2px solid #e43770;
  color: #e43770;
}
.main {
  padding-top: 45px;
}
.nav + .main {
  padding-top: 81px;
}
.account {
  margin: 15px;
}
.search {
  display: -webkit-flex;
  display: flex;
  padding: 10px 10px 0;
  height: 35px;
}
.search span {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  padding: 0 45px;
  height: 35px;
  border-radius: 35px;
  background-color: #fff;
  line-height: 35px;
  flex-grow: 1;
}
.search span i {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 38px;
  height: 35px;
  color: #ccc;
  text-align: center;
  font-size: 20px;
  line-height: 38px;
}
.search span i:first-child {
  right: auto;
  left: 0;
  color: #aaa;
}
.search span input {
  width: 100%;
  height: 25px;
  border: 0 none;
  font-size: 15px;
  line-height: 25px;
}
.search button {
  padding: 0 12px;
  height: 35px;
  border-radius: 4px;
  background-color: #e43770;
  font-size: 17px;
  line-height: 35px;
}
.search.in {
  padding: 10px;
  background-color: #4fc2f1;
}
.search.in button {
  background-color: #4fc2f1;
}
.search + .layui-btn-container {
  padding: 11px 0 0 11px;
  background-color: #fff;
}
.path {
  padding: 6px 10px;
}
.path a {
  padding: 5px;
  color: #666;
}
.caption {
  margin-top: 10px;
  padding: 6px;
  border: 1px solid #cacaca;
  background-color: #e1eced;
  color: #8f8f8f;
  font-weight: 700;
}
.caption span {
  float: right;
}
.caption a {
  color: #129151;
}
.search + .caption {
  padding-bottom: 0;
  font-size: 15px;
}
.last {
  padding: 12px 15px;
  border-top: 1px solid #e5e5e5;
  background-color: #fff;
  color: #999;
  font-size: 15px;
}
.last p {
  float: left;
}
.last a {
  display: block;
  color: #00aeef;
}
.library {
  padding: 10px 10px 5px;
  background-color: #f4f4f4;
  -webkit-user-select: none;
  user-select: none;
}
.library ul {
  display: none;
}
.library ul.filter {
  display: block;
}
.library ul.filter li {
  cursor: pointer;
}
.library ul.filter li i:after {
  content: "\e61a";
}
.library ul.filter li.active i:after {
  content: "\e619";
}
.library ul li {
  display: inline-block;
  overflow: hidden;
  width: 32%;
  height: 30px;
  color: #333;
  text-align: center;
  line-height: 30px;
}
.library li a {
  padding: 4px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  color: #666;
}
.library li.on a {
  border-color: #4fc2f1;
  background-color: #4fc2f1;
  color: #fff;
}
.library li i {
  color: #999;
  font-size: 12px;
}
.sort {
  margin: 5px;
}
.sort li {
  display: inline-block;
  width: 50%;
}
.sort li:first-child {
  width: 100%;
}
.sort li i {
  position: relative;
  top: 1.5px;
  float: right;
  display: block;
  width: 50px;
  border-left: 1px solid #ddd;
  color: #ff6000;
  text-align: right;
  font-style: normal;
}
.sort li a {
  display: block;
  margin: 5px;
  padding: 12px;
  border: 1px solid #ddd;
  background-color: #fcfcfc;
  color: #666;
}
.sort li a:active,
.sort li a:hover {
  background-color: #f4f4f4;
}
.top li {
  margin: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
}
.top li p {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.top li a {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 0;
  width: 25%;
  color: #ff5722;
  text-align: center;
}
.top li a:first-child {
  padding-left: 10px;
  width: 100%;
  color: #666;
  text-align: left;
}
.top li a + a {
  border-left: 1px solid #ddd;
}
.top li a:active,
.top li a:hover {
  background-color: #f4f4f4;
}
.top li a > i {
  float: right;
  margin-right: 10px;
}
.box {
  margin: 10px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
}
.box .title {
  position: relative;
  overflow: hidden;
  padding: 10px 20px 5px 30px;
  height: 20px;
  color: #666;
  font-size: 16px;
  line-height: 20px;
}
.box .title:before {
  position: absolute;
  top: 10px;
  left: 15px;
  display: block;
  width: 1px;
  height: 16px;
  border: 2px solid #52c3f2;
  border-radius: 2px;
  background-color: #52c3f2;
  content: " ";
}
.box .title a {
  position: relative;
  display: block;
  color: #666;
}
.box .title a:after {
  position: absolute;
  top: 4px;
  right: 1px;
  display: block;
  width: 9px;
  height: 9px;
  border-top: 3px solid #52c3f2;
  border-right: 3px solid #52c3f2;
  content: " ";
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.cover {
  overflow-x: auto;
  margin: 0 10px;
  white-space: nowrap;
}
.cover li {
  display: inline-block;
  overflow: hidden;
  padding: 5px;
  width: 106px;
  height: 200px;
}
.cover li a {
  color: #888;
}
.cover li img {
  padding: 1px;
  width: 100px;
  height: 150px;
  border: 1px solid #e5e5e5;
}
.cover li img:active,
.cover li img:hover {
  padding: 0;
  border: 2px solid #e43770;
}
.cover li p {
  overflow: hidden;
  height: 25px;
  color: #333;
  font-size: 15px;
  line-height: 25px;
}
.vote {
  padding: 5px 10px;
}
.vote span.layui-badge {
  float: left;
  margin: 5px 8px 0 4px;
}
.vote img {
  float: left;
  margin-right: 15px;
  margin-right: 10px;
  padding: 2px;
  width: 100px;
  height: 150px;
  border: 1px solid #e5e5e5;
}
.vote img:active,
.vote img:hover {
  padding: 1px;
  border: 2px solid #e43770;
}
.vote p {
  overflow: hidden;
}
.vote p.bookname {
  height: 35px;
  font-size: 17px;
  line-height: 35px;
}
.vote p.author {
  height: 25px;
  font-size: 15px;
  line-height: 25px;
}
.vote p.intro {
  margin: 10px 0 15px;
  height: 80px;
  font-size: 14px;
  line-height: 20px;
}
.vote p span.data {
  float: right;
  margin-right: 5px;
}
.vlist {
  padding: 0 10px;
}
.vlist li {
  overflow: hidden;
  border-top: 1px solid #eee;
  color: #666;
}
.vlist li a {
  position: relative;
  display: block;
  overflow: hidden;
  padding: 10px 5px;
  height: 20px;
  border-left: 5px solid #fff;
}
.vlist li span {
  position: absolute;
  top: 11px;
  left: 5px;
  color: #0078ad;
}
.vlist li.now {
  background-color: #f7fdff;
}
.vlist li.now a {
  color: #e43770;
  border-left-color: #e43770;
}
.vlist li.now span {
  float: right;
  color: #009688;
}
.vlist p {
  overflow: hidden;
  margin-left: 50px;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
}
.vlist p.bookname {
  float: left;
  margin-left: 26px;
}
.vlist p.author {
  float: right;
  font-size: 14px;
}
.title + .vlist li:first-child {
  border-top: 0 none;
}
.alist {
  padding: 10px;
  background-color: #fff;
}
.alist li + li {
  border-top: 1px solid #eee;
}
.alist li a {
  display: block;
  overflow: hidden;
  padding: 10px;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
}
.ilist {
  padding: 8px 5px;
}
.ilist li {
  display: inline-block;
  padding: 8px 0;
  width: 32%;
  text-align: center;
}
.ilist li img {
  width: 100px;
  height: 150px;
  border: 1px solid #ccc;
}
.ilist li p {
  overflow: hidden;
  padding: 0 5px;
  height: 30px;
  color: #555;
  font-size: 16px;
  line-height: 30px;
}
.ilist li i.layui-icon {
  position: relative;
  display: none;
}
.ilist.edit li i.layui-icon {
  display: inline;
}
.ilist li i.layui-icon:before {
  position: absolute;
  top: -80px;
  right: -15px;
  z-index: 999;
  color: #727272;
  content: "\1007";
  font-size: 32px;
}
.ilist li i.layui-icon:active:before,
.ilist li i.layui-icon:hover:before {
  color: #dd5a4c;
}
.ilist li i.layui-icon:after {
  position: absolute;
  top: -72px;
  right: -7px;
  display: block;
  width: 15px;
  height: 15px;
  background-color: #fff;
  content: " ";
}
.clear {
  display: none;
  margin: 0 10px;
}
.list {
  padding: 0 15px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
}
.list li {
  padding: 10px 5px;
}
.list li + li {
  border-top: 1px solid #e5e5e5;
}
.list li img {
  float: left;
  margin: 5px 10px 0 0;
  width: 86px;
  height: 120px;
  border: 1px solid #e5e5e5;
}
.list li p {
  overflow: hidden;
  height: 25px;
  line-height: 25px;
}
.list li p i {
  color: #ff6000;
  font-style: normal;
}
.list li p.data {
  height: 20px;
  color: #888;
  line-height: 20px;
}
.list li p.chapter {
  height: 25px;
  line-height: 25px;
}
.list li p.chapter a {
  color: #333;
}
.list li p.author + p.chapter {
  margin-top: 10px;
}
.list li p.intro {
  height: 40px;
  line-height: 20px;
}
.list li p.data + p.intro {
  height: 60px;
  line-height: 20px;
}
.list li span.data {
  float: right;
  color: #ff6000;
  font-size: 14px;
}
.list li span.data i {
  margin-right: 2px;
  color: #999;
  vertical-align: -1px;
}
.list a.mark_read {
  float: right;
  display: block;
}
.list a.mark_del {
  float: right;
  display: none;
}
.list.edit a.mark_read {
  display: none;
}
.list.edit a.mark_del {
  display: block;
}
.list.lite {
  padding: 0 10px;
}
.list.lite li {
  padding: 5px;
  border-top: 0 none;
}
.load-more {
  margin: 10px;
}
.detail {
  padding: 10px;
  height: 150px;
  background-color: #e9e7ef;
}
.detail img {
  float: left;
  margin: 0 15px 0 5px;
  margin-right: 10px;
  padding: 1px;
  width: 108px;
  height: 150px;
  border: 1px solid #e5e5e5;
}
.detail p {
  overflow: hidden;
  height: 30px;
  color: #666;
  line-height: 30px;
}
.detail p.name {
  height: 32px;
  font-size: 20px;
  line-height: 32px;
}
.detail p.name strong {
  color: #00f;
}
.detail p.author {
  height: 32px;
  color: #444;
  font-size: 16px;
  line-height: 32px;
}
.detail p.author i {
  margin-right: 5px;
  color: #ff5722;
  vertical-align: -1px;
  font-weight: 700;
}
.action {
  padding: 5px 10px 10px;
  background-color: #fff;
  text-align: center;
}
.action li {
  display: inline-block;
  width: 23.8%;
}
.action li a {
  display: block;
  margin: 5px;
  padding: 2px;
  border: 1px solid #ff8834;
  border-radius: 3px;
  background-color: #fff;
  color: #ff8834;
  font-size: 13.8px;
}
.action li:first-child a {
  background-color: #ff8834;
  color: #fff;
}
.title + .intro {
  padding: 5px 15px 0;
  color: #666;
  text-indent: 2em;
  font-size: 12px;
  line-height: 22px;
  line-height: 180%;
}
.update {
  margin: 0 10px;
  padding: 10px 5px;
  border-top: 1px solid #e5e5e5;
  color: #666;
  font-size: 15px;
}
.update a {
  color: #ff6000;
}
.bookname {
  color: #333;
  font-size: 16px;
}
.author {
  color: #666;
  font-size: 14px;
}
.intro {
  color: #999;
  font-size: 13px;
}
.intro p + p {
  margin-top: 2px;
}
.intro a {
  color: #0078ad;
}
.read {
  background-color: #fff;
}
.read li {
  border-top: 1px solid #e5e5e5;
}
.read li a {
  display: block;
  overflow: hidden;
  padding: 0 12px;
  height: 45px;
  border-left: 5px solid #fff;
  font-size: 15px;
  line-height: 45px;
}
.read li.now {
  background-color: #f7fdff;
}
.read li.now a {
  color: #e43770;
  border-left-color: #e43770;
}
.read li.now span {
  float: right;
  color: #009688;
}
.pagelist {
  margin: 10px 0;
  text-align: center;
  line-height: 30px;
}
.pagelist a,
.pagelist span {
  display: inline-block;
  margin: 2px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  color: #666;
  font-size: 15px;
  -webkit-user-select: none;
  user-select: none;
}
.pagelist em {
  padding-right: 10px;
  color: #dd5114;
  font-style: normal;
}
.pagelist a,
.pagelist b {
  color: #dd5114;
}
.pagelist a:active,
.pagenum:active {
  border-color: #dd5114;
}
.pagenum {
  position: relative;
  width: 118px;
}
.pagenum:after {
  position: absolute;
  top: 12px;
  right: 5px;
  display: block;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top: 7px solid #aaa;
  content: " ";
}
.pagenum select {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 140px;
  opacity: 0;
  filter: alpha(opacity=0);
}
#chapter {
  height: auto;
  min-height: 100%;
  -webkit-user-select: none;
  user-select: none;
}
.headline {
  margin: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}
.content p {
  margin: 10px;
  text-indent: 2em;
  font-size: 18px;
  line-height: 180%;
}
.pager {
  padding: 2px;
  text-align: center;
}
.pager a {
  display: inline-block;
  margin-right: 3px;
  width: 20%;
  height: 30px;
  border: 1px solid #ece6da;
  background: #f4f0e9;
  color: #666;
  line-height: 30px;
}
.shadow {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
}
#chapter .header {
  top: -45px;
  overflow: hidden;
  background-color: #222;
  color: #fff;
  -webkit-transition: top 0.2s;
  transition: top 0.2s;
}
#chapter .header p {
  text-align: left;
}
.tabbar {
  position: fixed;
  right: 0;
  bottom: -100px;
  left: 0;
  height: 100px;
  background-color: #222;
  color: #f4f4f4;
  text-align: center;
  -webkit-transition: bottom 0.2s;
  transition: bottom 0.2s;
}
.tabbar li {
  display: inline-block;
  width: 20%;
  height: 50px;
  font-size: 12px;
  line-height: 20px;
}
.tabbar li.now,
.tabbar li:active,
.tabbar li:hover {
  background-color: #333;
}
.tabbar li i {
  display: block;
  height: 25px;
  font-size: 17px;
  line-height: 33px;
}
.setting {
  position: fixed;
  right: 0;
  bottom: 100px;
  left: 0;
  display: none;
  height: 200px;
  background-color: #333;
  color: #f4f4f4;
  text-align: center;
}
.setting ul {
  position: relative;
  margin: 10px;
  padding: 0 0 0 50px;
}
.setting ul:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
.size:before {
  content: "";
}
.size li {
  display: inline-block;
  margin: 10px 0;
  width: 50%;
  line-height: 28px;
}
.size li:before {
  display: block;
  overflow: hidden;
  margin: 0 10px;
  border: 1px solid #fff;
  border-radius: 30px;
  content: "A+";
}
.size li:first-child:before {
  content: "A-";
}
.size li.disabled:before {
  border-color: #999;
  color: #999;
}
.theme:before {
  content: "";
}
.theme li {
  float: left;
  display: inline;
  margin: 5px 0;
  line-height: 36px;
}
.theme li:before {
  display: inline-block;
  overflow: hidden;
  margin: 0 10px;
  padding: 1px;
  width: 36px;
  border: 1px solid #fff;
  border-radius: 50px;
  line-height: 36px;
}
.theme li.now:before {
  padding: 0;
  border: 2px solid #ff6000;
}
.theme li:nth-child(1):before {
  background-color: #ecd9ac;
  color: #3c3c3c;
  content: "";
}
.theme li:nth-child(2):before {
  background-color: #32373b;
  color: #999;
  content: "";
}
.theme li:nth-child(3):before {
  background-color: #f2e7cc;
  color: #643525;
  content: "";
}
.theme li:nth-child(4):before {
  background-color: #fbf6ec;
  color: #c71585;
  content: "";
}
.theme li:nth-child(5):before {
  background-color: #dcecd2;
  color: #000;
  content: "";
}
.theme li:nth-child(6):before {
  background-color: #bbe9f0;
  color: #2c3838;
  content: "";
}
.theme li:nth-child(7):before {
  background-color: #e6e6e6;
  color: #333;
  content: "";
}
.style_0 {
  background-color: #fbf6ec;
  color: #3c3c3c;
}
.style_1 {
  background-color: #32373b;
  color: #999;
}
.style_2 {
  background-color: #f2e7cc;
  color: #643525;
}
.style_3 {
  background-color: #fbf6ec;
  color: #c71585;
}
.style_4 {
  background-color: #cce8cf;
  color: #555d54;
}
.style_5 {
  background-color: #bbe9f0;
  color: #2c3838;
}
.style_6 {
  background-color: #e6e6e6;
  color: #333;
}
#help {
  background-color: rgba(0, 0, 0, 0.5);
}
#help li {
  position: absolute;
  color: #fff;
  text-align: center;
  font-size: 16px;
}
#help li:before {
  display: inline-block;
  height: 100%;
  content: " ";
  vertical-align: middle;
}
.help-top {
  top: 0;
  right: 35%;
  left: 35%;
  height: 30%;
  border-right: 2px dashed #fff;
}
.help-bottom {
  right: 35%;
  bottom: 0;
  left: 35%;
  height: 30%;
  border-left: 2px dashed #fff;
}
.help-left {
  top: 30%;
  bottom: 30%;
  left: 0;
  width: 35%;
}
.help-right {
  top: 30%;
  right: 0;
  bottom: 30%;
  width: 35%;
}
.help-center {
  top: 30%;
  right: 35%;
  bottom: 30%;
  left: 35%;
  border: 2px dashed #fff;
}
.new {
  margin-top: 5px;
  border-top: 1px solid #e5e5e5;
  color: #666;
}
.new a {
  color: #ff6000;
}
</style>
