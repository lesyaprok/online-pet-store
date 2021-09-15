<template>
  <div class="main-catalog">
    <h2 class="categories-title">Products for cats</h2>
    <router-link class="choose-category" :to="'/categories'">
      Choose another category
    </router-link>

    <div class="animal-links">
      <router-link
        v-for="(category, i) in categories"
        :key="i"
        :to="`/cats/${category.replace(' ', '_')}`"
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
  name: "CatsCatalog",
  data() {
    return {
      categories: ["feed", "accessories", "products care"],
    };
  },
};
</script>
<style>
.main-catalog {
  background-color: #fff;
}
.categories-title {
  padding-top: 30px;
  padding-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  color: #000;
  user-select: none;
}

.choose-category {
  display: block;
  max-width: 200px;
  margin: 0 auto 20px;
  padding: 15px 10px;
  color: #00aa6a;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in;
}

.choose-category:hover {
  box-shadow: 0 0 2px 1px #00aa6a;
  border-radius: 5px;
}

.animal-links {
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
}

.animal-links-card {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  width: 30%;
  height: 300px;
  box-shadow: 0 0 3px 1px rgb(219, 218, 218);
  text-decoration: none;
}
.animal-links-card:hover {
  box-shadow: 0 0 5px 5px rgb(219, 218, 218);
}

.animal-links-card_title {
  padding: 15px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  color: rgb(241, 248, 244);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: rgba(1, 46, 23, 0.534);
}
.feed {
  background: url("../../../../../assets/images/cat_feed.jpg") center center/
    contain no-repeat;
}

.accessories {
  background: url("../../../../../assets/images/cat_access.jpeg") center center /
    contain no-repeat;
}

.care {
  background: url("../../../../../assets/images/cat_care.jpeg") center center /
    contain no-repeat;
}

@media (max-width: 988px) {
  .animal-links-card {
    max-height: 200px;
    font-size: 0.6rem;
  }
}
@media (max-width: 768px) {
  .animal-links-card {
    max-height: 200px;
    font-size: 0.4rem;
  }
}

@media (max-width: 543px) {
  .animal-links {
    flex-direction: column;
    align-items: center;
  }
  .animal-links-card {
    width: 60%;
    margin-bottom: 10px;
  }
}
</style>