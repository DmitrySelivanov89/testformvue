<template>
<!--  <ProductCards/>-->
  <product-form/>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
// import ProductCards from './components/ProductCards.vue'
import ProductForm from './components/ProductForm.vue'


/**
 * Метод для получение товаров из категории
 * @todo Реализовать получение товаров
 * @param {string | number} category id/slug категории
 */

/**
 * Объект продукта
 * @typedef Product
 * @property {number} id айди
 * @property {string} title заголовок
 * @property {string} [image] ссылка на картинку
 * @property {Array <Object>} [colors] возможные цвета
 */

export default {
  name: "App",

  components: {
    // ProductCards
    ProductForm
  },
}
</script>
