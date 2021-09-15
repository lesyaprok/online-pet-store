<template>
  <div class=".animal-links-card">
    <h2 class="categories-title">Products for rodents</h2>
    <router-link class="choose-category" :to="'/categories'">
      Choose another category
    </router-link>

    <div class="animal-links">
      <router-link
        v-for="(category, i) in categories"
        :key="i"
        :to="`/rodents/${category}`"
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
      categories: ["feed", "toys", "houses"],
    };
  },
};
</script>
<style scoped>
.feed {
  background: url("../../../../../assets/images/rodent_feed.jpg") center center/
    contain no-repeat;
}

.toys {
  background: url("../../../../../assets/images/rodent_access.jpg") center
    center / contain no-repeat;
}

.houses {
  background: url("../../../../../assets/images/rodent_houses.jpg") center
    center / contain no-repeat;
}
</style>