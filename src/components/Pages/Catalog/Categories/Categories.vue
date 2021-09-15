<template>
  <section class="categories-container">
    <h2 class="categories-title">Categories</h2>
    <div class="animal-links">
      <router-link
        v-for="(card, i) in cards"
        :key="i"
        :to="`/${card}`"
        class="animal-links-card"
        :class="card"
      >
        <p class="animal-links-card_title">For {{ card }}</p>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "Categories",
  data() {
    return {
      cards: ["cats", "dogs", "rodents"],
    };
  },
};
</script>
<style scoped>
.categories-container {
  padding: 60px 0;
  background-color: #fff;
}

.categories-title {
  padding-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  color: #000;
  user-select: none;
}

.animal-links {
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  flex-wrap: wrap;
}

.animal-links-card {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  max-width: 30%;
  max-height: 280px;
  background-color: #fff;
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
  font-size: 1.7em;
  background-color: rgba(0, 0, 0, 0.534);
}

.dogs {
  background: url("../../../../assets/images/dog.jpg") center center/ contain
    no-repeat;
}

.cats {
  background: url("../../../../assets/images/cat.jpg") center center / contain
    no-repeat;
}

.rodents {
  background: url("../../../../assets/images/rodents.jpg") center center /
    contain no-repeat;
}

@media (max-width: 768px) {
  .animal-links-card {
    max-height: 200px;
    font-size: 0.6rem;
    min-width: 70%;
    margin-bottom: 10px;
  }
}
</style>