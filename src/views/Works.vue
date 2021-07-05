<template>
  <div class="works">
    <h1 class="works__header">{{ header }}</h1>
    <router-link
      class="works__link"
      v-for="work in works"
      :key="work.id"
      :to="{ name: 'WorkDetails', params: { id: work.id } }"
    >
      <WorkPreview
        class="works__preview"
        :image="work.image"
        :title="work.title"
        :year="work.year"
        :subject="work.subject"
        :text="work.text"
      />
    </router-link>
  </div>
</template>

<script>
import WorkPreview from '@/components/WorkPreview.vue'
import { works } from '../works-data.js'

export default {
  name: 'Works',

  components: {
    WorkPreview,
  },

  data() {
    return {
      header: 'Work',
      works,
    }
  },
}
</script>
<style lang="scss">
.works {
  margin: 5%;

  @media ($tablet-up) {
    margin: 10%;
  }

  &__header {
    font-size: 30px;
    border-bottom: 1px solid $color-primary;
    width: 5%;
    padding-bottom: 20px;
    margin: 0;

    @media ($tablet-up) {
      font-size: 44px;
    }
  }

  &__link {
    text-decoration: none;
    color: $color-dark;
    padding-top: 0 !important;

    &:hover {
      color: $color-secondary;
    }
  }
}
</style>
