<template>
  <div class="go-back">
    <button class="go-back__button" @click="goBack">Go back</button>
  </div>
</template>
<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>
