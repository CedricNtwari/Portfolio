<template>
  <div class="home">
    <Intro :msg="introMsg" />
    <RecentPosts />
    <FeaturedWorks />
  </div>
</template>

<script>
import FeaturedWorks from '@/components/FeaturedWorks.vue'

import Intro from '@/components/Intro.vue'
import RecentPosts from '@/components/RecentPosts.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    RecentPosts,
    FeaturedWorks,
  },

  data() {
    return {
      introMsg: 'Hi, I am Cédric, a creative front-end developer',
    }
  },
}
</script>
<style lang="scss"></style>
