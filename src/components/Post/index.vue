<template lang="html">
  <div class="post container-fluid d-flex justify-content-center">
    <div class="col-12 col-md-8">
      <div class="mb-2 d-flex justify-content-between align-items-center flex-wrap">
        <h2 class="m-0">{{post.title}}</h2>
        <p class="text-primary m-0">{{tagsString}}</p>
        <p class="text-success m-0">{{salaryString}}</p>
      </div>
      <h4>{{post.shortdescription}}</h4>
      <Markdown :rawtext="post.description"/>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
export default {
  name: 'post',
  components: {
    Markdown
  },
  data () {
    return {
      post: {
        title: ``,
        shortdescription: ``,
        description: ``,
        salary: [0, 0],
        tags: []
      }
    }
  },
  mounted () {
    this.$http.post(`/api/post/getById`, {_id: this.$route.params.postid})
    .then(res => {
      this.post = res.body
    })
  },
  computed: {
    tagsString () {
      let s = ``
      this.post.tags.forEach((t, i) => {
        s += (i !== 0) ? ` | ` : ``
        s += t
      })
      return s
    },
    salaryString () {
      if (!this.post.salary) return `—`

      if (this.post.salary[0] === this.post.salary[1]) return this.post.salary[0]
      else return `${this.post.salary[0]} – ${this.post.salary[1]}`
    }
  }
}
</script>

<style lang="css" scoped>
  .post {
    margin-top: 45px;
    padding-top: 25px;
  }
</style>
