<!-- This component adds a Intro to the homepage. -->
<template>
  <h1>{{ msg }}</h1>
  <img src="photo.jpg" alt="my picture" />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum maiores cupiditate ipsam
    dignissimos, sequi nostrum eos sit, dolores veniam expedita incidunt iste ullam amet modi,
    itaque non. Optio, natus quas.
  </p>
  <button>Download resume</button>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
