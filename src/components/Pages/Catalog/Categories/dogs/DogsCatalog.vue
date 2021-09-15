<template>
  <div class="main-catalog">
    <h2 class="categories-title">Products for dogs</h2>
    <router-link class="choose-category" :to="'./categories'">
      Choose another category
    </router-link>

    <div class="animal-links">
      <router-link
        v-for="(category, i) in categories"
        :key="i"
        :to="`/dogs/${category.replace(' ', '_')}`"
        class="animal-links-card"
        :class="category"
      >
        <p class="animal-links-card_title">{{ category }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rodents",
  data() {
    return {
      categories: ["feed", "accessories", "products care"],
    };
  },
};
</script>
<style scoped>
.feed {
  background: url("../../../../../assets/images/dog_feed.jpg") center center/
    contain no-repeat;
}

.accessories {
  background: url("../../../../../assets/images/dog_access.jpg") center center /
    contain no-repeat;
}

.care {
  background: url("../../../../../assets/images/dog_care.jpg") top center /
    contain no-repeat;
}
</style>