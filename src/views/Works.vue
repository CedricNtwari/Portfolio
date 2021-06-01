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
  margin: 10%;

  &__link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.893);

    &:hover {
      color: #1e81b0;
    }
  }
}
</style>
