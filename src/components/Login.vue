<template>
  <input type="text" v-model="username" />
  <input type="password" v-model="password" />
  <button @click="login">登入</button>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: 'testn',
      password: 'blogdemo'
    }
  },
  methods: {
    login() {
      fetch('https://blogdemo-api.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          username: 'testn',
          password: 'blogdemo'
        })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok === 0) {
            return setErrorMessage(data.message)
          }
          sessionStorage.setItem('token', data.token)
        })
        .then(this.$router.back)
    }
  }
}
</script>

<style></style>
