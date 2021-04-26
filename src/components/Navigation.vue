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
      <span class="navigation__bar"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isActive: true,
    }
  },
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
    display: inline-block;
    position: relative;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 20px 50px 0 0;

    &.router-link-exact-active {
      color: #ff7999;
    }

    &:hover {
      color: #1e81b0;
    }

    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: '';
      display: block;
      height: 2px;
      left: 0%;
      position: absolute;
      background: #ff7999;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:hover:after {
      width: 50%;
      left: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    .navigation {
      &__link {
        display: none;
      }

      &__icon {
        display: inline-block;
        position: relative;
        width: 35px;
        height: 20px;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
        cursor: pointer;
      }

      &__icon:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #000;
        top: 8px;
        right: 0;
      }
    }
  }
}
</style>
