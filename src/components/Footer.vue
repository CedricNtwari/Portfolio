<!-- This component adds the footer. -->
<template>
  <div class="footer">
    <div class="footer__row">
      <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
      <a href="https://www.instagram.com/" target="_blank"
        ><i class="fab fa-instagram fa-2x"></i
      ></a>
      <a href="https://twitter.com/?lang=en" target="_blank"
        ><i class="fab fa-twitter fa-2x"></i
      ></a>
      <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
    </div>

    <div class="footer__row">
      <p class="footer__copyright">Copyright @{{ currentYear }} All rights reserved</p>
    </div>
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
  padding-top: 50px;

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fa-facebook,
  .fa-instagram,
  .fa-twitter,
  .fa-linkedin {
    text-decoration: none;
    color: black;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
  }

  .fa-facebook:hover,
  .fa-instagram:hover,
  .fa-twitter:hover,
  .fa-linkedin:hover {
    color: #1e81b0;
  }
}
</style>
