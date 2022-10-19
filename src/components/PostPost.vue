<template>
  <form @submit.prevent="handleSubmit">
    <div class="wrap">
      <label>標題:</label>
      <input type="text" placeholder="請輸入標題(20字內)" maxLength="20" />
      <label>內文:</label>
      <input
        type="text"
        rows="{10}"
        placeholder="請輸入內文(500字內)"
        maxLength="500"
      />
      <div class="footer">
        <button>送出</button>
      </div>
    </div>
  </form>
</template>

<script>
import toPost from '../composables/toPost'
export default {
    setup(){
        const{}
    }
}
</script>

<style></style>
