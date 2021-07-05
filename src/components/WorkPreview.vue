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
  <div class="work-preview__line"></div>
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
  padding-top: 35px;

  @media ($tablet-large-up) {
    display: flex;
    flex-direction: row;
  }

  &__column {
    padding-right: 30px;
  }

  &__header {
    @media ($tablet-up) and ($tablet-large-up) {
      font-size: 26px;
      padding-bottom: 20px;
      margin: 0;
      padding-top: 0;
    }
  }

  &__image {
    width: 100%;
    height: 200px;
    border-radius: 6px;

    @media ($tablet-up) {
      width: 300px;
    }
  }

  &__year {
    font-size: 18px;
    background-color: $color-dark;
    color: $color-white;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 16px;
  }

  &__subject {
    padding-left: 30px;
    font-size: 20px;
    color: $color-light;
  }

  &__paragraph {
    font-size: 16px;
    line-height: 1.6;
    padding-top: 10px;
  }
}

.work-preview:hover {
  .work-preview__subject,
  .work-preview__year {
    color: $color-secondary;
  }
}

.work-preview__line {
  content: '';
  border-top: 1px solid $color-line-break;
  width: 100%;
}
</style>
