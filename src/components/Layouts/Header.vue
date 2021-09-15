<template>
  <header class="header">
    <div class="header-top">
      <div class="left">
        <div class="header-location">Grodno</div>
      </div>
      <div class="right">
        <div class="header-auth">
          <router-link :to="'/login'">
            <button class="header-auth_login">LOG IN</button>
          </router-link>
          <router-link :to="'/register'">
            <button class="header-auth_login">SIGN IN</button>
          </router-link>
        </div>
        <div class="header-language">
          <!-- <select name="language" id="language">
            <option class="option" value="en">English</option>
            <option class="option" value="ru">Russian</option>
            <option class="option" value="be">Belarusian</option>
          </select> -->
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="menu-wrapper">
        <div class="menu-icon"></div>
      </div>
      <router-link :to="'./'" class="header-main_logo">
        <img
          class="header-main_logo-img"
          src="../../assets/images/logo.png"
          alt="logo"
        />
      </router-link>
      <nav class="header-main-nav">
        <router-link
          v-for="(link, i) in navLinks"
          :key="i"
          class="header-main-nav_link"
          :to="link.link"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <Search />

      <router-link :to="'/cart'">
        <div class="header-main-cart">
          <img
            class="header-main-cart_img"
            src="../../assets/images/cart.svg"
            alt="shoping-cart"
          />
          <span class="header-main-cart_counter">{{ CART.length }}</span>
        </div>
      </router-link>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import Search from "../Search";

export default {
  name: "Header",
  data() {
    return {
      navLinks: [
        { name: "Home", link: "/" },
        { name: "Delivery & Payment", link: "/delivery" },
        { name: "About us", link: "/about" },
        { name: "Contact us", link: "/contact" },
      ],
    };
  },
  components: {
    Search,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style scoped>
.header {
  background-color: #00aa6a;
  color: #fff;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  background: #ffffffef;
  color: #000;
}

.right {
  display: flex;
}

.header-auth {
  margin-right: 20px;
}

.header-auth_login {
  padding: 5px 10px;
  margin-right: 15px;
  background: #fff;
  box-shadow: 0 0 3px 1px #000000;
  font-size: 0.8em;
  font-weight: 400;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

select {
  padding: 5px 0;
  border: none;
  outline: none;
  cursor: pointer;
}

.header-main {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 25px;
  font-size: 1.2em;
  color: #fff;
}

.header-main_logo-img {
  max-height: 80px;
}

.header-main-nav_link {
  padding: 7px 15px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease-in-out;
}

.header-main-nav_link:hover {
  /* box-shadow: 0 0 5px rgb(247, 237, 237); */
  color: #fdcf7a;
}

.header-main-cart {
  transition: all 0.2s ease-in;
}
.header-main-cart:hover {
  padding-bottom: 5px;
}
.header-main-cart_img {
  width: 30px;
}

.header-main-cart_counter {
  position: absolute;
  padding-left: 3px;
  color: #fdcf7a;
  font-size: 20px;
  font-weight: 700;
}
.menu-wrapper {
  display: none;
  width: 50px;
  height: 30px;
}

.menu-icon {
  position: relative;
  width: 30px;
  height: 4px;
  background-color: rgb(255, 255, 255);
}

.menu-icon::before,
.menu-icon::after {
  position: absolute;
  left: 0;
  top: -10px;
  content: "";
  width: 30px;
  height: 4px;
  background-color: rgb(255, 255, 255);
  transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}

.menu-icon::after {
  top: 10px;
}

@media (max-width: 930px) {
  .header-main-nav {
    display: none;
  }
  .menu-wrapper {
    display: flex;
    position: absolute;
    left: 5px;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }
  .header-main_logo-img {
    max-height: 60px;
  }
}
</style>