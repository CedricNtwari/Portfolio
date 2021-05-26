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
  // eslint-disable-next-line prettier/prettier
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  &__column {
    flex: 50%;
    padding: 0 30px 0 0;

    @media (min-width: 320px) and (max-width: 768px) {
      flex-basis: 100%;
    }
  }

  &__column:nth-child(1) {
    flex: 0 0 300px;
  }

  &__image {
    max-width: 100%;
    height: 300px;
    border-radius: 7%;
    margin: 20px 0 20px 0;
  }

  &__year {
    padding: 5px;
    background-color: black;
    color: white;
    border-radius: 50%;
    font-size: 15px;
  }

  &__subject {
    padding-left: 40px;
    font-size: 15px;
    color: grey;
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
