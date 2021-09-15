<template>
  <div class="pagination">
    <div
      class="pageButton"
      :data-value="prev"
      @click="loadData"
      :class="{ 'disabled-button': disablePrevButton }"
    >
      {{ prev }}
    </div>
    <div
      class="pageButton"
      :class="{ activeButton: i === pageNumber }"
      v-for="i of buttonsCounter"
      :key="i"
      @click="loadData"
      :data-value="i"
    >
      {{ i }}
    </div>
    <div
      class="pageButton"
      :data-value="next"
      @click="loadData"
      :class="{ 'disabled-button': disableNextButton }"
    >
      {{ next }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    inputData: {
      type: Array,
      default() {
        return [];
      },
    },
    limit: {
      type: Number,
    },
    total: {
      type: Number,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      prev: "<",
      next: ">",
      pageNumber: this.currentPage,
    };
  },
  computed: {
    buttonsCounter() {
      if (this.total > 0) {
        return Math.ceil(this.total / this.limit);
      }
    },
    disablePrevButton() {
      return this.pageNumber === 1;
    },
    disableNextButton() {
      return this.pageNumber === this.buttonsCounter;
    },
  },
  methods: {
    loadData(event) {
      const buttonValue = event.target.dataset.value;

      switch (buttonValue) {
        case this.prev:
          if (this.pageNumber > 1) {
            this.pageNumber--;
            this.onChangePageData();
            // console.log(this.pageNumber);
          }
          break;
        case this.next:
          if (this.pageNumber < this.buttonsCounter) {
            +this.pageNumber++;
            this.onChangePageData();
            // console.log(this.pageNumber);
          }
          break;
        default:
          this.pageNumber = +buttonValue;
          this.onChangePageData();
        // console.log(+this.pageNumber);
      }
    },
    onChangePageData() {
      this.$emit(
        "updatePageData",
        this.inputData.slice(
          (this.pageNumber - 1) * this.limit,
          this.pageNumber * this.limit
        )
      );
    },
  },
  watch: {
    inputData() {
      this.onChangePageData();
    },
  },
};
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  text-align: center;
}

.pageButton {
  margin-right: 3px;
  padding: 5px;
  width: 20px;
  height: 20px;
  border: 2px solid rgb(0, 153, 77);
  color: rgb(0, 153, 77);
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in;
}

.pageButton:last-child {
  margin-right: 0;
}

.pageButton:hover,
.activeButton {
  background-color: rgb(0, 153, 77);
  color: #fff;
}
.disabled-button {
  cursor: auto;
  color: rgba(76, 170, 91, 0.692);
  border-color: rgba(76, 170, 91, 0.692);
}
.disabled-button:hover {
  background-color: #fff;
  color: rgba(76, 170, 91, 0.692);
}
</style>