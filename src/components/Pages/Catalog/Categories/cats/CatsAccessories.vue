<template>
  <section class="default-container">
    <h2 class="default-title">Accessories For Cats</h2>
    <router-link class="default-link" :to="'/cats'"
      >Back to products for cats</router-link
    >
    <!-- <product-filter /> -->
    <Catalog :animalName="value" :categoryName="categoryName" />
  </section>
</template>
<script>
import Catalog from "../../Catalog";
// import ProductFilter from './ProductFilter.vue';

export default {
  name: "CatsAccessories",
  data() {
    return {
      value: "cat",
      categoryName: "accessories",
    };
  },
  components: {
    Catalog,
    // ProductFilter,
  },
};
</script>
<style scoped>
</style>