<!-- This component creates a responsive navigation bar. -->
<template>
  <div class="navigation-mobile">
    <router-link class="navigation-mobile__link" to="/">Home</router-link>
    <router-link class="navigation-mobile__link" to="/blog">Blog</router-link>
    <router-link class="navigation-mobile__link" to="/works">Works</router-link>
    <router-link class="navigation-mobile__link" to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationMobile',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation-mobile {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
