<!-- This component adds a BlogPreview to the homepage. -->
<template>
  <div class="blogPreview">
    <h1>{{ title }}</h1>
  </div>
  <div class="infos">
    <small>{{ infos }} | {{ infos1 }} </small>
  </div>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit optio hic ullam
    temporibus aperiam consequuntur alias odio cupiditate praesentium maiores, ipsa neque?
    Blanditiis, aperiam placeat. Quasi nihil reprehenderit ab?
  </p>
</template>

<script>
export default {
  name: 'BlogPreview',
  props: {
    title: {
      type: String,
    },
    infos: {
      type: String,
    },
    infos1: {
      type: String,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
