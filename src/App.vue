<template>
<div id="app">
  <Navbar :logged="logged" />
  <router-view @setToken="setToken"/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      logged: false,
      token: ``
    }
  },
  created () {
    this.validateToken()
  },
  methods: {
    setToken (token) {
      this.token = token
      this.logged = true

      localStorage.logged = true
      localStorage.token = token
      localStorage.date = Date.now()
    },
    validateToken () { // TODO: обращаться к серверу для валидации
      if (localStorage.logged && localStorage.date - Date.now() < 82800000) { // 1000*60*60*23
        this.setToken(localStorage.token)
      } else {
        localStorage.logged = false
        localStorage.token = false
        localStorage.date = false
      }
    },
    logout () {
      localStorage.logged = false
      localStorage.token = false
      localStorage.date = false

      this.token = ``
      this.logged = false
      this.$router.push(`/`)
    }
  }
}
</script>

<style>
  #app {
    width: 100vw;
    height: 100vw;
    position:relative;
  }
</style>
