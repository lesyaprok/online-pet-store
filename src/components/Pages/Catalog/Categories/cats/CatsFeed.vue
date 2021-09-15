<template>
  <section class="default-container">
    <h2 class="default-title">For Cats</h2>
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
  name: "CatsFeed",
  data() {
    return {
      value: "cat",
      categoryName: "feed",
    };
  },
  components: {
    Catalog,
    // ProductFilter,
  },
};
</script>
<style>
.default-container {
  padding-top: 30px;
}

.default-title {
  margin-bottom: 10px;
  text-align: center;
  user-select: none;
  font-size: 28px;
}

.default-link {
  display: block;
  max-width: 200px;
  margin: 0 auto;
  padding: 15px 10px;
  background-color: #00aa6a;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.3s ease-in-out;
}
.default-link:hover {
  opacity: 0.8;
}
.loader {
  text-align: center;
}
</style>