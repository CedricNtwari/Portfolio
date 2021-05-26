<template>
  <div class="not-found">
    <h1 class="not-found__header">{{ notfound }}</h1>
    <p class="not-found__parahraph">
      {{ oops }}
      <router-link class="not-found__link" :to="{ name: 'Home' }">home</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'NotFound',

  data() {
    return {
      notfound: 'Not Found',
      oops: "Oops we couldn't find that page. Try going",
    }
  },
}
</script>

<style scoped lang="scss">
.not-found {
  position: relative;
  text-align: center;
  top: 35%;
}
</style>
