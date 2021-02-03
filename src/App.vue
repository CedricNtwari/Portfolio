/* eslint-disable prettier/prettier */
<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>
<style lang="scss"></style>
