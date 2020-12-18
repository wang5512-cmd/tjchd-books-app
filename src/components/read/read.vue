<template>
  <div id="readCover" class="page-read-cover" ontouchmove="return false;">
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <div class="read-cover-v">
      <i class="read-cover-cor"></i><i class="read-cover-cor"></i
      ><i class="read-cover-cor"></i><i class="read-cover-cor"></i>

      <div class="read-cover-info">
        <figure class="read-cover-figure">
          <img :src="book.coverImg" class="read-cover-img" :alt="book.title" />
        </figure>
        <h2 class="ell">{{ book.title }}</h2>
        <p class="read-gray">{{ book.author }} 著</p>

        <table class="read-cover-data">
          <tr>
            <td width="30%">
              <strong>{{ book.category.name }}</strong>
              <h6 class="read-gray">类型</h6>
            </td>
            <td width="30%">
              <strong>2018.08.04</strong>
              <h6 class="read-gray">上架</h6>
            </td>
            <td width="30%">
              <strong>139万</strong>

              <a href="https://m.qidian.com/book/1023628705/0">
                <h6 class="read-gray">完结（字）</h6>
              </a>
            </td>
          </tr>
        </table>
      </div>

      <div class="read-cover-copy">
        <p class="ell">本书由起点中文网进行电子制作与发行</p>

        <p class="read-gray">&copy;版权所有 侵权必究</p>
      </div>
    </div>
    <div
      class="read-cover-h"
      role="button"
      title="我从野怪开始进化, 飞天熊 著, 轻触关闭书封，开始阅读，阅读时候，点击屏幕中间，可呼起操作栏"
    ></div>
  </div>
</template>

<script>
import { loadProductDetail } from "../../services/books";
import Loading from "../loading/loading";
export default {
  data() {
    return {
      book: { category: { name: "" } },
      isLoading: true,
    };
  },
  components: { Loading },
  async created() {
    this.book = await loadProductDetail(this.$route.query.id);
    this.isLoading = false;
    console.log(this.book);
  },
  watch: {
    $route() {
      loadProductDetail(this.$route.query.id);
    },
  },
};
</script>

<style>
#readCover {
  text-align: center;
}
/* .read-cover-figure {
  text-align: center;
} */

/* .ell {
  text-align: center;
} */
.read-cover-figure img {
  width: 10rem;
}
.read-cover-data {
  margin: 0 auto;
  margin-top: 2rem;
}
.read-cover-copy p {
  margin-top: 6.5rem;
}
.read-cover-copy p:nth-of-type(2) {
  margin-top: 0;
}
</style>
