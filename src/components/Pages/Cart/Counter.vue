<template>
  <div class="counter">
    <button @click="decrementCount">-</button>
    <input @input="getValue" v-model="value" readonly />
    <button @click="incrementCount">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Counter",
      value: 1,
    };
  },
  methods: {
    incrementCount() {
      +this.value++;
    },
    decrementCount() {
      if (this.value > 1) {
        this.value--;
      }
    },
    getValue() {
      this.$emit("getValue", +this.value);
    },
  },
  watch: {
    value() {
      this.getValue();
    },
  },
};
</script>
<style scoped>
input {
  width: 30px;
  text-align: center;
  border: none;
  outline: none;
  font-size: 1.2rem;
}

button {
  border: none;
  outline: none;
  background: #00aa6a;
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 3px;
  cursor: pointer;
}
</style>