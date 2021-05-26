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

  data() {
    return {
      isActive: true,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation-mobile {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
</style>
