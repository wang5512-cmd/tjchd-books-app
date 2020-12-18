import { get } from "../utils/request";

/**
 * 加载小说列表
 */
export function loadBooks(params) {
  return get("/api/v1/books", params);
}

/**
 * 根据id加载详情
 * @param {*} id
 */
export function loadProductDetail(id) {
  return get("/api/v1/books/" + id);
}

/*
  获取小说分类
 */

export function categories(params){
  return get("/api/v1/book_categories", params);
}

/*
  获取章节
 */

export function chapters(params){
  return get("/api/v1/book_chapters", params);
}

/*
  获取章节详情
 */

export function chaptersDetail(id){
  return get("/api/v1/book_chapters/"+id);
}