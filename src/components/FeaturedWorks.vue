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
          image:
            'https://3tllv348mk0t1s188m2qazuj-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/GA-dash-v2-1024x539.jpg',
          title: 'Designing Dashboard',
          year: '2020',
          subject: 'Dashboard',
        },
        {
          id: 2,
          image: 'https://i.pinimg.com/236x/7a/fb/b0/7afbb021606b85e51049b3968bedfe5b.jpg',
          title: 'Vibrant Portraits of 2020',
          year: '2018',
          subject: 'Illustration',
        },
        {
          id: 3,
          image: 'https://cdn1.flamp.ru/31acab38b92bdbb7889ecf6e1a5f1d5e_1920.jpg',
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
<style scoped lang="scss">
.featured-works {
  margin: 0 15% 0 15%;

  &__header {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
    font-size: 30px;
    padding: 20px 0;
  }
}
</style>
