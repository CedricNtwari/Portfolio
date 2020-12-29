/* eslint-disable prettier/prettier */
<template>
  <div id="nav">
    <router-link to="/works">Works</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/contact">Contact</router-link>
    <i class="fas fa-bars"></i>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  width: 100%;
  text-align: right;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 20px;

    &.router-link-exact-active {
      color: #ff7999;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    a {
      display: none;
    }
    i {
      font-size: 30px;
    }
  }
}
</style>
