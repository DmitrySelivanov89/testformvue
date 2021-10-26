<template>
  <div class="row">
    <div v-for="product in products" :key="product.id" class="col-6">
      <div class="row-card card">
        <img alt="Название" class="row-card__image-top card-img-top" src="https://via.placeholder.com/200x200"/>
        <div class="row-card__body card-body">
          <h5 class="row-card__title card-title">Детский трюковой самокат Razor Thunder</h5>
          <h6 class="row-card__subtitle mb-2 text-muted">4 990 ₽</h6>
          <a class="row-card__link card-link" href="#" style="color: blue">Синий</a>
          <a class="row-card__link card-link" href="#" style="color: green">Зелёный</a>
        </div>
      </div>
    </div>
  </div>
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
      product: {
        id: 0,
        title: '',
        image: '',
        colors: []
      },
      products: [],
      accessKey: ''
    }
  },

  created() {
    // const instance = axios.create({
    //   baseURL: 'https://vue-study.skillbox.cc/',
    //   timeout: 1000,
    //   headers: {'Header': 'foobar'}
    // });

    axios.get("https://vue-study.skillbox.cc/api/users/accessKey").then((resp) => {
      this.accessKey = resp.data
      console.log(resp);
    });

    axios.get("https://vue-study.skillbox.cc/api/products/3", {
      params: {
        category: 3
      },
    }).then((response) => {
      this.products = response.data
      console.log(response);
    });

    // axios.post("https://vue-study.skillbox.cc/api/orders", {
    //   data: {}
    // }).then()
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

<style scoped></style>
