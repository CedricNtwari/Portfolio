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
  background-color: $color-secondary;
  height: auto;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 15%;
    padding-left: 15%;
  }

  &__title {
    font-size: 20px;
  }

  &__link {
    text-decoration: none;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  &__blog-preview {
    padding: 0 15% 5% 15%;

    @media ($tablet-up) {
      display: flex;
      flex-direction: row;
    }
  }

  &__preview-link {
    text-decoration: none;
    color: $color-dark;
    margin: 10px;

    @media ($tablet-up) {
      margin-right: 10px;
    }

    &:hover {
      color: $color-secondary;
    }
  }
}
</style>
