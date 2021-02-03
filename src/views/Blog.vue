<template>
  <div class="blog">
    <h1 class="blog__header">{{ header }}</h1>
    <BlogPreview
      class="blog__BlogPreview"
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :date="blog.date"
      :subject="blog.subject"
    />
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
  &__header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding-left: 38px;
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
  &__footer {
    position: block;
    bottom: 0;
    width: 100%;
  }
}
</style>
