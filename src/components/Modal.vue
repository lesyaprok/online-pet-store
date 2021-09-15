<template>
  <transition name="fade">
    <div class="modal">{{ message }}</div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5px;
  right: 5px;
  width: 400px;
  height: 90px;
  padding: 0 10px;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: rgba(224, 114, 40, 0.842);
  color: rgb(247, 247, 247);
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity 1.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>