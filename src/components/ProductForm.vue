<template>
  <section class="container mb-5">
    <form @submit.prevent="checkForm">
      <div class="form-group">
        <div class="mb-2">Представьтесь</div>
        <label for="login" class="d-block">
          <input type="text"
                 id="login"
                 :class="this.form.login.$error ? 'is-invalid' : ''"
                 v-model.trim="form.login"
                 class="form-control"/>
<!--                    <div class="invalid-feedback">Ошибка</div>-->
        </label>
        <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Адрес доставки</div>
        <label for="address" class="d-block">
          <input type="text"
                 id="address"
                 class="form-control"
                 v-model.trim="form.address"
          />
        </label>
        <p v-if="$v.form.address.$dirty && !$v.form.address.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.address.$dirty && !$v.form.address.minLength" class="invalid-feedback">
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Телефон</div>
        <label for="phone" class="d-block">
          <input type="tel" id="phone" class="form-control"
                 v-model.trim="form.phone"/>
        </label>
        <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.phone.$dirty && !$v.form.phone.minLength" class="invalid-feedback">
          Здесь должно быть больше 5-и символов
        </p>
      </div>
      <div class="form-group">
        <div class="mb-2">Эл. почта</div>
        <label for="email" class="d-block">
          <input id="email"
                 type="email"
                 :class="this.form.email.$error ? 'is-invalid' : ''"
                 v-model.trim="form.email"
                 class="form-control"/>
        </label>
        <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">
          Email неккоректный
        </p>
      </div>
      <div class="form-group">
        <label class="d-block">
          Комментарий
          <textarea v-model="form.comment" type="text" id="comment" class="form-control mb-2"></textarea>
        </label>
        <p v-if="$v.form.comment.$dirty && !$v.form.comment.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="$v.form.comment.$dirty && !$v.form.comment.minLength" class="invalid-feedback">
          Здесь должно быть больше 10-и символов
        </p>
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
  </section>
</template>

<script>

import minLength from "vuelidate/lib/validators/minLength";
import required from "vuelidate/lib/validators/required";
import email from "vuelidate/lib/validators/email";
import {validationMixin} from "vuelidate";
import numeric from "vuelidate/lib/validators/numeric";


export default {
  mixins: [validationMixin],
  name: "Form",

  data() {
    return {
      form: {
        login: '',
        address: '',
        phone: '',
        email: '',
        comment: '',
      },
    }
  },

  validations: {
    form: {
      login: {required, minLength: minLength(11)},
      address: {required},
      email: {required, email},
      phone: {required, numeric},
      comment: {required}
    }
  },

  methods: {
    checkForm() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        console.log('Валидация прошла успешно')
      }
    }
  }
}
</script>

<style scoped>

</style>
