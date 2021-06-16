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
    text-decoration: none;
    font-size: 44px;
    padding-bottom: 20px;
  }

  &__link {
    text-decoration: none;
    color: $color-dark;

    &:hover {
      color: $color-secondary;
    }
  }

  &__preview {
    padding-top: 10px;
    padding-bottom: 20px;
    &:after {
      display: inline-block;
      content: '';
      border-top: 1px solid $color-line-break;
      width: 100%;
    }
  }
}
</style>
