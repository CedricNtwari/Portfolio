<template>
  <div class="blog">
    <h1 class="blog__header">{{ header }}</h1>
    <router-link
      class="blog__link"
      v-for="blog in blogs"
      :key="blog.id"
      :to="{ name: 'BlogDetails', params: { id: blog.id } }"
      ><BlogPreview
        class="blog__preview"
        :title="blog.title"
        :date="blog.date"
        :subject="blog.subject"
        :text="blog.text"
    /></router-link>
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue'
import { blogs } from '../blogs-data.js'

export default {
  name: 'Blog',
  components: {
    BlogPreview,
  },

  data() {
    return {
      header: 'Blog',
      blogs,
    }
  },
}
</script>

<style lang="scss">
.blog {
  margin: 10%;

  &__header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding-left: 38px;
  }

  &__link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.893);

    &:hover {
      color: #1e81b0;
    }
  }

  &__preview {
    margin: 20px;
    padding: 20px;

    &:after {
      display: inline-block;
      content: '';
      border-top: 1px solid lightgray;
      width: 100%;
    }
  }
}
</style>
