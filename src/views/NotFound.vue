<template>
  <div class="not-found">
    <h1 class="not-found__header">Not Found</h1>
    <p class="not-found__parahraph">
      Oops we couldn't find that page. Try going
      <router-link class="not-found__link" :to="{ name: 'Home' }">home</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped lang="scss">
.not-found {
  position: relative;
  text-align: center;
  top: 35%;
}
</style>
