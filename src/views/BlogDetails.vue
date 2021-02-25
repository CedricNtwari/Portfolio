<template>
  <div class="blog-details">
    <GoBack />
    <h2>{{ blog.title }}</h2>
    <div class="blog-details__infos">
      <span class="blog-details__date">{{ blog.date }}</span> |
      <span class="blog-details__subject">{{ blog.subject }}</span>
    </div>
    <p class="blog-details__paragraph">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit optio hic ullam
      temporibus aperiam consequuntur alias odio cupiditate praesentium maiores, ipsa neque?
      Blanditiis, aperiam placeat. Quasi nihil reprehenderit ab?
    </p>
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
      content,
    }
  },
  computed: {
    blog() {
      return content.blogs.find(blog => blog.id === this.blogId)
    },
  },
}
</script>
