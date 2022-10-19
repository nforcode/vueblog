<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <p v-for="msg in post.comments" :key="post.comments.cmid">
      {{ msg.cmmsg }}
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })
    return { snippet }
  }
}
</script>

<style></style>
