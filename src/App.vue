/* eslint-disable prettier/prettier */
<template>
  <Navigation />
  <router-view />
  <Footer />
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
<style lang="scss"></style>
