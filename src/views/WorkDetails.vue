<template>
  <div class="work-details">
    <GoBack />
    <div class="work-preview__column">
      <img class="work-preview__image" alt="My work picture" :src="image" />
    </div>
    <div class="work-preview__column">
      <h1 class="work-preview__header">{{ title }}</h1>
      <span class="work-preview__year">{{ year }}</span>
      <span class="work-preview__subject">{{ subject }}</span>
      <p class="work-preview__paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>
<script>
import jobs from '@/jobs.js'
import GoBack from '@/components/GoBack.vue'
export default {
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
