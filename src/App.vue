<template>
  <div class="container">
    <product-form/>
    <product-cards/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import ProductForm from './components/ProductForm.vue'
import ProductCards from "@/components/ProductCards";

export default {
  name: "App",
  data() {
    return {}
  },

  components: {
    ProductCards,
    ProductForm
  },
}
</script>

<style></style>
