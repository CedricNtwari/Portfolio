<!-- This component creates a RecentPosts to the homepage. -->
<template>
  <div class="recent-posts">
    <div class="recent-posts__header">
      <h3 class="recent-posts__title">Recent posts</h3>
      <router-link class="recent-posts__link" to="/blog">View all</router-link>
    </div>
    <div class="recent-posts__blogPreview">
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
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recent-posts {
  background-color: #e3edee;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10% 0 10%;
  }
  &__title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 30px;
  }
  &__link {
    text-decoration: none;
    color: #1e81b0;
    padding: 40px 0;
  }

  &__blogPreview {
    display: flex;
    flex-direction: row;
    margin: 0 7% 0 7%;
  }

  &__content {
    margin: 20px;
    padding: 20px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    &__blogPreview {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (min-width: 1300px) {
    &__blogPreview {
      width: 85%;
      height: 40vh;
    }
  }
}
</style>
