<template>
  <section class="container mb-5">
    <div class="row">
      <div v-for="product in productsItems" :key="product.id" class="col-6">
        <div class="row-card card">
          <img :src="product.image.file.url" alt="Название" class="row-card-image__top card-img-top"/>
          <div class="row-card-body card-body">
            <h5 class="row-card-body__title card-title">{{ product.title }}</h5>
            <span class="row-card-body__subtitle card-subtitle mb-2 text-muted">{{ product.price }}</span>
            <a v-for="color in product.colors" :key="color.id" :style="{color:color.code}"
               class="row-card-body__link card-link"
               href="#">{{ color.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * Метод для получение товаров из категории
 * @todo Реализовать получение товаров
 * @param {string | number} category id/slug категории
 */

/**
 * Объект продукта
 * @typedef {Object} Product
 * @property {number} id айди
 * @property {string} title заголовок
 * @property {string} [image] ссылка на картинку
 * @property {Array <Object>} [colors] возможные цвета
 */

import axios from "axios";

export default {
  data() {
    return {
      products: [],
    }
  },

  created() {

    axios.get("https://vue-study.skillbox.cc/api/products?categoryId=3").then((response) => {
      this.products = response.data.items
    });
  },

  computed: {
    /**
     * @returns {Array <Product> | null}
     */
    productsItems() {
      return this.products;
    },
  },
};
</script>

<style scoped>
.row-card-body__subtitle {
  display: block;
}
</style>
