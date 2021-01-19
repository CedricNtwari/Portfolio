<!-- This component creates a responsive navigation bar. -->
<template>
  <div class="recent-posts">
    <div class="recent-posts__header">
      <h3>Recent posts</h3>
      <a href="/blog">View all</a>
    </div>
    <div class="recent-posts__blogPreview">
      <BlogPreview
        title="Making a design from from scratch"
        infos="12 Feb 2020"
        infos1="Design, Pattern"
      />
      <BlogPreview
        title="Creating pixel perfect icons in Figma"
        infos="12 Feb 2020"
        infos1="Figma, Icon Design"
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
  &__header h3 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
    font-size: 30px;
  }

  &__header a {
    text-decoration: none;
    color: #1e81b0;
  }

  &__blogPreview {
    display: flex;
    flex-direction: row;
    margin: 0 7% 0 7%;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    &__blogPreview {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
