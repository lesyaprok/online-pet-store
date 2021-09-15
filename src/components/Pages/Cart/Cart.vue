<template>
  <section class="cart">
    <h2 class="cart-title">Cart</h2>
    <p class="cart-empty" v-show="isCartEmpty">The cart is empty!</p>
    <router-link :to="'/categories'" v-show="isCartEmpty" class="catalog-link">Back to catalog</router-link>

    <CartProduct
      v-for="(item, i) in CART"
      :key="i"
      :product="item"
      @removeProductFromCart="removeProductFromCart(i)"
    />
    <div v-show="CART.length" class="cart-total">TOTAL: {{ totalSum }} BYN</div>
    <button v-show="CART.length" class="order-button">Make an order</button>
  </section>
</template>
<script>
import CartProduct from "./CartProduct.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    CartProduct,
  },
  computed: {
    ...mapGetters(["CART"]),
    totalSum() {
      if (this.CART.length) {
        return this.CART.map((e) => e.price * e.count || e.price)
          .reduce((acc, e) => acc + e)
          .toFixed(2);
      }
    },
    isCartEmpty() {
      return !this.CART.length;
    },
  },
  methods: {
    ...mapActions([
      "ADD_PRODUCT_TO_CART",
      "REMOVE_PRODUCT_FROM_CART",
      "GET_ITEMS_FROM_LOCAL_STORAGE",
    ]),
    // addProductToCart(product) {
    //   this.ADD_PRODUCT_TO_CART(product)
    // },
    removeProductFromCart(index) {
      this.REMOVE_PRODUCT_FROM_CART(index);
      localStorage.setItem("cart", JSON.stringify(this.CART));
    },
  },
  mounted() {
    if (localStorage.getItem("cart")) {
      this.GET_ITEMS_FROM_LOCAL_STORAGE(localStorage);
    }
  },
};
</script>
<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-title {
  padding-top: 20px;
  text-align: center;
  font-size: 36px;
}

.cart-empty {
  text-align: center;
  font-size: 28px;
  margin-top: 30px;
}

.cart-total {
  padding: 30px 0;
  text-align: center;
  font-size: 36px;
}
.order-button {
  text-align: center;
  width: 30%;
  margin: 0 auto;
  background-color: #00aa6a;
  padding: 20px;
  color: #fff;
  font-size: 26px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.order-button:hover {
  color: #00aa6a;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00aa6a;
}

.catalog-link {
  padding-top: 30px;
  color: #00aa6a;
  text-transform: uppercase;
}
</style>