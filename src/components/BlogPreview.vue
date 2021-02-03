<!-- This component adds a BlogPreview to the homepage. -->
<template>
  <div class="blog-preview">
    <h1 class="blog-preview__title">{{ title }}</h1>
    <div class="blog-preview__infos">
      <span class="blog-preview__date">{{ date }}</span> |
      <span class="blog-preview__subject">{{ subject }}</span>
    </div>
    <p class="blog-preview__paragraph">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit optio hic ullam
      temporibus aperiam consequuntur alias odio cupiditate praesentium maiores, ipsa neque?
      Blanditiis, aperiam placeat. Quasi nihil reprehenderit ab?
    </p>
  </div>
</template>

<script>
export default {
  name: 'BlogPreview',
  props: {
    title: {
      type: String,
    },
    date: {
      type: String,
    },
    subject: {
      type: String,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-preview {
  background-color: white;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  &:hover {
    color: #1e81b0;
  }

  &__date {
    padding-right: 40px;
    font-size: 15px;
  }
  &__subject {
    padding-left: 40px;
    font-size: 15px;
  }
}
</style>
