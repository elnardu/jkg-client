<template lang="html">
  <div class="login">
    <form @submit.prevent="submitForm">
      <div class="form-group row">
        <label for="email-input" class="col-3 col-form-label">Почта</label>
        <div class="col-9">
          <input class="form-control" type="email" id="email-input" v-model="email">
        </div>
      </div>
      <div class="form-group row">
        <label for="password-input" class="col-3 col-form-label">Пароль</label>
        <div class="col-9">
          <input class="form-control" type="password" id="password-input" v-model="password">
        </div>
      </div>
      <p class="text-danger">{{error}}</p>
      <button type="submit" name="button" class="btn btn-outline-primary w-100">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: ``,
      password: ``,
      error: ``
    }
  },
  methods: {
    submitForm () {
      this.$http.post(`/api/auth`, {
        email: this.email,
        password: this.password
      }).then(res => {
        if (res.body.token) {
          this.$emit(`setToken`, res.body.token)
          this.$router.push(`/`)
        }
      }).catch(err => {
        if (err.status === 401) {
          this.error = `Неправильное имя пользователя или пароль`
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .login {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  form {
    min-height: 60%;
  }
</style>
