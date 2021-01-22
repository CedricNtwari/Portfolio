<!-- This component adds a BlogPreview to the homepage. -->
<template>
  <div class="blogpreview">
    <h1 class="blogpreview-title">{{ title }}</h1>
    <div class="blogpreview__infos">
      <small class="blogpreview__infos-date">{{ date }}</small> |
      <small class="blogpreview__infos-subject">{{ subject }}</small>
    </div>
    <p class="blogpreview-paragraph">
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
.blogpreview {
  margin: 20px;
  padding: 20px;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: #1e81b0;
  }

  &__infos {
    // eslint-disable-next-line prettier/prettier

    &-date {
      padding-right: 40px;
    }
    &-subject {
      padding-left: 40px;
    }
  }
}
</style>
