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
  }

  &__header a {
    text-decoration: none;
    color: #1e81b0;
  }
}
@media (min-width: 320px) and (max-width: 768px) {
  .recent-posts {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
