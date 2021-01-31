<template>
  <div class="blog">
    <h1>{{ header }}</h1>
    <BlogPreview /><BlogPreview /><BlogPreview /><BlogPreview /><BlogPreview />
    <Footer class="blog__footer" />
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Blog',
  components: {
    BlogPreview,
    Footer,
  },

  data() {
    return {
      header: 'Blog',
    }
  },
}
</script>

<style lang="scss">
.blog {
  &__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
