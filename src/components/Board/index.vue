<template lang="html">
  <div class="container-fluid board">
    <div class="row">
      <div class="col-12 col-md-3">
        <Search/>
      </div>
      <div class="col-12 col-md-9">
        <Posts :posts="posts"/>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from './Posts'
import Search from './Search'

export default {
  name: 'board',
  components: {
    Posts,
    Search
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.$http.post('/api/post/get').then(res => {
      this.posts = res.body
    })
  }

}
</script>

<style lang="css" scoped>
.board {
  /* высота navbar */
  margin-top: 45px;

  padding-top: 25px;
  height: auto;
}
</style>
