<template>
  <section class="default-container">
    <h2 class="default-title">Accessories For Rodents</h2>
    <router-link class="default-link" :to="'/categories'"
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
  name: "RodentsToys",
  data() {
    return {
      value: "rodent",
      categoryName: "toys",
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