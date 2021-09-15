<template>
  <div class="cards">
    <ul class="sort" id="sort" v-show="!isDataLoaded">
      items per page:
      <li data-value="3">3</li>
      <li data-value="5">5</li>
      <li data-value="10">10</li>
    </ul>
    <section class="cards-container">
      <div class="loader"><Loader v-if="isDataLoaded" /></div>

      <Card
        v-for="(item, i) of pageData"
        :key="i"
        :title="item.title"
        :price="item.price"
        :description="item.description"
        :img="item.img"
        @addItemToCart="addItemToCart"
      />
    </section>
    <Pagination
      v-show="pageData.length"
      :inputData="productCategory"
      :currentPage="currentPage"
      :total="total"
      :limit="pageLimit"
      @updatePageData="updatePageData"
    />
    <Modal v-show="isProductAdded" :message="'Added to cart!'" />
  </div>
</template>
<script>
import Card from "./Card";
import Loader from "../../Loader";
import Modal from "../../Modal";
import Pagination from "../../Pagination/Pagination.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  props: {
    animalName: {
      type: String,
    },
    categoryName: {
      type: String,
    },
  },
  data() {
    return {
      pageData: [],
      loader: false,
      currentPage: 1,
      pageLimit: 3,
      total: 0,
      productCategory: [],
      isProductAdded: false,
    };
  },
  components: {
    Card,
    Loader,
    Pagination,
    Modal,
  },
  computed: {
    isDataLoaded() {
      return !this.pageData.length;
    },
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    updatePageData(data) {
      this.pageData = data;
    },
    addItemToCart(item) {
      this.ADD_PRODUCT_TO_CART(item);
      this.isProductAdded = true;
      setTimeout(() => (this.isProductAdded = false), 3000);
      localStorage.setItem("cart", JSON.stringify(this.CART));
    },
    perPageListener(event) {
      this.pageLimit = +event.target.innerHTML;
      this.getData();
    },
    getData() {
      this.GET_PRODUCTS().then((res) => {
        const dataArray = res.data[this.animalName][this.categoryName];
        this.total = dataArray.length;
        this.productCategory = dataArray;
        this.pageData = dataArray.slice(0, this.pageLimit);
      });
    },
    ...mapActions(["GET_PRODUCTS", "ADD_PRODUCT_TO_CART"]),
  },

  mounted() {
    document
      .getElementById("sort")
      .addEventListener("click", this.perPageListener);
    this.getData();
  },
};
</script>
<style scoped>
.cards {
  position: relative;
  margin-top: 30px;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0 10px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.sort {
  position: absolute;
  right: 0;
  display: flex;
  width: 330px;
  color: rgb(0, 128, 79);
}

.sort li {
  list-style: none;
  margin-left: 10px;
  color: #000;
  text-decoration: underline;
  transition: all 0.3s ease-in;
}
.sort li:hover {
  color: rgb(0, 128, 79);
  cursor: pointer;
}
</style>