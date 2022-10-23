<template>
  <form @submit.prevent="handleSubmit">
    <div class="wrap">
      <label>標題:</label>
      <input
        type="text"
        placeholder="請輸入標題(20字內)"
        maxLength="20"
        v-model="title"
      />
      <label>內文:</label>
      <input
        type="text"
        rows="{10}"
        placeholder="請輸入內文(500字內)"
        maxLength="500"
        v-model="body"
      />
      <div class="footer">
        <button @click="post">送出</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostPost',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    post() {
      fetch('https://blogdemo-api.herokuapp.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer` + ' ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify({
          nickname: 'testn',
          title: this.title,
          body: this.body,
          comments: []
        })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok === 0) {
            return setErrorMessage(data.message)
          }
        })
        .then(this.$router.back)
    }
  }
}
</script>

<style></style>
