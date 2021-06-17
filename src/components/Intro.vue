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
        ' and I am also into open-source these days. Aside from coding I also help other developers' +
        ' during one-to-one session online. I am active in the local developers community in my home' +
        ' country Burundi. I help organising meetups and speak there from time to time.',
      cta: 'Download Resume',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- IE10 and down do not support flex -->
<style scoped lang="scss">
.intro {
  margin: 5%;
  text-align: center;
  padding-top: 40px;

  @media ($tablet-up) {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 15%;
    margin-right: 15%;
    margin-bottom: 5%;
    margin-left: 15%;
    text-align: left;
    padding: 0;
  }

  &__header {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 44px;
    line-height: 60px;
    text-align: center;

    @media ($tablet-up) {
      text-align: left;
    }
  }

  &__paragraph {
    font-size: 16px;
    line-height: 1.6;
    text-align-last: center;

    @media ($tablet-up) {
      text-align-last: left;
    }
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
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 20px;
    font-family: 'Heebo', sans-serif;
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
