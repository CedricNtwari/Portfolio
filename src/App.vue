/* eslint-disable prettier/prettier */
<template>
  <div class="app">
    <Navigation class="app__navigation" />
    <transition name="fade" mode="out-in">
      <router-view class="app__router" />
    </transition>
    <Footer class="app__footer" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Navigation,
  },
}
</script>
<style lang="scss">
.app {
  display: flex;
  height: 100vh;
  flex-direction: column;

  &__router {
    flex: 1;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>
