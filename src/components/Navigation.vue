<!-- This component creates a responsive navigation bar. -->
<template>
  <div id="App" class="navigation">
    <router-link class="navigation__link" to="/">Home</router-link>
    <router-link class="navigation__link" to="/blog">Blog</router-link>
    <router-link class="navigation__link" to="/works">Works</router-link>
    <router-link class="navigation__link" to="/contact">Contact</router-link>
    <div class="navigation__icon">
      <span class="navigation__bar"></span>
      <span class="navigation__bar"></span>
      <!-- <span class="navigation__bar"></span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;

  &__link {
    font-size: 18px;
    display: inline-block;
    font-weight: 700;
    color: $color-dark;
    text-decoration: none;
    padding-top: 20px;
    padding-right: 26px;
    padding-bottom: 30px;

    &.router-link-exact-active {
      color: $color-primary;
    }

    @media ($tablet-up) {
      font-size: 20px;
    }
  }

  &__icon {
    @media ($tablet-up) {
      display: none;
    }
  }
}
</style>
