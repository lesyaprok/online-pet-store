<template>
  <div class="card">
    <div class="img-container">
      <img :src="img" class="card-img" alt="card-img" />
    </div>

    <p class="card-price">{{ modificatePrice }}</p>
    <h2 class="card-title">{{ title }}</h2>
    <p class="card-description">
      {{ description }}
    </p>
    <button @click="addItemToCart" class="card-button">Add to cart</button>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    price: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: "",
    },
  },
  computed: {
    modificatePrice() {
      return `${this.price.toFixed(2).replace(".", ",")} руб.`;
    },
    isImageNotLoaded() {
      return this.img == "";
    },
  },
  methods: {
    addItemToCart() {
      this.$emit("addItemToCart", this.$props);
    },
  },
};
</script>
<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 300px;
  padding: 10px 20px 20px;
  margin-bottom: 25px;
  margin-right: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 3px 1px rgb(219, 218, 218);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 5px 5px rgb(219, 218, 218);
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 220px;
  height: 230px;
  /* width: 100%; */
  margin-bottom: 10px;
  background-size: 100%;
  transition: all 1s ease-in;
}

.card-img {
  max-height: 100%;
  max-width: 80%;
}

.card-price {
  color: #00aa6a;
  font-size: 20px;
  margin-bottom: 10px;
}
.card-title,
.card-description {
  margin-bottom: 10px;
}

.card-title {
  font-size: 1.2rem;
  padding-bottom: 5px;
}

.card-button {
  box-sizing: border-box;
  background-color: #00aa6a;
  margin-top: 10px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.card-button:hover {
  color: #00aa6a;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00aa6a;
}
</style>