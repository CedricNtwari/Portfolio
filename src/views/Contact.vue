<template>
  <div class="contact">
    <h1 class="contact__header">{{ header }}</h1>
    <h6 class="contact__title">{{ title }}</h6>
    <form @submit.prevent="handleSubmit">
      <div class="contact__block">
        <label class="contact__label" for="name">Name:</label>
        <br />
        <input
          class="contact__input"
          type="text"
          v-model="name"
          placeholder="Your name..."
          required
        />
        <div v-if="nameError" class="contact__error">{{ nameError }}</div>
      </div>
      <div class="contact__block">
        <label class="contact__label" for="email">Email:</label> <br />
        <input
          class="contact__input"
          type="email"
          v-model="email"
          placeholder="Your email address..."
          required
        />
      </div>
      <div class="contact__block">
        <label class="contact__label" for="textarea">Message:</label> <br />
        <textarea
          class="contact__textarea"
          v-model="message"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button class="contact__button">Send message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      header: 'Contact',
      title: 'To get in touch fill the form below.',
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
  margin: 20px;
  padding: 20px;

  &__header::after {
    display: inline-block;
    content: '';
    border-bottom: 1px solid lightgray;
    width: 100%;
  }

  &__title {
    color: gray;
    font-size: 15px;
  }

  &__label {
    font-weight: bold;
  }

  &__label::after {
    content: '*';
    color: red;
    font-weight: bold;
  }

  &__input {
    height: 25px;
    width: 100%;
    margin-bottom: 20px;
  }

  &__textarea {
    height: 150px;
    width: 100%;
  }

  &__error {
    color: red;
  }

  &__button {
    margin-top: 30px;
    padding: 10px;
    background-color: #ff7999;
    color: white;
    border: none;
  }
}
</style>
