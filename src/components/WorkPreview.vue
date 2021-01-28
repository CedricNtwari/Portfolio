<!-- This component adds a WorkPreview to the homepage. -->
<template>
  <div class="work-preview">
    <div class="work-preview__column">
      <img class="work-preview__image" alt="My work picture" :src="image" />
    </div>
    <div class="work-preview__column">
      <h1 class="work-preview__header">{{ title }}</h1>
      <small class="work-preview__year">{{ year }}</small>
      <small class="work-preview__subject">{{ subject }}</small>
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
    image: {
      type: String,
    },
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
<style scoped lang="scss">
.work-preview {
  // eslint-disable-next-line prettier/prettier
  display: flex;
  flex-wrap: wrap;

  &:hover {
    color: #1e81b0;
  }

  &__column {
    flex: 50%;
  }

  &__image {
    width: 100%;
    max-width: 400px;
  }
}

.work-preview::after {
  display: inline-block;
  content: '';
  border-top: 1px solid lightgray;
  width: 100%;
  margin: 20px;
}
</style>
