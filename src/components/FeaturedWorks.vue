<!-- This component creates a FeaturedWorks to the homepage.. -->
<template>
  <div class="featured-works">
    <h1 class="featured-works__header">Featured works</h1>
    <router-link
      class="featured-works__link"
      v-for="work in displayedWorksPosts"
      :key="work.id"
      :to="{ name: 'WorkDetails', params: { id: work.id } }"
      ><WorkPreview
        :key="work.id"
        :image="work.image"
        :title="work.title"
        :year="work.year"
        :subject="work.subject"
        :text="work.text"
    /></router-link>
  </div>
</template>

<script>
import WorkPreview from '@/components/WorkPreview.vue'
import { works } from '../works-data.js'

export default {
  name: 'FeaturedWorks',

  components: {
    WorkPreview,
  },

  data() {
    return {
      works,
    }
  },

  computed: {
    displayedWorksPosts() {
      return works.slice(0, 3)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.featured-works {
  margin: 0 5%;

  @media ($tablet-up) {
    margin: 0 15%;
  }

  &__header {
    text-align: center;
    font-size: 22px;
    font-weight: normal;
    padding-top: 30px;
    margin: 0;

    @media ($tablet-up) {
      text-align: left;
    }
  }

  &__link {
    text-decoration: none;
    color: $color-dark;

    &:hover {
      color: $color-secondary;
    }
  }
}
</style>
