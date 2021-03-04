<template>
  <div class="work-details">
    <GoBack />
    <div class="work-details__column">
      <img class="work-details__image" alt="My work picture" :src="image" />
    </div>
    <div class="work-details__column">
      <h1 class="work-details__header">{{ work.title }}</h1>
      <span class="work-details__year">{{ work.year }}</span>
      <span class="work-details__subject">{{ work.subject }}</span>
      <p class="work-details__paragraph">{{ work.paragraph }}</p>
    </div>
  </div>
</template>
<script>
import jobs from '@/jobs.js'
import GoBack from '@/components/GoBack.vue'
export default {
  name: 'WorkDetails',
  components: {
    GoBack,
  },
  data() {
    return {
      workId: this.$route.params.id,
      jobs,
    }
  },
  computed: {
    blog() {
      return jobs.works.find(work => work.id === this.WorkId)
    },
  },
}
</script>
