<template lang="html">
  <div class="posts card-columns">
    <Post v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'posts',
  props: ['posts'],
  components: {
    Post
  }
}
</script>

<style lang="css" scoped>
  .posts {
    height: auto;
  }


</style>
