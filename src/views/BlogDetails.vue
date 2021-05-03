<template>
  <div class="blog-details">
    <GoBack />
    <h1>{{ blog.title }}</h1>
    <div class="blog-details__infos">
      <span class="blog-details__date">{{ blog.date }}</span> |
      <span class="blog-details__subject">{{ blog.subject }}</span>
    </div>
    <p class="blog-details__paragraph">{{ blog.paragraph }}</p>
  </div>
</template>
<script>
import content from '@/content.js'
import GoBack from '@/components/GoBack.vue'

export default {
  name: 'BlogDetails',
  components: {
    GoBack,
  },
  data() {
    return {
      blogId: this.$route.params.id,
    }
  },
  computed: {
    blog() {
      return content.blogs.find(blog => blog.id === this.blogId)
    },
  },
}
</script>

<style scoped lang="scss">
.blog-details {
  margin: 10%;

  &__date {
    font-variant: small-caps;
  }
  &__subject {
    font-variant: small-caps;
  }
  &__paragraph::first-letter {
    font-size: 200%;
    color: #ff7999;
  }
}
</style>
