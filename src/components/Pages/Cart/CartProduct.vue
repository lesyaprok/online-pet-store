<template>
  <div class="cart-product">
    <div class="left">
      <img class="cart-product_img" :src="product.img" alt="" />
      <h2 class="cart-product_title">{{ product.title }}</h2>
    </div>

    <div class="right">
      <Counter @getValue="getValue" />
      <p class="cart-product_price">Price: {{ modificatePrice }}</p>
      <button @click="removeProductFromCart" class="cart-product_remove">
        Remove from cart
      </button>
    </div>
  </div>
</template>
<script>
import Counter from "./Counter.vue";

export default {
  components: { Counter },
  name: "CartProduct",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    data() {},
  },
  computed: {
    modificatePrice() {
      return this.product.price.toFixed(2);
    },
  },
  methods: {
    getValue(value) {
      console.log(value);
      this.$set(this.product, "count", value);
    },
    removeProductFromCart() {
      this.$emit("removeProductFromCart");
    },
  },
  mounted() {
    this.$set(this.product, "count", 1);
  },
};
</script>
<style scoped>
.left,
.right {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  padding: 0 10px;
}
.cart-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 80%;
  margin: 10px auto;
  box-shadow: 0 0 3px 1px grey;
  box-sizing: border-box;
  background-color: #fff;
}

.cart-product_img {
  max-height: 120px;
  padding-right: 15px;
}

.cart-product_title {
  font-size: 1.2rem;
}

.cart-product_remove {
  box-sizing: border-box;
  background-color: #00aa6a;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.cart-product_remove:hover {
  color: #00aa6a;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00aa6a;
  /* font-weight: 600; */
}

@media(max-width:700px) {
  .cart-product {
    padding: 0;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-evenly;
  }
  .left,
  .right {
    align-items: space-between;
    justify-content: space-between;
  }
}
</style>