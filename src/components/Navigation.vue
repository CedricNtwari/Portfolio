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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;

  &__link {
    display: none;

    @media (min-width: 768px) {
      display: inline;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      padding: 20px 40px 0 0;
    }
  }

  &__icon {
    display: inline-block;
    width: 30px;
    height: 10px;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
