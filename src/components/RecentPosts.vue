<!-- This component creates a RecentPosts to the homepage. -->
<template>
  <div class="recent-posts">
    <div class="recent-posts__header">
      <h3 class="recent-posts__title">Recent posts</h3>
      <router-link class="recent-posts__link" to="/blog">View all</router-link>
    </div>
    <div class="recent-posts__blog-preview">
      <BlogPreview
        class="recent-posts__content"
        v-for="blog in blogs"
        :key="blog.id"
        :title="blog.title"
        :date="blog.date"
        :subject="blog.subject"
      />
    </div>
  </div>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue'

export default {
  name: 'RecentPosts',
  components: {
    BlogPreview,
  },
  data() {
    return {
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
      ],
    }
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
    color: #1e81b0;
    padding: 40px 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  &__blog-preview {
    display: flex;
    flex-direction: row;
    margin: 0 14% 0 14%;
  }

  &__content {
    margin: 20px;
    padding: 20px;
  }

  @media (min-width: 320px) {
    &__blog-preview {
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 900px) {
    &__blog-preview {
      display: flex;
      flex-wrap: wrap;
    }

    &__content {
      flex: 35%;
    }
  }

  @media (min-width: 1200px) {
    &__blog-preview {
      display: flex;
      flex-wrap: nowrap;
    }
  }
}
</style>
