<template>
  <section class="default-container">
    <h2 class="default-title">Houses For Rodents</h2>
    <router-link class="default-link" :to="'/rodents'"
      >Back to products for rodents</router-link
    >
    <!-- <product-filter /> -->
    <Catalog :animalName="value" :categoryName="categoryName" />
  </section>
</template>
<script>
import Catalog from "../../Catalog";
// import ProductFilter from './ProductFilter.vue';

export default {
  name: "RodentsHouses",
  data() {
    return {
      value: "rodent",
      categoryName: "houses",
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