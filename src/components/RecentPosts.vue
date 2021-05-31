<!-- This component creates a RecentPosts to the homepage. -->
<template>
  <div class="recent-posts">
    <div class="recent-posts__header">
      <h3 class="recent-posts__title">Recent posts</h3>
      <router-link class="recent-posts__link" to="/blog">View all</router-link>
    </div>
    <div class="recent-posts__blog-preview">
      <router-link
        class="recent-posts__preview-link"
        v-for="blog in displayedBlogPosts"
        :key="blog.id"
        :to="{ name: 'BlogDetails', params: { id: blog.id } }"
      >
        <BlogPreview
          :key="blog.id"
          :title="blog.title"
          :date="blog.date"
          :subject="blog.subject"
          :text="blog.text"
      /></router-link>
    </div>
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue'
import { blogs } from '../blogs-data.js'

const viewportValue = 1320

export default {
  name: 'RecentPosts',

  components: {
    BlogPreview,
  },

  data() {
    return {
      viewportWidth: 0,
      blogs,
    }
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth
    },
  },

  computed: {
    displayedBlogPosts() {
      return this.viewportWidth <= viewportValue ? blogs.slice(0, 2) : blogs.slice(0, 3)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recent-posts {
  background-color: #dbeef1;
  height: auto;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15% 0 15%;
  }

  &__title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
  }

  &__link {
    text-decoration: none;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  &__blog-preview {
    padding: 0 15% 5% 15%;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }

  &__preview-link {
    text-decoration: none;
    color: #000000;
    margin: 10px;

    @media (min-width: 768px) {
      margin: 0 10px 0 0;
    }

    &:hover {
      color: #1e81b0;
    }
  }
}
</style>
