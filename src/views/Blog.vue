<template>
  <div class="blog">
    <h1 class="blog__header">{{ header }}</h1>
    <router-link
      class="blog__link"
      v-for="blog in blogs"
      :key="blog.id"
      :to="{ name: 'BlogDetails', params: { id: blog.id } }"
      ><BlogPreview
        class="blog__BlogPreview"
        :title="blog.title"
        :date="blog.date"
        :subject="blog.subject"
    /></router-link>
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue'

export default {
  name: 'Blog',
  components: {
    BlogPreview,
  },

  data() {
    return {
      header: 'Blog',
      blogs: [
        {
          id: 1,
          title: 'Making a design from from scratch',
          date: '12 Feb 2020',
          subject: 'Design, Pattern',
        },
        {
          id: 2,
          title: 'Creating pixel perfect icons in Figma',
          date: '12 Feb 2020',
          subject: 'Figma, Icon Design',
        },
        {
          id: 3,
          title: 'Creating pixel perfect icons in Figma',
          date: '12 Feb 2020',
          subject: 'Figma, Icon Design',
        },
        {
          id: 4,
          title: 'Creating pixel perfect icons in Figma',
          date: '12 Feb 2020',
          subject: 'Figma, Icon Design',
        },
        {
          id: 5,
          title: 'Creating pixel perfect icons in Figma',
          date: '12 Feb 2020',
          subject: 'Figma, Icon Design',
        },
      ],
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

  &__BlogPreview {
    margin: 20px;
    padding: 20px;
  }
  &__BlogPreview:after {
    display: inline-block;
    content: '';
    border-top: 1px solid lightgray;
    width: 100%;
  }
}
</style>
