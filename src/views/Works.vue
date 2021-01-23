<template>
  <div class="works">
    <Intro :msg="introMsg" />
    <RecentPosts />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import RecentPosts from '@/components/RecentPosts.vue'

export default {
  name: 'Works',
  components: {
    Intro,
    RecentPosts,
  },

  data() {
    return {
      introMsg: 'Hi, I am Cédric, a creative front-end developer',
    }
  },
}
</script>
