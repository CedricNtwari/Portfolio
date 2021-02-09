<template>
  <div class="contact">
    <h1 class="contact__header">{{ header }}</h1>
    <h6 class="contact__title">{{ title }}</h6>
    <form @submit.prevent="handleSubmit">
      <div class="contact__block">
        <label class="contact__label" for="name">Name</label> <br />
        <input class="contact__input" type="text" v-model="name" required />
        <div v-if="nameError" class="contact__error">{{ nameError }}</div>
      </div>
      <div class="contact__block">
        <label class="contact__label" for="email">Email</label> <br />
        <input class="contact__input" type="email" v-model="email" required />
      </div>
      <div class="contact__block">
        <label class="contact__label" for="textarea">Message</label> <br />
        <textarea class="contact__textarea" v-model="message"></textarea>
      </div>
      <div class="contact__button">
        <button>Send message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      header: 'Contact',
      title: 'To get in touch fill the form below',
      name: '',
      email: '',
      message: '',
      nameError: '',
    }
  },
  methods: {
    handleSubmit() {
      console.log('form submitted')

      // validate name
      this.nameError = this.name.length > 1 ? '' : 'Name must be more than one character'
    },
  },
}
</script>

<style lang="scss">
.contact {
  &__error {
    color: red;
  }
}
</style>
