<template>
  <div class="header-main-search">
    <input
      @input="getValue"
      v-model="value"
      class="header-main-search_input"
      placeholder="Enter product name"
      type="text"
    />
    <div class="input-search"></div>
    <div v-show="isResultVisible" class="result-container">
      <div class="result" v-for="(item, i) in resultOfSearch" :key="i">
        <h2 class="result-title">{{ item.title || item.name }}</h2>
        <p class="result-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      value: "",
      arrayOfItems: [],
      resultOfSearch: [],
      isResultVisible: false,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    getDataForSearch(products) {
      let temp = Object.values(products).map((i) => Object.values(i));
      const doArrayOfItems = () => {
        temp.map((i) =>
          i.map((e) => e.forEach((k) => this.arrayOfItems.push(k)))
        );
      };
      doArrayOfItems();
    },
    getValue() {
      this.resultOfSearch.length = 0;
      if (this.value === "") {
        this.isResultVisible = false;
      }
      this.isResultVisible = true;
      this.arrayOfItems.forEach((i) => {
        if (
          (i.title || i.name).toLowerCase().includes(this.value.toLowerCase())
        ) {
          this.resultOfSearch.push(i);
        } else if (
          i.description.toLowerCase().includes(this.value.toLowerCase())
        ) {
          this.resultOfSearch.push(i);
        }
      });
    },
    ...mapActions(["GET_PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS().then((res) => this.getDataForSearch(res.data));

    document.addEventListener("click", (event) =>
      event.target.className !== "header-main-search_input"
        ? (this.isResultVisible = false)
        : ""
    );
  },
};
</script>

<style scoped>
.header-main-search {
  position: relative;
  max-width: 250px;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 5px;
}
.header-main-search_input {
  box-sizing: border-box;
  max-width: 90%;
  padding: 10px 15px;
  margin-right: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 0.9em;
}

.input-search {
  position: absolute;
  top: 0;
  right: 10px;
  background: url("../assets/images/search.svg") center center/ contain
    no-repeat;
  content: "";
  height: 100%;
  width: 20px;
}

.result-container {
  position: absolute;
  max-width: 300px;
  max-height: 300px;
  margin-top: 3px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00aa6a;
  overflow-y: scroll;
  z-index: 100;
}

.result-container::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

.result-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #18aa66;
}

.result-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}

.result {
  padding: 10px;
  border-bottom: 1px solid rgb(182, 212, 187);
  cursor: pointer;
}

.result:hover {
  background-color: rgba(76, 163, 124, 0.274);
}

.result:last-child {
  margin-bottom: 0;
}

.result-title {
  margin-bottom: 5px;
  font-size: 0.8em;
  color: #00aa6a;
}

.result:first-child h2 {
  padding-top: 10px;
}

.result-description {
  color: #000;
  font-size: 0.6em;
}

@media (max-width: 988px) {
  .header-main-search {
    max-width: 200px;
  }
}

@media (max-width: 488px) {
  .header-main-search {
    display: none;
  }
}
</style>