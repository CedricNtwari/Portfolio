<!-- This component adds the footer. -->
<template>
  <div class="footer">
    <div class="footer__row">
      <i class="fab fa-facebook fa-2x"></i>
      <i class="fab fa-instagram fa-2x"></i>
      <i class="fab fa-twitter fa-2x"></i>
      <i class="fab fa-linkedin fa-2x"></i>
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
  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fa-facebook {
    list-style-type: none;
    padding: 5px;
    margin: 5px;
  }
  .fa-instagram {
    list-style-type: none;
    padding: 5px;
    margin: 5px;
  }
  .fa-twitter {
    list-style-type: none;
    padding: 5px;
    margin: 5px;
  }
  .fa-linkedin {
    list-style-type: none;
    padding: 5px;
    margin: 5px;
  }
}
</style>
