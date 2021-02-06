/* eslint-disable prettier/prettier */
<template>
  <div class="app">
    <Navigation class="app__navigation" />
    <router-view class="app__router" />
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
}
</style>
