<template>
  <section class="default-container">
    <h2 class="default-title">Rodents feed</h2>
    <router-link class="default-link" :to="'/rodents'"
      >Back to products for rodents</router-link
    >
    <Catalog :animalName="value" :categoryName="categoryName" />
  </section>
</template>
<script>
import Catalog from "../../Catalog";
export default {
  name: "RodentsFeed",
  data() {
    return {
      value: "rodent",
      categoryName: "feed",
    };
  },
  components: { Catalog },
};
</script>
<style scoped>
h2 {
  text-align: center;
}
</style>