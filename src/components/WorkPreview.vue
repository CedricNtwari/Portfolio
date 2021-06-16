<!-- This component adds a WorkPreview to the homepage. -->
<template>
  <div class="work-preview">
    <div class="work-preview__column">
      <img class="work-preview__image" alt="My work picture" :src="image" />
    </div>
    <div class="work-preview__column">
      <h1 class="work-preview__header">{{ title }}</h1>
      <span class="work-preview__year">{{ year }}</span>
      <span class="work-preview__subject">{{ subject }}</span>
      <p class="work-preview__paragraph">
        {{ text }}
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
      required: true,
      default: '../assets/letterImage.png',
    },

    title: {
      type: String,
      required: true,
    },

    year: {
      type: String,
    },

    subject: {
      type: String,
    },

    text: {
      type: String,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-preview {
  padding-bottom: 20px;

  @media ($tablet-large-up) {
    display: flex;
    flex-direction: row;
  }

  &__column {
    padding-right: 20px;
  }

  &__header {
    font-size: 26px;
    padding-bottom: 20px;
  }

  &__image {
    width: 100%;
    height: 300px;
    border-radius: 7%;

    @media ($tablet-up) {
      width: 300px;
    }
  }

  &__date {
    padding-right: 40px;
    font-size: 15px;
  }

  &__subject {
    padding-left: 40px;
    font-size: 15px;
    color: $color-light;
  }

  &__paragraph {
    // padding-top: 20px;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 1.6;
  }

  &::after {
    // display: inline-block;
    // content: '';
    // border-top: 1px solid $color-light;
    // width: 100%;

    @media ($tablet-large-up) {
      display: none;
    }
  }
}
</style>
