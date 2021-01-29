<template>
  <div class="works">
    <Intro :msg="introMsg" />
    <RecentPosts />
    <FeaturedWorks />
    <Footer />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import RecentPosts from '@/components/RecentPosts.vue'
import FeaturedWorks from '@/components/FeaturedWorks.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Works',
  components: {
    Intro,
    RecentPosts,
    FeaturedWorks,
    Footer,
  },

  data() {
    return {
      introMsg: 'Hi, I am Cédric, a creative front-end developer',
    }
  },
}
</script>
