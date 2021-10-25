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
            type="text"
          />
          <!--                    <div class="invalid-feedback">Ошибка</div>-->
        </label>
        <p
          v-if="$v.form.login.$dirty && !$v.form.login.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.login.$dirty && !$v.form.login.minLength"
          class="invalid-feedback"
        >
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
            :class="this.form.address.$error ? 'is-invalid' : ''"
          />
        </label>
        <p
          v-if="$v.form.address.$dirty && !$v.form.address.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.address.$dirty && !$v.form.address.minLength"
          class="invalid-feedback"
        >
          Здесь должно быть больше 5-и символов
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
            :class="this.form.phone.$error ? 'is-invalid' : ''"
          />
        </label>
        <p
          v-if="$v.form.phone.$dirty && !$v.form.phone.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.phone.$dirty && !$v.form.phone.minLength.numeric"
          class="invalid-feedback"
        >
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Эл. почта</div>
        <label class="d-block" for="email">
          <input
            id="email"
            v-model.trim="form.email"
            :class="this.form.email.$error ? 'is-invalid' : ''"
            class="form-control"
            type="email"
          />
        </label>
        <p
          v-if="$v.form.email.$dirty && !$v.form.email.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.email.$dirty && !$v.form.email.email"
          class="invalid-feedback"
        >
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
          :class="this.form.comment.$error ? 'is-invalid' : ''"
        ></textarea>
        <p
          v-if="$v.form.comment.$dirty && !$v.form.comment.required"
          class="invalid-feedback"
        >
          Обязательное поле
        </p>
        <p
          v-if="$v.form.comment.$dirty && !$v.form.comment.minLength"
          class="invalid-feedback"
        >
          Здесь должно быть больше 10-и символов
        </p>
      </div>
      <button class="btn btn-primary" type="submit">Отправить</button>
    </form>
  </section>
</template>

<script>
import minLength from "vuelidate/lib/validators/minLength";
import required from "vuelidate/lib/validators/required";
import email from "vuelidate/lib/validators/email";
import { validationMixin } from "vuelidate";
import numeric from "vuelidate/lib/validators/integer";

export default {
  mixins: [validationMixin],

  data() {
    return {
      form: {
        login: "",
        address: "",
        phone: "",
        email: "",
        comment: "",
      },
    };
  },

  validations: {
    form: {
      login: { required, minLength: minLength(5) },
      address: { required, minLength: minLength(11) },
      email: { required, email },
      phone: { required, numeric, minLength: minLength(11) },
      comment: { required, minLength: minLength(11) },
    },
  },

  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("Валидация прошла успешно");
      }
    },
  },
};
</script>

<style scoped></style>
