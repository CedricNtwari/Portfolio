<!-- This component adds a Intro to the homepage. -->
<!-- https://www.npmjs.com/package/jspdf  jsdpf library-->
<template>
  <div class="intro">
    <div class="intro__column">
      <h1 class="intro__column-header">{{ msg }}</h1>
      <p class="intro__column-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum maiores cupiditate ipsam
        dignissimos, sequi nostrum eos sit, dolores veniam expedita incidunt iste ullam amet modi,
        itaque non. Optio, natus quas.
      </p>
      <button class="intro__column-button" @click="download">Download resume</button>
    </div>
    <div class="intro__column">
      <img class="intro__column-image" alt="My picture" src="../assets/bb.png" />
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- IE10 and down do not support flex -->
<style scoped lang="scss">
.intro {
  display: flex;
  flex-wrap: wrap;
  margin: 10%;

  &__column {
    flex: 50%;

    &-button {
      background-color: #ff7999;
      color: white;
      border: none;
      padding: 15px;
      cursor: pointer;
    }

    &-image {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 50%;
      display: block;
      margin: auto;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    &__column {
      flex-basis: 100%;
    }
  }
}
</style>
