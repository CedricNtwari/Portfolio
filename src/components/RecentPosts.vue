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
          class="recent-posts__content"
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

export default {
  name: 'RecentPosts',

  components: {
    BlogPreview,
  },

  data() {
    return {
      viewportWidth: 0,
      viewportValue: '1320',
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
      return this.viewportWidth <= this.viewportValue ? blogs.slice(0, 2) : blogs.slice(0, 3)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recent-posts {
  background-color: #dbeef1;
  width: 100vw;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 15% 0 15%;
  }

  &__title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 30px;
  }

  &__link {
    text-decoration: none;
    padding: 40px 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  &__blog-preview {
    display: flex;
    flex-direction: row;
    margin: 0 14% 0 14%;

    @media (min-width: 320px) {
      display: flex;
      flex-wrap: wrap;
    }

    @media (min-width: 1100px) {
      display: flex;
      flex-wrap: nowrap;
    }
  }

  &__content {
    text-decoration: none;
    margin: 20px;
    padding: 20px;

    @media (min-width: 900px) {
      flex: 35%;
    }
  }

  &__preview-link {
    text-decoration: none;
    color: #000000;

    &:hover {
      color: #1e81b0;
    }
  }
}
</style>
