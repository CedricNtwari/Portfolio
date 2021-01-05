<!-- This component adds a Intro to the homepage. -->
<!-- https://www.npmjs.com/package/jspdf  jsdpf library-->
<template>
  <div class="row">
    <div class="column">
      <h1>{{ msg }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum maiores cupiditate ipsam
        dignissimos, sequi nostrum eos sit, dolores veniam expedita incidunt iste ullam amet modi,
        itaque non. Optio, natus quas.
      </p>
      <button @click="download">Download resume</button>
    </div>
    <div class="column">
      <img alt="My picture" src="../assets/bb.png" />
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
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
button {
  background-color: #ff7999;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
}
img {
  width: 40%;
  height: 40%;
  border-radius: 50%;
  display: block;
  margin: auto;
  margin-top: 50px;
}
@media (min-width: 320px) and (max-width: 768px) {
  .column {
    width: 100%;
  }
}
</style>
