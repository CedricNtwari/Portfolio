<template>
  <div class="works">
    <h1>This is a Works page</h1>
    <Intro msg="Hi, I am Cédric, a creative front-end developer" />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
export default {
  name: 'Intro',
  component: {
    Intro,
  },
}
</script>
