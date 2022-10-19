import { ref } from 'vue'
const toPost = () => {
  const toPost = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('https://blogdemo-api.herokuapp.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          nickname,
          title,
          body,
          comments: []
        })
      }).then((res) => res.json())

      if (!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { toPost, error, load }
}
export default toPost
