<template>
  <div class="works">
    <Intro msg="Hi, I am Cédric, a creative front-end developer" />
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
}
</script>
