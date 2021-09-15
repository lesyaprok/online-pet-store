<template>
  <div class="home">
    <section class="main-shop-now">
      <div class="main-title">
        <h1 class="main-title_name">Food and Accessories for Pets</h1>
        <router-link :to="'/categories'">
          <button class="main-shop-now_button">Shop now</button>
        </router-link>
      </div>
    </section>
    <Categories />
    <About />
  </div>
</template>
<script>
import Categories from "../../Pages/Catalog/Categories/Categories";
import About from "../Navigation/About/About";

export default {
  name: "Home",
  components: {
    Categories,
    About,
  },
};
</script>

<style scoped>
.main-shop-now {
  display: flex;
  align-items: center;
  background: url("../../../assets/images/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f6fffc;
  height: 80vh;
}

.main-title {
  width: 60%;
  padding: 5% 0;
  padding-left: 10%;
  user-select: none;
}

.main-title_name {
  font-size: 3rem;
  width: 70%;
}

.main-shop-now_button {
  margin-top: 30px;
  padding: 20px 45px;
  background-color: #00aa6a;
  color: #fff;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
}

.main-shop-now_button:hover {
  background-color: rgba(255, 255, 255, 0);
  box-shadow: inset 0 0 2px 2px #00aa6a;
  background-color: none;
  color: #00aa6a;
}

@media (max-width: 818px) {
  .main-shop-now {
    height: 65vh;
  }
  .main-title_name {
    font-size: 2rem;
  }
  .main-shop-now_button {
    padding: 15px 35px;
    margin-top: 5px;
  }
}
</style>