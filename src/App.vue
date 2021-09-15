<template>
  <div id="app">
    <Header />
    <main class="main">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="footer">
      <div class="footer-item">Online Pet Store, 2021</div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.main {
  min-height: 80vh;
  background: #f5fff7c9;
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #00aa6a;
}

.footer-item {
  color: #fff;
}
</style>
