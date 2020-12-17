<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/works">Works</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/contact">Contact</router-link>
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
  padding: 25px;
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
}
</style>
