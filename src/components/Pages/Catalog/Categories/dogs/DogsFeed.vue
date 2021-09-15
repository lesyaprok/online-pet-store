<template>
  <section class="default-container">
    <h2 class="default-title">Dogs feed</h2>
    <router-link class="default-link" :to="'/dogs'"
      >Back to products for dogs
    </router-link>
    <Catalog :animalName="value" :categoryName="categoryName" />
  </section>
</template>
<script>
import Catalog from "../../Catalog";
export default {
  name: "DogsFeed",
  data() {
    return {
      value: "dog",
      categoryName: "feed",
    };
  },
  components: { Catalog },
};
</script>
<style scoped>
</style>