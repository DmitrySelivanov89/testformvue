<template>
  <section class="container mb-5">
    <form @submit.prevent="checkForm">
      <div class="form-group">
        <div class="mb-2">Представьтесь</div>
        <label class="d-block" for="login">
          <input
              id="login"
              v-model.trim="form.login"
              :class="$v.form.login.$error ? 'is-invalid' : ''"
              class="form-control"
              type="text"/>
          <!--<div class="invalid-feedback">Ошибка</div>-->
        </label>
        <p v-if="$v.form.login.$dirty && !$v.form.login.required "
           class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.login.$dirty && !$v.form.login.minLength"
           class="invalid-feedback">
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Адрес доставки</div>
        <label class="d-block" for="address">
          <input
              id="address"
              v-model.trim="form.address"
              class="form-control"
              type="text"
              :class="$v.form.address.$error ? 'is-invalid' : ''"/>
        </label>
        <p v-if="$v.form.address.$dirty && !$v.form.address.required"
           class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Телефон</div>
        <label class="d-block" for="phone">
          <input
              id="phone"
              v-model.trim="form.phone"
              class="form-control"
              type="tel"
              :class="$v.form.phone.$error ? 'is-invalid' : ''"/>
        </label>
        <p v-if="$v.form.phone.$dirty && !$v.form.phone.required"
           class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.phone.$dirty && !$v.form.phone.numeric"
           class="invalid-feedback">
          Здесь должны быть цифры
        </p>
        <p v-if="$v.form.phone.$dirty && !$v.form.phone.minLength"
           class="invalid-feedback">
          Здесь должно быть 11 символов
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Эл. почта</div>
        <label class="d-block" for="email">
          <input
              id="email"
              v-model.trim="form.email"
              :class="$v.form.email.$error ? 'is-invalid' : ''"
              class="form-control"
              type="email"/>
        </label>
        <p v-if="$v.form.login.$dirty && !$v.form.email.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.login.$dirty && !$v.form.email.email" class="invalid-feedback">
          Email неккоректный
        </p>
      </div>
      <div class="form-group">
        <label class="d-block">
          Комментарий
        </label>
        <textarea
            id="comment"
            v-model="form.comment"
            class="form-control mb-2"
            type="text"
            :class="$v.form.comment.$error ? 'is-invalid' : ''">
        </textarea>
        <p v-if="$v.form.comment.$dirty && !$v.form.comment.required"
           class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <button @click="submitForm" class="btn btn-primary" type="submit">Отправить</button>
    </form>
  </section>
</template>

<script>
import {email, minLength, numeric, required} from "vuelidate/lib/validators";
import {validationMixin} from "vuelidate";

export default {
  mixins: [validationMixin],

  data() {
    return {
      form: {
        login: "",
        address: "",
        phone: 79372121989,
        email: "",
        comment: "",
      },
    };
  },

  validations: {
    form: {
      login: {required, minLength: minLength(5)},
      address: {required},
      email: {required, email},
      phone: {required, numeric, minLength: minLength(11)},
      comment: {required},
    },
  },

  methods: {
    submitForm() {
      console.log('Submitted')
    },

    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("Success");
      }
    },
  },
};
</script>

<style scoped></style>
