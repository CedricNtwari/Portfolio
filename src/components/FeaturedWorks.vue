<!-- This component creates a FeaturedWorks to the homepage.. -->
<template>
  <div class="featured-works">
    <h1 class="featured-works__header">Featured works</h1>
    <WorkPreview
      v-for="work in works"
      :key="work.id"
      :image="work.image"
      :title="work.title"
      :year="work.year"
      :subject="work.subject"
    />
  </div>
</template>

<script>
import WorkPreview from '@/components/WorkPreview.vue'

export default {
  name: 'FeaturedWorks',
  components: {
    WorkPreview,
  },
  data() {
    return {
      works: [
        {
          id: 1,
          image: '../assets/dashboard.png',
          title: 'Designing Dashboard',
          year: '2020',
          subject: 'Dashboard',
        },
        {
          id: 2,
          image: '../assets/portrait.jpg',
          title: 'Vibrant Portraits of 2020',
          year: '2018',
          subject: 'Illustration',
        },
        {
          id: 3,
          image: '../assets/letterImage.jpg',
          title: '36 Days od Malayalam type',
          year: '2018',
          subject: 'Typography',
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
