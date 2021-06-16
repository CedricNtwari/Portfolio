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
  margin: 5% 20%;

  &__header {
    border-bottom: 1px solid $color-primary;
    width: 5%;
    padding-bottom: 20px;
  }
  &__title {
    color: $color-light;
    font-size: 15px;
  }

  &__label {
    font-weight: bold;

    &::after {
      content: '*';
      color: $color-red;
      font-weight: bold;
    }
  }

  &__input {
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
    outline: 0;
    border-width: 0 0 1px;

    &:focus {
      border-color: $color-primary;
    }
  }

  &__textarea {
    height: 150px;
    width: 100%;
    outline: none;
    margin-top: 10px;

    &:focus {
      border-color: $color-primary;
    }
  }

  &__error {
    color: $color-red;
  }

  &__button {
    margin-top: 30px;
    padding: 10px;
    background-color: $color-primary;
    color: $color-white;
    border: none;
  }
}
</style>
