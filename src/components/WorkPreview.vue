<!-- This component adds a WorkPreview to the homepage. -->
<template>
  <div class="work-preview">
    <div class="work-preview__column">
      <img class="work-preview__image" /> alt="My work picture" src="" />
    </div>
    <div class="work-preview__column">
      <h1 class="work-preview__header">>{{ title }}</h1>
      <small class="work-preview__details">>{{ year }}{{ subject }} </small>
      <p class="work-preview__paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit optio hic ullam
        temporibus aperiam consequuntur alias odio cupiditate praesentium maiores, ipsa neque?
        Blanditiis, aperiam placeat. Quasi nihil reprehenderit ab?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkPreview',
  props: {
    title: {
      type: String,
    },
    year: {
      type: String,
    },
    subject: {
      type: String,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
