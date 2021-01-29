<!-- This component adds the footer. -->
<template>
  <div class="footer">
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-instagram-square"></i>
    <i class="fab fa-twitter-square"></i>
    <i class="fab fa-linkedin"></i>

    <p class="footer__copyright">Copyright @{{ currentYear }} All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  padding: 40px 0 30px 0;
}
</style>
