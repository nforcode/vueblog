<template>
  <div class="home">
    <h1>Home</h1>
    <router-link :to="{ name: 'PostPost' }">
      <button>發文</button>
    </router-link>
    <router-link :to="{ name: 'Login' }">
      <button>登入</button>
    </router-link>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()
    load()
    return { posts, error }
  }
}
</script>

<style></style>
