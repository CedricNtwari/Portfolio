<!-- This component adds a Intro to the homepage. -->
<!-- https://www.npmjs.com/package/jspdf  jsdpf library-->
<template>
  <div class="intro">
    <div class="intro__column">
      <img class="intro__image" alt="My picture" src="../assets/bb.png" />
    </div>
    <div class="intro__column">
      <h1 class="intro__header">{{ msg }}</h1>
      <p class="intro__paragraph">{{ paragraph }}</p>
      <button class="intro__button" @click="download">{{ cta }}</button>
    </div>
  </div>
</template>

<script>
import jspdf from 'jspdf'

export default {
  name: 'Intro',

  props: {
    msg: {
      type: String,
    },
  },

  methods: {
    download() {
      const doc = new jspdf()
      doc.text('Hello world!', 10, 10)
      doc.save('resume.pdf')
    },
  },

  data() {
    return {
      paragraph:
        'Passionate about the web and front-end development in particular. I write code for a living' +
        'and I am also into open-source these days. Aside from coding I also help other developers' +
        'during one-to-one session online. I am active in the local developers community in my home' +
        'country Mauritius. I help organising meetups and speak there from time to time.',
      cta: 'Download resume',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- IE10 and down do not support flex -->
<style scoped lang="scss">
.intro {
  margin: 15%;

  @media ($tablet-up) {
    display: flex;
    flex-direction: row-reverse;
  }

  &__column {
    @media ($tablet-up) {
      flex: 50%;
    }
  }

  &__button {
    background-color: $color-primary;
    border: none;
    color: $color-white;
    cursor: pointer;
    padding: 15px;
    margin-top: 30px;
  }

  &__image {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    display: block;
    margin: auto;
  }
}
</style>
