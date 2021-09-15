<template>
  <section class="default-container">
    <h2 class="default-title">Accessories For Dogs</h2>
    <router-link class="default-link" :to="'/dogs'"
      >Back to products for dogs</router-link
    >
    <!-- <product-filter /> -->
    <Catalog :animalName="value" :categoryName="categoryName" />
  </section>
</template>
<script>
import Catalog from "../../Catalog";
// import ProductFilter from './ProductFilter.vue';

export default {
  name: "DogsAccessories",
  data() {
    return {
      value: "dog",
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